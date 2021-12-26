import React,{Component,createContext,createRef} from 'react';
import AIOButton from './aio-button';
import './index.css';
export default class GAH extends Component{
  constructor(props){
    super(props);
    this.calc = new dateCalculator();
  }
  getDateStyle(type,obj){
    let {getDateStyle = ()=>{return {}}} = this.props;
    let {getDateStyle:GetDateStyle = ()=>{return {}}} = this.props[type]
    let selfDateStyle = GetDateStyle(obj) || {}
    selfDateStyle = typeof selfDateStyle === 'object'?selfDateStyle:{};
    let allDateStyle = getDateStyle(obj) || {}
    allDateStyle = typeof allDateStyle === 'object'?allDateStyle:{};
    return {...allDateStyle,...selfDateStyle}
  }
  setDisabled(type,obj){
    let {start,end,setDisabled = ()=>false} = this.props;
    if(type === 'start' && this.calc.isGreater(obj.dateString,end.value)){return true}
    if(type === 'end' && this.calc.isLess(obj.dateString,start.value)){return true}
    if(setDisabled(obj,this.calc) === true){return true}
    let {setDisabled:SetDisabled = ()=>false} = this.props[type];
    if(SetDisabled(obj,this.calc) === true){return true}
    return false
  }
  render(){
    let {range} = this.props;
    if(range){
      let {start,end,calendarType = 'gregorian',unit = 'day'} = this.props;
      if(typeof start !== 'object'){
        console.error('gah datepicker error => in range mode, start props should be an object');
        return null
      }
      if(typeof end !== 'object'){
        console.error('gah datepicker error => in range mode, end props should be an object');
        return null
      }
      return (
        <div className='gah-rangepicker' style={{direction:calendarType === 'gregorian'?'ltr':'rtl'}}>
          <GAHBase 
            {...this.props}
            {...start} 
            value={start.value} 
            setDisabled={(obj)=>this.setDisabled('start',obj)}
            getDateStyle={(obj)=>this.getDateStyle('start',obj)}
            editValue={(text)=>{
              if(start.editValue){return start.editValue(text)}
              if(calendarType === 'gregorian'){return 'From Date' + ' : ' + text;}
              if(calendarType === 'jalali'){return 'از تاریخ' + ' : ' + text}
              
            }}
            onChange={start.onChange?(obj)=>start.onChange(obj):undefined}
            multiselect={false}
            unit={unit}
            calendarType={calendarType}
          />
          <GAHBase 
            {...this.props}
            {...end} 
            value={end.value}
            setDisabled={(obj)=>this.setDisabled('end',obj)}
            getDateStyle={(obj)=>this.getDateStyle('end',obj)}
            editValue={(text)=>{
              if(end.editValue){return end.editValue(text)}
              if(calendarType === 'gregorian'){return 'To Date' + ' : ' + text;}
              if(calendarType === 'jalali'){return 'تا تاریخ' + ' : ' + text;}
            }}
            onChange={end.onChange?(obj)=>end.onChange(obj):undefined}
            multiselect={false}
            unit={unit}
            calendarType={calendarType}
          />
        </div>
      )
    }
    else{return <GAHBase {...this.props}/>}
  }
}
class GAHBase extends Component{
  constructor(props){
    super(props);
    this.init();
  }
  init(){
    this.fn = new RDATE({
      getState:()=>this.state,
      getProps:()=>this.props,
      setState:(obj,send)=>this.SetState(obj,send)
    });
    var {prevYears,nextYears,calendarType,value,theme = []} = this.props;
    this.icons = {
      minus:(
        <svg style={{width:"24px",height:"24px"}} width={24} height={24} stroke={theme[0]}>
          <path fill="transparent" d="M13 8 L9 12 L13 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
        </svg>
      ),
      plus:(
        <svg style={{width:"24px",height:"24px"}} width={24} height={24} stroke={theme[0]}>
          <path fill="transparent" d="M11 8 L15 12 L11 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
        </svg>
      )
    }
    let today = this.fn.calc.getToday(calendarType);
    let startYear = today[0] - prevYears;
    let endYear = today[0] + nextYears;
    let years = [];
    for(var i = startYear; i <= endYear; i++){years.push(i);}
    this.state = {prevValue:JSON.stringify(value),startYear,endYear,years};
    this.updateState();
  }
  updateState(setState = false,value = this.props.value){
    var obj = this.fn.validateValue(value);
    if(setState){this.setState({...obj,activeYear:obj.year,activeMonth:obj.month,activeDay:obj.day})}
    else{this.state = {...this.state,...obj};}
  }
  SetState(obj,sendChanges){
    var {onChange,multiselect} = this.props;
    let callback = ()=>{};
    if(sendChanges && onChange){
      callback = ()=>onChange(multiselect?this.fn.updateValues(this.values,this.details.dateString):this.details)
    }
    this.setState(obj,callback);
  }
  componentDidUpdate(){if(this.update){this.updateState(true);}}
  getPopup(){
    return (
      <div className='gah-popup' style={{display:'flex'}}>
        <GAHDatePickerPopup 
          {...this.props} {...this.state}
          fn={this.fn} icons={this.icons}
          style={undefined}
          SetState={this.SetState.bind(this)}
          details={this.details}
          values={this.values}
        />
        {this.fn.getTodayContent(this.details,'react')}
      </div>
    )
  }
  renderMultiselect(){
    var {calendarType,className,icon,onChange,unit} = this.props;
    this.details = this.fn.getDateDetails();
    this.values = this.fn.getValues();
    return (
        <AIOButton 
          showTag={false}
          {...this.props}
          before={icon?icon:undefined}
          type='multiselect'
          editTag={(text)=>{
            if(unit === 'hour'){
              let {splitter} = this.state;
              let [year,month,day,hour] = text.split(splitter);
              return `${year}${splitter}${month}${splitter}${day} ${hour}:00`
            }
            return text
          }}
          values={this.values}
          className={'gah' + (className?' ' + className:'')}
          text={this.fn.getValue() + ' (' + this.values.length + ')'}
          options={this.values.map((o)=>{return {value:o,text:o}})}
          rtl={calendarType === 'jalali'}
          onChange={(values,value,type)=>{
            onChange(this.values.filter((o)=>o !== value))
          }}
          popupStyle={{border:'none'}}
          popupClassName='gah-popup-container'
          popOver={()=>this.getPopup()}
        />
    )
  }
  swipe(dy){
    if(this.lastSwipe !== undefined && dy === this.lastSwipe){return}
    this.lastSwipe = dy;
    var {calendarType,unit,setDisabled} = this.props;
    if(!this.startSwipe){
      let {year,month,day,hour} = this.state;
      this.startSwipe = [year,month,day,hour]
    }
    let [year,month,day,hour] = this.fn.calc.getByOffset({date:this.startSwipe,offset:dy,unit,calendarType});
    if(setDisabled(this.fn.validateValue([year,month,day,hour],unit),this.fn.calc)){return}
    this.setState({year,month,day,hour})
  }
  render(){
    this.update = false;
    var {calendarType,className,icon,multiselect,onChange = ()=>{},justCalendar,swipe} = this.props;
    if(multiselect){return this.renderMultiselect()}
    if(JSON.stringify(this.props.value) !== this.state.prevValue){
      this.state.prevValue = JSON.stringify(this.props.value);
      this.update = true;
    }
    this.details = this.fn.getDateDetails();
    if(justCalendar){
      return this.getPopup()
    }
    return (
        <AIOButton 
          {...this.props}
          onSwipe={swipe?(dx,dy)=>this.swipe(Math.floor(dy / 6)):undefined}
          onSwipeEnd={swipe?()=>{
            this.lastSwipe = undefined;
            this.startSwipe = undefined;
            onChange(this.details);
          }:undefined}
          disabled={false}
          before={icon?icon:undefined}
          type='button'
          className={'gah' + (className?' ' + className:'')}
          text={this.fn.getValue()}
          rtl={calendarType === 'jalali'}
          popupStyle={{border:'none'}}
          popupClassName='gah-popup-container'
          popOver={()=>this.getPopup()}
        />
    )
  }
}
GAHBase.defaultProps = {
  size:180,calendarType:'gregorian',disabled:false,
  prevYears:10,nextYears:20,unit:'day',theme:['dodgerblue','#fff'],
  setDisabled:()=>false,getDateStyle:()=>{return {}}
}

var GAHContext = createContext();
class GAHDatePickerPopup extends Component {
  render(){
    var {years,details,fn,activeYear = details.year,activeMonth = details.month,activeDay = details.day,details} = this.props;
    var context = {...this.props,years}
    return (
      <GAHContext.Provider value={context}>
        <div className={`gah-calendar`} style={{...fn.getPopupStyle('react')}}>
          <GAHDatePickerGrid details={details} activeYear={activeYear} activeMonth={activeMonth} activeDay={activeDay}/>
          {fn.renderFooter(details)}
        </div>
      </GAHContext.Provider>
    );
  }
}

class GAHDatePickerGrid extends Component{
  static contextType = GAHContext;
  getCells_hour(){
    var {fn} = this.context;
    var {activeYear,activeMonth,activeDay} = this.props;
    var Hours = [];
    for(let hour = 0 ; hour < 24; hour++){
      Hours.push(fn.getCell([activeYear,activeMonth,activeDay,hour],'hour'))
    }
    return Hours;
  }
  getCells_day(){
    var {activeYear,activeMonth} = this.props;
    var {calendarType,fn} = this.context;
    var daysLength = fn.calc.getMonthDaysLength(activeYear,activeMonth,calendarType);
    var Days = [];
    for(let day = 1 ; day <= daysLength; day++){
      Days.push(fn.getCell([activeYear,activeMonth,day,0],'day'))
    }
    return Days;
  }
  getCells_month(){
    var {fn} = this.context;
    var {activeYear} = this.props;
    var Months = [];
    for (let month = 0; month < 12; month++){
      Months.push(fn.getCell([activeYear,month + 1,1,0],'month'))
    }
    return Months 
  }
  getArrow(sign,icon){
    let {fn,unit,size,SetState} = this.context;
    var {activeYear,activeMonth,activeDay} = this.props;
    return (
      <div 
        className='gah-calendar-header-icon' 
        onClick={()=>SetState(fn.changeActivePage(sign,unit,{activeYear,activeMonth,activeDay}))}
        style={{width:size / 7,height:size / 7}}
      >{icon}</div>
    )
  }
  getHeader(){
    var {icons,size,calendarType,fn,SetState,theme = []} = this.context;
    var {activeYear,activeMonth,activeDay} = this.props;
    var sign = calendarType === 'gregorian'?1:-1;
    let onChange = (obj)=>{
      SetState(obj)
    }
    return (
      <div className='gah-calendar-header' style={{height:size / 4,padding:`0 ${size / 12.5}px`,background:theme[1],color:theme[0]}}>
          {this.getArrow(-sign,icons.minus)}
          <div className='gah-month' onClick={()=>{}} style={{fontSize:Math.floor(size / 12)}}>
            {fn.getGridHeaderValue(activeYear,activeMonth,activeDay,(obj)=>onChange(obj))}
          </div>
          {this.getArrow(sign,icons.plus)}
      </div>
    )
  }
  getContenthour(){return this.getCells_hour();}
  getContentday(){
    let {fn} = this.context;
    let {activeYear,activeMonth} = this.props;
    let Spaces = fn.renderSpaces(activeYear,activeMonth,'react'),
        WeekDays = fn.renderWeekDays('react'),
        Days = this.getCells_day(),
        EndSpaces = fn.renderEndSpaces(42 - (Spaces.length + Days.length),'react');
    return (<>{WeekDays}{Spaces}{Days}{EndSpaces}</>)
  }
  getContentmonth(){return this.getCells_month();}
  render(){
    var {fn,unit} = this.context;
    return (
      <>
        {this.getHeader()}
        <div className='gah-calendar-grid' style={fn.getGridStyle('react')}>{this['getContent' + unit]()}</div>
      </>
    )
  }
}

export function RDATE({getState,getProps,setState}){
  let $$ = {
    validateValue(value){
      let Value,{unit,calendarType} = getProps();
      let {startYear,endYear} = getState();
      let today = $$.calc.getToday(calendarType);
      let splitter = '/';
      if(typeof value === 'string'){
        splitter = $$.calc.getSplitter(value);
        Value = value.split(splitter).map((o,i)=>o?parseInt(o):today[i])
      }
      else {Value = today;}  
      var [year,month,day,hour] = Value;
      if(year < startYear){year = startYear;}
      if(year > endYear){year = endYear;}
      if(month < 1){month = 1;}
      if(month > 12){month = 12;}
      if(unit === 'day' || unit === 'hour'){
        var daysLength = $$.calc.getMonthDaysLength(year,month,calendarType);
        if(day > daysLength){day = daysLength;}
        if(day < 1){day = 1;}
        if(unit === 'hour'){
          if(hour > 23){hour = 23}
          if(hour < 0){hour = 0}
        }
      }
      else if(unit === 'month'){day = false; hour = false;}
      return {year,month,day,hour,splitter};
    },
    getDateDetails(o = [],unit = getProps().unit){
      let state = getState();
      let [year = state.year,month = state.month,day = state.day,hour = state.hour] = o;
      return $$['getDateDetails_' + unit]([year,month,day,hour])
    },
    getDateDetails_hour(o){
      return $$.getDateDetails_day(o,true);
    },
    getDateDetails_day([year,month,day,hour],hourType){
      let {startYear,endYear,splitter} = getState();
      var {calendarType,unit} = getProps();
      var {weekDay,index:weekDayIndex} = $$.calc.getWeekDay([year,month,day],calendarType);
      var {weekDay:monthFirstDayWeekDay} = $$.calc.getWeekDay([year,month,1],calendarType);
      var today = $$.calc.getToday(calendarType,unit);
      var {weekDay:todayWeekDay,index:todayWeekDayIndex} = $$.calc.getWeekDay(today,calendarType);
      var extra = {};
      var months = $$.calc.getMonths(calendarType);
      if(calendarType === 'jalali'){
        let gregorian = $$.calc.jalaliToGregorian([year,month,day])
        let todayGregorian = $$.calc.jalaliToGregorian(today);
        let weekDayGregorian = $$.calc.getWeekDay(gregorian,'gregorian').weekDay;
        let monthStringGregorian = $$.calc.getMonths('gregorian')[month - 1];
        extra = {gregorian,todayGregorian,weekDayGregorian,monthStringGregorian};
      }
      return {
        year,month,day,hour,weekDay,weekDayIndex,monthFirstDayWeekDay,
        year2Digit:year.toString().slice(2,4),month2Digit:month < 10?'0' + month:month.toString(),
        day2Digit:day < 10?'0' + day:day.toString(),
        weekDays:$$.calc.getWeekDays(calendarType),
        monthString:months[month - 1],
        todayMonthString:months[today[1] - 1],
        startYear,endYear,
        dateString:year + splitter + month + splitter + day + (hourType?(splitter + hour):''),
        fullDateString:year + splitter + month + splitter + day + ' ' + weekDay,
        today,todayWeekDay,todayWeekDayIndex,...extra,
        isLess:(o)=>$$.calc.isLess([year,month,day,hour],o),
        isGreater:(o)=>$$.calc.isGreater([year,month,day,hour],o),
        isEqual:(o)=>$$.calc.isEqual([year,month,day,hour],o),
        isBetween:(a,b)=>$$.calc.isBetween([year,month,day,hour],[a,b]),
      }
    },
    getDateDetails_month([year,month]){
      let {startYear,endYear,splitter} = getState();
      var {calendarType,unit} = getProps();
      var today = $$.calc.getToday(calendarType,unit);
      var {weekDay:todayWeekDay,index:todayWeekDayIndex} = $$.calc.getWeekDay(today,calendarType);
      var extra = {};
      var months = $$.calc.getMonths(calendarType);
      if(calendarType === 'jalali'){
        let gregorian = $$.calc.jalaliToGregorian([year,month,1])
        let todayGregorian = $$.calc.jalaliToGregorian(today);
        let monthStringGregorian = $$.calc.getMonths('gregorian')[gregorian[1] - 1];
        extra = {gregorian,todayGregorian,weekDayGregorian,monthStringGregorian};
      }
      return {
        year,month,
        year2Digit:year.toString().slice(2,4),month2Digit:month < 10?'0' + month:month.toString(),
        weekDays:$$.calc.getWeekDays(calendarType),
        monthString:months[month - 1],
        todayMonthString:months[today[1] - 1],
        startYear,endYear,
        dateString:year + splitter + month,
        today,todayWeekDay,todayWeekDayIndex,...extra,
        isLess:(o)=>$$.calc.isLess([year,month],o),
        isGreater:(o)=>$$.calc.isGreater([year,month],o),
        isEqual:(o)=>$$.calc.isEqual([year,month],o),
        isBetween:(a,b)=>$$.calc.isBetween([year,month],[a,b]),
      }
    },
    getValue(){
      var {calendarType,unit,value,placeHolder,editValue = (text)=>text} = getProps();
      let {splitter,year,month,day,hour} = getState();
      if(!value){
        if(placeHolder){return placeHolder}
        return calendarType === 'gregorian'?'Select Date':'انتخاب تاریخ'; 
      }
      if(unit === 'hour'){return editValue(year + splitter + month + splitter + day + ' ' + hour + ':00')}
      if(unit === 'day'){return editValue(year + splitter + month + splitter + day)}
      if(unit === 'month'){return editValue($$.calc.getMonths(calendarType)[month - 1] + ' ' + year);}
    },
    onToday(){
      var {unit,calendarType} = getProps();
      var [year,month,day] = $$.calc.getToday(calendarType);
      if(unit === 'month'){day = 1;}
      setState({activeYear:year,activeMonth:month,activeDay:day});
    },
    getTodayText(){
      let {unit,calendarType} = getProps();
      return {
        hourjalali:'ساعت کنونی',
        hourgregorian:'This Hour',
        dayjalali:'امروز',
        daygregorian:'Today',
        monthjalali:'ماه جاری',
        monthgregorian:'This Month',
        yearjalali:'سال جاری',
        yeargregorian:'This Year'
      }[unit + (calendarType)];
    },
    searchDate(date,selectors){
      let {calendarType,disabled} = getProps();
      let {splitter} = getState();
      if(disabled === true){return true}
      if(!selectors){return false}
      for(let i = 0; i < selectors.length; i++){
        let selector = selectors[i];
        let weekDay = $$.calc.getWeekDay(date,calendarType).index;
        let selectorWeekDays = !selector.weekDay?[]:(!Array.isArray(selector.weekDay)?[selector.weekDay]:selector.weekDay);
        if(selectorWeekDays.length && selectorWeekDays.indexOf(weekDay) === -1){continue}  
        if(selector.type === 'between'){
          let dateArray1,dateArray2;
          if(typeof selector.date[0] === 'string'){dateArray1 = selector.date[0].split(splitter)}else{continue}
          if(typeof selector.date[1] === 'string'){dateArray2 = selector.date[1].split(splitter)}else{continue}
          for(let i = 0; i < dateArray1.length; i++){dateArray1[i] = parseInt(dateArray1[i])}
          for(let i = 0; i < dateArray2.length; i++){dateArray2[i] = parseInt(dateArray2[i])}
          if($$.calc.isGreater(date,dateArray1) && $$.calc.isLess(date,dateArray2)){return selector}
        }
        else {
          if(!selector.date){continue;}
          let dateArray;
          if(typeof selector.date === 'string'){dateArray = selector.date.split(splitter)}
          else{continue}
          for(let i = 0; i < dateArray.length; i++){dateArray[i] = parseInt(dateArray[i])}
          if($$.calc['is' + {'less':'Less','greater':'Greater','equal':'Equal'}[selector.type]](date,dateArray)){return selector}
        }   
      }
      return false;
    }, 
    isCellInRange(date){
      let {unit,start,end} = getProps();
      if(!start.value && !end.value){return false}
      if(start.value){
        let {year,month,day,hour} = $$.validateValue(start.value);
        if(unit === 'day'){hour = 0;}  
        if(unit === 'month'){day = 1; hour = 0;}        
        if($$.calc.isLess(date,[year,month,day,hour])){return false} 
      }
      if(end.value){
        let {year,month,day,hour} = $$.validateValue(end.value);
        if(unit === 'day'){hour = 0;}  
        if(unit === 'month'){day = 1; hour = 0;}        
        if($$.calc.isGreater(date,[year,month,day,hour])){return false} 
      }
      return true;
    },
    getCell(date){
      let {theme,onChange,getDateStyle,setDisabled,calendarType,unit} = getProps();
      let disabled = setDisabled($$.getDateDetails(date,unit),$$.calc);
      let className = $$.getCellClassName(date,disabled);
      let onClick = disabled || !onChange?undefined:()=>{setState({year:date[0],month:date[1],day:date[2],hour:date[3]},true)};
      let style = {};
      let styleObj = getDateStyle($$.getDateDetails(date,unit),$$.calc) || {};
      style={...style,...styleObj} 
      if(className.indexOf('active') !== -1){
        style.background = theme[0];
        style.color = theme[1];
      }
      let text;
      if(unit === 'hour'){text = date[3] + ':00'}
      else if(unit === 'day'){text = date[2]}
      else if(unit === 'month'){
        let months = $$.calc.getMonths(calendarType);
        text = calendarType === 'gregorian'?months[date[1]].slice(0,3):months[date[1]]
      }
      return <div key={date} style={style} onClick={onClick} className={className}>{disabled?<del>{text}</del>:text}</div>
    },
    convertToString(date){
      let {unit} = getProps();
      let {splitter} = getState();
      if(unit === 'hour'){return `${date[0]}${splitter}${date[1]}${splitter}${date[2]}${splitter}${date[3]}`}
      if(unit === 'day'){return `${date[0]}${splitter}${date[1]}${splitter}${date[2]}`;}
      if(unit === 'month'){return `${date[0]}${splitter}${date[1]}`;} 
    },
    isActive(date){
      let {value,multiselect,range} = getProps();
      if(range){return $$.isCellInRange(date);}
      if(multiselect){return $$.getValues().indexOf($$.convertToString(date)) !== -1;}
      if(!value){return false}
      let {year,month,day,hour} = getState();
      return $$.convertToString([year,month,day,hour]) === $$.convertToString(date)
    },
    getCellClassName(date,disabled){
      let {calendarType} = getProps();
      var str = 'gah-cell';
      if(disabled){str += ' disabled'}
      if($$.isActive(date)){str += ' active';}
      if($$.convertToString($$.calc.getToday(calendarType)) === $$.convertToString(date)){str += ' today';}
      return str;
    },
    changeActivePage(value,unit,obj){return $$['changeActivePage_' + unit](value,obj);},
    changeActivePage_month(value,{activeYear}){
      var {startYear,endYear} = getState();
      if(value === 1){
          if(activeYear === endYear){return;}
          activeYear++;
      }
      else{
          if(activeYear === startYear){return;}
          activeYear--;
      }
      return {activeYear};
    },
    changeActivePage_day(value,{activeYear,activeMonth}){
      var {startYear,endYear} = getState();
      if(value === 1){
        if(activeMonth === 12){
          if(activeYear === endYear){return;}
          activeYear++;
          activeMonth = 1;
        }
        else {activeMonth++;}
      }
      else{
        if(activeMonth === 1){
          if(activeYear === startYear){return;}
          activeYear--;
          activeMonth = 12;
        }
        else {activeMonth--;}
      }
      return {activeYear,activeMonth};
    },
    changeActivePage_hour(value,{activeYear,activeMonth,activeDay}){
      var {startYear,endYear} = getState();
      var {calendarType} = getProps();
      if(value === 1){
        let daysLength = $$.calc.getMonthDaysLength(activeYear,activeMonth,calendarType)
        if(activeDay === daysLength){
          if(activeMonth === 12){
            if(activeYear === endYear){return;}
            activeYear++;
            activeMonth = 1;
            activeDay = 1;
          }
          else{
            activeMonth++;
            activeDay = 1;
          }
        }
        else{
          activeDay++;
        }
      }
      else{
        if(activeDay === 1){
          if(activeMonth === 1){
            if(activeYear === startYear){return;}
            else{
              activeYear--;
              activeMonth = 12;
              activeDay = $$.calc.getMonthDaysLength(activeYear,activeMonth,calendarType);
            }
          }
          else{
            activeMonth--;
            activeDay = $$.calc.getMonthDaysLength(activeYear,activeMonth,calendarType);
          }
        }
        else{
          activeDay--;
        }
      }
      return {activeYear,activeMonth,activeDay};
    },
    getGridStyle(platform = 'react'){
      let {size,calendarType,unit,theme = []} = getProps();
      var columnCount = {hour:4,day:7,month:3}[unit];
      var rowCount = {hour:6,day:7,month:4}[unit]; 
      var padding = size / 18,
      fontSize = size / 15,
      a = (size - padding * 2) / columnCount;
      var rowHeight = {hour:size / 7,day:a,month:size / 6,year:size / 7}[unit];
      var gridTemplateColumns = '',gridTemplateRows = '';
      for(let i = 1; i <= columnCount; i++){
        gridTemplateColumns += a + 'px' + (i !== columnCount?' ':'')
      }
      for(let i = 1; i <= rowCount; i++){
        gridTemplateRows += (rowHeight) + 'px' + (i !== rowCount?' ':'')
      }
      let direction = calendarType === 'gregorian'?'ltr':'rtl';
      if(platform === 'react'){
        return{gridTemplateColumns,gridTemplateRows,direction,padding,fontSize,background:theme[1],color:theme[0]}
      }
      else if(platform === 'jquery'){
        return `grid-template-columns:${gridTemplateColumns};grid-template-rows:${gridTemplateRows};direction:${direction};padding:${padding}px;font-size:${fontSize}px;`
      }
    },
    getGridHeaderValue(activeYear,activeMonth,activeDay,onChange){
      var {calendarType,unit,theme = [],size} = getProps();
      let {years} = getState();
      let D = '';
      let M = '';
      if(unit === 'hour'){
        let daysLength = $$.calc.getMonthDaysLength(activeYear,activeMonth,calendarType);
        let options = [];
        for(let i = 0; i < daysLength; i++){
          options.push({text:i + 1,value:i + 1,style:{height:size / 6,background:theme[1],color:theme[0]}})
        }
        D = (
          <AIOButton caret={false}
          type='select' value={activeDay} style={{background:'none',color:'inherit',fontSize:'inherit',padding:'0 3px'}}
          options={options} popupStyle={{maxHeight:size * 1.2}}
          onChange={(value)=>{onChange({activeDay:value})}}
        />
        )
      }
      if(unit === 'day' || unit === 'hour'){
        let months = $$.calc.getMonths(calendarType);
        if(calendarType === 'gregorian'){months = months.map((o)=>o.slice(0,3))}
        M = (
          <AIOButton caret={false}
          type='select' value={activeMonth} style={{background:'none',color:'inherit',fontSize:'inherit',padding:'0 3px'}}
          options={months.map((o,i)=>{return {text:o,value:i + 1,style:{height:size / 6,background:theme[1],color:theme[0]}}})} popupStyle={{maxHeight:size * 1.2}}
          onChange={(value)=>{onChange({activeMonth:value})}}
        />
        )
      }
      let Y = (
        <AIOButton caret={false}
          type='select' value={activeYear} style={{background:'none',color:'inherit',fontSize:'inherit',padding:'0 3px'}}
          options={years.map((o,i)=>{return {text:o,value:o,style:{height:size / 6,background:theme[1],color:theme[0]}}})} popupStyle={{maxHeight:size * 1.2}}
          onChange={(value)=>{onChange({activeYear:value})}}
        />
      );
      return <>{Y}{M}{D}</>;
    },
    renderWeekDays(platform = 'react'){
      var {calendarType} = getProps();
      let weekDays = $$.calc.getWeekDays(calendarType),cls = 'gah-weekday gah-cell';
      if(platform === 'react'){
        return weekDays.map((w,i)=><div key={'weekDay' + i} className={cls}><span>{w.slice(0,calendarType === 'gregorian'?2:1)}</span></div>)
      }
      else if(platform === 'jquery'){
        return weekDays.map((w,i)=>`<div class='${cls}'><span>${w.slice(0,calendarType === 'gregorian'?2:1)}</span></div>`).join(' ');
      }
    },
    renderEndSpaces(length,platform = 'react'){
      if(platform === 'react'){
        let Spaces = [];
        for(let i = 0; i < length; i++){
          Spaces.push(<div key={'endspace' + i} className='gah-space gah-cell'></div>)
        }
        return Spaces;
      }
      else if(platform === 'jquery'){
        let Spaces = '';
        for(let i = 0; i < length; i++){Spaces += `<div class='gah-space gah-cell'></div>`;}
        return Spaces;
      }
    },
    renderSpaces(activeYear,activeMonth,platform = 'react'){
      var {calendarType} = getProps();
      var firstDayWeekDayIndex = $$.calc.getWeekDay([activeYear,activeMonth,1],calendarType).index;
      if(platform === 'react'){
        let Spaces = [];
        for(let i = 0; i < firstDayWeekDayIndex; i++){
          Spaces.push(<div key={'space' + i} className='gah-space gah-cell'></div>)
        }
        return Spaces;
      }
      else if(platform === 'jquery'){
        let Spaces = '';
        for(let i = 0; i < firstDayWeekDayIndex; i++){Spaces += `<div class='gah-space gah-cell'></div>`;}
        return Spaces;
      }
    },
    getTodayContent(details,platform = 'react'){
      let {calendarType,size,unit,theme = []} = getProps();
      let month = details.todayMonthString;
      let week = details.todayWeekDay;
      let today = details.today;
      if(platform === 'react'){
        return (
          <div className='gah-today' style={{width:size / 2,color:theme[1],background:theme[0]}}>
            <div style={{fontSize:size / 13}}>{$$.getTodayText()}</div>
            {
              (unit === 'day' || unit === 'hour') &&
              <>
                <div style={{fontSize:size / 11}}>{calendarType === 'gregorian'?week.slice(0,3):week}</div>
                <div style={{fontSize:size / 12 * 4,height:size/12 * 4}}>{today[2]}</div>
                <div style={{fontSize:size / 11}}>{calendarType === 'gregorian'?month.slice(0,3):month}</div>
              </>
            }
            {unit === 'month' && <div style={{fontSize:size / 8}}>{calendarType === 'gregorian'?month.slice(0,3):month}</div>}
            <div style={{fontSize:size / 11}}>{today[0]}</div>
            {unit === 'hour' && <div style={{fontSize:size / 10}}>{today[3] + ':00'}</div>}
          </div>
        )
      }
      else if(platform === 'jquery'){
        return (`
            <div class='gah-today' style='width:${size / 2}px;${theme[1]?`color:${theme[1]};`:''}${theme[2]?`background:${theme[2]};`:''}'>
              <div style='font-size:${size / 13}px;'>${$$.getTodayText()}</div>
              ${
                unit === 'day'?(`
                  <div style='font-size:${size / 11}px;'>${calendarType === 'gregorian'?week.slice(0,3):week}</div>
                  <div style='font-size:${size / 12 * 4}px;height:${size/12 * 4}px;'>${today[2]}</div>
                  <div style='font-size:${size / 11}px;'>${calendarType === 'gregorian'?month.slice(0,3):month}</div>
                `):'' 
              }
              ${unit === 'month'?(`<div style='font-size:${size / 8}px;'>${calendarType === 'gregorian'?month.slice(0,3):month}</div>`):''}
              <div style='font-size:${size / 11}px;'>${today[0]}</div>
            </div>
        `)
      }
    },
    getPopupStyle(platform = 'react'){
      var {size,disabled} = getProps();
      if(platform === 'react'){
        return {width:size,fontSize:size / 17,cursor:disabled?'not-allowed':undefined};
      }
      if(platform === 'jquery'){
        return `width:${size}px;font-size:${size / 17}px;${disabled?' cursor:not-allowed;':''}`;
      }
    },
    getValues(){
      let {unit,values = []} = getProps();
      let result = [];
      for(let i = 0; i < values.length; i++){
        let value = values[i];
        let {year,month,day,hour,splitter} = $$.validateValue(value);
        if(unit === 'hour'){
          value = year + splitter + month + splitter + day + splitter + hour;
        }
        else if(unit === 'day'){
          value = year + splitter + month + splitter + day;
        }
        else if(unit === 'month'){
          value = year + splitter + month;
        }
        if(result.indexOf(value) === -1){result.push(value)}
      }
      return result;
    },
    updateValues(obj,date){
      let values = [...obj];
      let index = values.indexOf(date);
      if(index !== -1){values.splice(index,1);}
      else{
        values.push(date)
      }
      return values
    },
    renderFooter(details){
      let {onClear,disabled,size,calendarType,theme = []} = getProps();
      if(disabled){return ''}
      let buttonStyle = {padding:`${size / 20}px 0`};
      return (
        <div className='gah-calendar-footer' style={{fontSize:size / 13,background:theme[1],color:theme[0]}}>
          {
            onClear &&  
            <button style={buttonStyle} onClick={()=>onClear(details)}>
              {{'gregorian':'Clear','jalali':'حذف'}[calendarType]}
            </button>
          }
          <button style={buttonStyle} onClick={()=>$$.onToday()}>{$$.getTodayText()}</button>
        </div>
      )
    }
  };
  $$.calc = new dateCalculator()
  return {
    validateValue:$$.validateValue,
    getDateDetails:$$.getDateDetails,
    getValue:$$.getValue,
    onToday:$$.onToday,
    getTodayText:$$.getTodayText,
    getCell:$$.getCell,
    changeActivePage:$$.changeActivePage,
    getGridStyle:$$.getGridStyle,
    getGridHeaderValue:$$.getGridHeaderValue,
    renderWeekDays:$$.renderWeekDays,
    renderFooter:$$.renderFooter,
    renderEndSpaces:$$.renderEndSpaces,
    renderSpaces:$$.renderSpaces,
    getTodayContent:$$.getTodayContent,
    getPopupStyle:$$.getPopupStyle,
    getValues:$$.getValues,
    updateValues:$$.updateValues,
    searchDate:$$.searchDate,
    calc:$$.calc
  }
}
function dateCalculator(){
  let $$ = {
    getSplitter(value){
      let splitter = '/';
      for(let i = 0; i < value.length; i++){
        if(isNaN(parseInt(value[i]))){return value[i]}
      }
      return splitter;
    },
    convertToArray(o){
      let list;
      if(Array.isArray(o)){list = [...o]}
      else if(typeof o === 'string'){
        list = o.split($$.getSplitter(o));
        list = list.map((o)=>parseInt(o))
      }
      else{return false}
      let [y,m = 1,d = 1,h = 0] = list;
      return [y,m,d,h];
    },
    gregorianToJalali(o) {
      let [gy, gm, gd] = $$.convertToArray(o);
      var g_d_m, jy, jm, jd, gy2, days;
      g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      gy2 = (gm > 2) ? (gy + 1) : gy;
      days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
      jy = -1595 + (33 * ~~(days / 12053));days %= 12053;jy += 4 * ~~(days / 1461);days %= 1461;
      if (days > 365) {jy += ~~((days - 1) / 365);days = (days - 1) % 365;}
      if (days < 186) {jm = 1 + ~~(days / 31);jd = 1 + (days % 31);} else {jm = 7 + ~~((days - 186) / 30);jd = 1 + ((days - 186) % 30);}
      return [jy, jm, jd];
    },
    jalaliToGregorian(o) {
      let [jy, jm, jd] = $$.convertToArray(o);
      var sal_a, gy, gm, gd, days;
      jy += 1595;days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
      gy = 400 * ~~(days / 146097);days %= 146097;
      if (days > 36524) {gy += 100 * ~~(--days / 36524);days %= 36524;if (days >= 365) days++;}
      gy += 4 * ~~(days / 1461);days %= 1461;
      if (days > 365) {gy += ~~((days - 1) / 365);days = (days - 1) % 365;}
      gd = days + 1;
      sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
      return [gy, gm, gd];
    },
    compaireDate([year1,month1,day1,hour1],[year2,month2,day2,hour2]){
      if(year1 < year2){return 'less'}
      if(year1 > year2){return 'greater'}
      if(month1 < month2){return 'less'}
      if(month1 > month2){return 'greater'}
      if(day1 < day2){return 'less'}
      if(day1 > day2){return 'greater'}
      if(hour1 < hour2){return 'less'}
      if(hour1 > hour2){return 'greater'}
      return 'equal';
    },
    isLess(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1,o2) === 'less'
    },
    isEqual(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1,o2) === 'equal'
    },
    isGreater(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1,o2) === 'greater'
    },
    isBetween(o1,[o2,o3]){
      if(!o1 || !o2 || !o3){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      o3 = $$.convertToArray(o3);
      return $$.compaireDate(o1,o2) === 'greater' && $$.compaireDate(o1,o3) === 'less'
    },
    getByOffset({date,offset,unit = 'day',calendarType = 'gregorian'}){
      if(!offset){return date}
      let fn = $$['get' + (Math.sign(offset)>0?'Next':'Prev') + {'hour':'Hour','day':'Day','month':'Month'}[unit]];
      let abs = Math.abs(offset);
      for(let i = 0; i < abs; i++){date = fn(date,calendarType);}
      return date;
    },
    getNextHour([year,month,day,hour],calendarType){
      if(hour < 23){return [year,month,day,hour + 1]}
      let a = $$.getNextDay([year,month,day],calendarType);
      return [a[0],a[1],a[2],0] 
    },
    getPrevHour([year,month,day,hour],calendarType){
      if(hour > 0){return [year,month,day,hour - 1]}
      let a = $$.getPrevDay([year,month,day],calendarType);
      return [a[0],a[1],a[2],23] 
    },
    getNextDay([year,month,day,hour],calendarType){
      if(day < $$.getMonthDaysLength(year,month,calendarType)){return [year,month,day + 1,hour]}
      if(month < 12){return [year,month + 1,1,hour]}
      return [year + 1,1,1,hour];
    },
    getPrevDay([year,month,day],calendarType){
      if(day > 1){return [year,month,day - 1]}
      if(month > 1){
        month -= 1;
        day = $$.getMonthDaysLength(year,month,calendarType);
        return [year,month,day];
      }
      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year,month,calendarType);
      return [year,month,day];
    },
    getNextMonth([year,month]){return month < 12?[year,month + 1,1]:[year + 1,1,1];},
    getPrevMonth([year,month]){return month > 1?[year,month - 1,1]:[year - 1,12,1];},
    GetMonthDaysLength:{
      jalali:(year,month)=>{
        if(month <= 6){return  31;}
        if(month <= 11){return 30;}
        if([1,5,9,13,17,22,26,30].indexOf(year % 33) === -1){return 29;}
        return 30;
      },
      gregorian:(year,month)=>{return new Date(year, month, 0).getDate();}
    },
    getMonthDaysLength(year,month,calendarType){return $$.GetMonthDaysLength[calendarType](year,month)},
    GetWeekDay:{
      jalali:([year,month,day])=>{
        var offset;
        var weekDays = $$.getWeekDays('jalali');
        if($$.isEqual([year,month,day],[1399,12,30])){offset = 0;}
        else if($$.isLess([year,month,day],[1399,12,30])){
          offset = (-$$.getDaysBetween([year,month,day],[1399,12,30]) - 1) % 7;
          if(offset < 0){offset += 7}
        }
        else{offset = ($$.getDaysBetween([1399,12,30],[year,month,day]) + 1) % 7;}
        return {weekDay:weekDays[offset],index:offset};
      },
      gregorian:([year,month,day])=>{
        var offset = new Date(year,month - 1,day).getDay();
        var weekDays = $$.getWeekDays('gregorian');
        return {weekDay:weekDays[offset],index:offset};
      }
    },
    getWeekDay(date,calendarType = 'gregorian'){return $$.GetWeekDay[calendarType](date)},
    getWeekDays(calendarType){
      return {
        jalali:['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
        gregorian:['SUNDAY','MONDAY','THUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
      }[calendarType]
    },
    getMonths(calendarType){
      return {
        jalali:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند',],
        gregorian:['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
      }[calendarType]
    },
    getDaysBetween(start,end){
      if(end[0] - start[0] === 0){return Math.max($$.getDayIndexInYear(end) - $$.getDayIndexInYear(start) - 1,0);}
      var result = 0;
      if(end[0] - start[0] > 1){
        var leaps = $$.getLeapBetweenYears(start[0],end[0]);
        var notLeaps = Math.max(end[0] - start[0] - 1 - leaps,0);
        result = leaps * 366 + notLeaps * 365;
      }
      result += $$.getDayIndexInYear(end) - 1;
      result += ([1,5,9,13,17,22,26,30].indexOf(start[0] % 33) !== -1?366:365) - $$.getDayIndexInYear(start);
      return result;
    },
    getDayIndexInYear([year,month,day]){
      let index = 0;
      for(let i = 1; i < month; i++){index += i <= 6 ? 31 : 30;}
      return index + day;
    },
    getLeapBetweenYears(start,end){
      var count = 0;
      start++;
      while(start < end){
        if([1,5,9,13,17,22,26,30].indexOf(start % 33) !== -1){count++;}
        start++;
      }
      return count;
    },
    GetToday:{
      jalali:(unit)=>{
        let dateObject = new Date();
        var date = dateObject.toLocaleDateString('fa-IR').split('/');
        var dic = {'۰':0,'۱':1,'۲':2,'۳':3,'۴':4,'۵':5,'۶':6,'۷':7,'۸':8,'۹':9};
        for(var j = 0; j < date.length; j++){
          var str = '';
          for(var i = 0; i < date[j].length; i++){str+= dic[date[j][i]]; }
          date[j] = Number(str);
        }   
        date.push(dateObject.getHours());
        if(unit === 'day'){date[3] = 0;}
        if(unit === 'month'){date[2] = 1; date[3] = 0;}
        return date;
      },
      gregorian:(unit)=>{
        var date = new Date();
        var result = [date.getFullYear(),date.getMonth() + 1,date.getDate(),date.getHours()]
        if(unit === 'day'){date[3] = 0;}
        if(unit === 'month'){date[2] = 1; date[3] = 0;}
        return result;
      }
    },
    getToday(calendarType,unit = 'day'){return $$.GetToday[calendarType](unit)},
    
  }
  return {
    gregorianToJalali:$$.gregorianToJalali,
    jalaliToGregorian:$$.jalaliToGregorian,
    getSplitter:$$.getSplitter,
    convertToArray:$$.convertToArray,
    isEqual:$$.isEqual,
    isGreater:$$.isGreater,
    isLess:$$.isLess,
    isBetween:$$.isBetween,
    getByOffset:$$.getByOffset,
    getMonthDaysLength:$$.getMonthDaysLength,
    getWeekDay:$$.getWeekDay,
    getWeekDays:$$.getWeekDays,
    getMonths:$$.getMonths,
    getToday:$$.getToday
  }
}
