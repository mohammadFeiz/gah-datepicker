import React,{Component,createContext,createRef} from 'react';
import AIOButton from 'aio-button';
import $ from 'jquery';
import './index.css';
export default class GAH extends Component{
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
    var {prevYears,nextYears,jalali,value} = this.props;
    this.icons = {
      minus:(
        <svg style={{width:"24px",height:"24px"}} width={24} height={24}>
          <path fill="transparent" d="M13 8 L9 12 L13 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
        </svg>
      ),
      plus:(
        <svg style={{width:"24px",height:"24px"}} width={24} height={24}>
          <path fill="transparent" d="M11 8 L15 12 L11 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
        </svg>
      )
    }
    let today = this.fn.getToday(jalali?'J':'G');
    let startYear = today[0] - prevYears;
    let endYear = today[0] + nextYears;
    let years = [];
    for(var i = startYear; i <= endYear; i++){years.push(i);}
    this.state = {prevValue:JSON.stringify(value),startYear,endYear,years};
    this.updateState();
  }
  updateState(setState){
    var obj = this.fn.validateValue();
    if(setState){this.setState({...obj,activeYear:obj.year,activeMonth:obj.month})}
    else{this.state = {...this.state,...obj};}
  }
  SetState(obj,sendChanges){
    var {onChange} = this.props;
    this.setState(obj,sendChanges && onChange?()=>onChange(this.details):()=>{})
  }
  componentDidUpdate(){if(this.update){this.updateState(true);}}
  getPopup(){
    return (
      <div style={{display:'flex'}}>
        <GAHDatePickerPopup 
          {...this.props} {...this.state}
          fn={this.fn} icons={this.icons}
          SetState={this.SetState.bind(this)}
          details={this.details}
        />
        {this.fn.getTodayContent(this.details,'react')}
      </div>
    )
  }
  render(){
    this.update = false;
    var {editValue = (text)=>text,jalali,className,icon} = this.props;
    if(JSON.stringify(this.props.value) !== this.state.prevValue){
      this.state.prevValue = JSON.stringify(this.props.value);
      this.update = true;
    }
    this.details = this.fn.getDateDetails();
    return (
        <AIOButton 
          {...this.props}
          before={icon?icon:undefined}
          type='button'
          className={'gah' + (className?' ' + className:'')}
          text={editValue(this.fn.getValue())}
          rtl={jalali}
          popupStyle={{border:'none'}}
          popupClassName='gah-popup'
          onToggle={()=>this.SetState(this.fn.validateValue())}
          popOver={()=>this.getPopup()}
        />
    )
  }
}
GAH.defaultProps = {size:180,jalali:true,disabled:false,prevYears:10,nextYears:20,type:'day'}

var GAHContext = createContext();
class GAHDatePickerPopup extends Component {
  render(){
    var {style,defaultProps = {},years,details,fn,onClear,disabled,size,jalali,activeYear = details.year,activeMonth = details.month} = this.props;
    var context = {...this.props,years}
    let buttonStyle = {padding:`${size / 20}px 0`};
    return (
      <GAHContext.Provider value={context}>
        <div className={`gah-calendar`} {...defaultProps} style={{...fn.getPopupStyle('react'),...style}}>
          <GAHDatePickerGrid details={details} activeYear={activeYear} activeMonth={activeMonth}/>
          <div className='gah-calendar-footer' style={{fontSize:size / 13}}>
            {onClear && !disabled && <button style={buttonStyle} onClick={()=>onClear(details)}>{!jalali?'Clear':'حذف'}</button>}
            <button style={buttonStyle} onClick={()=>fn.onToday()}>{fn.getTodayText()}</button>
          </div>
        </div>
      </GAHContext.Provider>
    );
  }
}

class GAHDatePickerGrid extends Component{
  static contextType = GAHContext;
  constructor(props){
    super(props);
    this.dom = createRef();
  }
  getCells(){
    var {type} = this.context;
    return this['getCells_' + type]()
  }
  componentDidMount(){
    $(this.dom.current).find('.active').focus();
  }
  getCells_day(){
    var {activeYear,activeMonth} = this.props;
    var {jalali,SetState,fn} = this.context;
    var daysLength = fn.getMonthDaysLength(activeYear,activeMonth,jalali?'J':'G');
    var Days = [];
    for(let day = 1 ; day <= daysLength; day++){
      let disabled = fn.isDisabled([activeYear,activeMonth,day]);
      let className = fn.getCellClassName(activeYear,activeMonth,day,disabled);
      let onClick = disabled?undefined:()=>{SetState({year:activeYear,month:activeMonth,day},true)};
      Days.push(<div tabIndex={0} onClick={onClick} key={'day' + day} className={className}>{day}</div>)
    }
    return Days;
  }
  getCells_month(){
    var {jalali,SetState,fn} = this.context;
    var {activeYear} = this.props;
    var months = fn.getMonths(jalali?'J':'G');
    var Months = [];
    for (let month = 0; month < months.length; month++){
      let disabled = fn.isDisabled([activeYear,month + 1,1]);
      let text = jalali?months[month]:months[month].slice(0,3);
      let className = fn.getCellClassName(activeYear,month + 1,1,disabled);
      let onClick = disabled?undefined:()=>SetState({year:activeYear,month:month + 1,day:1},true);
      let style = {borderRadius:0};
      Months.push(<div className={className} tabIndex={0} key={month} style={style} onClick={onClick}>{text}</div>)
    }
    return Months
  }
  getCells_year(){
    var {years,SetState,fn} = this.context;
    var Years = [];
    for (let year = 0; year < years.length; year++){
      let disabled = fn.isDisabled([years[year],1,1]);
      let className = fn.getCellClassName(years[year],1,1,disabled);
      Years.push(
        <div 
          className={className} tabIndex={0} key={year} 
          style={{borderRadius:0,minHeight:'24px'}} 
          onClick={disabled?undefined:()=>SetState({year:years[year],month:1,day:1},true)}
        >{years[year]}</div>
      )
    }
    return Years
  }
  getArrow(sign,icon){
    let {disabled,fn,type,size,SetState} = this.context;
    if(disabled){return '';}
    var {activeYear,activeMonth} = this.props;
    return (
      <div 
        className='gah-calendar-header-icon' 
        onClick={()=>SetState(fn.changeActivePage(sign,type,{activeYear,activeMonth}))}
        style={{width:size / 7,height:size / 7}}
      >{icon}</div>
    )
  }
  getHeader(){
    var {icons,size,jalali,fn,SetState} = this.context;
    var {activeYear,activeMonth} = this.props;
    var sign = jalali?-1:1;
    let onChange = (obj)=>{
      SetState(obj)
    }
    return (
      <div className='gah-calendar-header' style={{height:size / 4,padding:`0 ${size / 12.5}px`}}>
          {this.getArrow(-sign,icons.minus)}
          <div className='gah-month' onClick={()=>{}} style={{fontSize:Math.floor(size / 12)}}>
            {fn.getGridHeaderValue(activeYear,activeMonth,(obj)=>onChange(obj))}
          </div>
          {this.getArrow(sign,icons.plus)}
      </div>
    )
  }
  getContentday(){
    let {fn} = this.context;
    let {activeYear,activeMonth} = this.props;
    var Spaces = fn.renderSpaces(activeYear,activeMonth,'react'),WeekDays = fn.renderWeekDays('react'),Days = this.getCells();
    var EndSpaces = fn.renderEndSpaces(42 - (Spaces.length + Days.length),'react');
    return (<>{WeekDays}{Spaces}{Days}{EndSpaces}</>)
  }
  getContentmonth(){return this.getCells();}
  getContentyear(){return this.getCells();}
  render(){
    var {fn,type} = this.context;
    return (
      <>
        {this.getHeader()}
        <div ref={this.dom} className='gah-calendar-grid' style={fn.getGridStyle('react')}>{this['getContent' + type]()}</div>
      </>
    )
  }
}

export function RDATE({getState,getProps,setState}){
  let $$ = {
    g2j(gy, gm, gd) {
      var g_d_m, jy, jm, jd, gy2, days;
      g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      gy2 = (gm > 2) ? (gy + 1) : gy;
      days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
      jy = -1595 + (33 * ~~(days / 12053));days %= 12053;jy += 4 * ~~(days / 1461);days %= 1461;
      if (days > 365) {jy += ~~((days - 1) / 365);days = (days - 1) % 365;}
      if (days < 186) {jm = 1 + ~~(days / 31);jd = 1 + (days % 31);} else {jm = 7 + ~~((days - 186) / 30);jd = 1 + ((days - 186) % 30);}
      return [jy, jm, jd];
    },
    j2g(jy, jm, jd) {
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
    GetMonthDaysLength:{
      J:(year,month)=>{
        if(month <= 6){return  31;}
        if(month <= 11){return 30;}
        if([1,5,9,13,17,22,26,30].indexOf(year % 33) === -1){return 29;}
        return 30;
      },
      G:(year,month)=>{return new Date(year, month, 0).getDate();}
    },
    getMonthDaysLength(year,month,type){return $$.GetMonthDaysLength[type](year,month)},
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
    compaireDate([year1,month1,day1],[year2,month2,day2]){
      if(year1 < year2){return 'less'}if(year1 > year2){return 'greater'}
      if(month1 < month2){return 'less'}if(month1 > month2){return 'greater'}
      if(day1 < day2){return 'less'}if(day1 > day2){return 'greater'}
      return 'equal';
    },
    getNextDay([year,month,day],type){
      if(day < $$.getMonthDaysLength(year,month,type)){return [year,month,day + 1]}
      if(month < 12){return [year,month + 1,1]}
      return [year + 1,1,1];
    },
    getPrevDay([year,month,day],type){
      if(day > 1){return [year,month,day - 1]}
      if(month > 1){
        month -= 1;
        day = $$.getMonthDaysLength(year,month,type);
        return [year,month,day];
      }
      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year,month,type);
      return [year,month,day];
    },
    getNextMonth([year,month]){return month < 12?[year,month + 1,1]:[year + 1,1,1];},
    getPrevMonth([year,month]){return month > 1?[year,month - 1,1]:[year - 1,12,1];},
    GetWeekDay:{
      J:([year,month,day])=>{
        var res = $$.compaireDate([year,month,day],[1399,12,30]);
        var offset;
        var weekDays = $$.getWeekDays('J');
        if(res === 'equal'){offset = 0;}
        else if(res === 'less'){
          offset = (-$$.getDaysBetween([year,month,day],[1399,12,30]) - 1) % 7;
          if(offset < 0){offset += 7}
        }
        else{offset = ($$.getDaysBetween([1399,12,30],[year,month,day]) + 1) % 7;}
        return {weekDay:weekDays[offset],index:offset};
      },
      G:([year,month,day])=>{
        var offset = new Date(year,month - 1,day).getDay();
        var weekDays = $$.getWeekDays('G');
        return {weekDay:weekDays[offset],index:offset};
      }
    },
    getWeekDay(date,type){return $$.GetWeekDay[type](date)},
    GetToday:{
      J:(type)=>{
        var date = new Date().toLocaleDateString('fa-IR').split('/');
        var dic = {'۰':0,'۱':1,'۲':2,'۳':3,'۴':4,'۵':5,'۶':6,'۷':7,'۸':8,'۹':9};
        for(var j = 0; j < date.length; j++){
          var str = '';
          for(var i = 0; i < date[j].length; i++){str+= dic[date[j][i]]; }
          date[j] = Number(str);
        }   
        if(type === 'month'){date[2] = 1;}
        else if(type === 'year'){date[1] = 1; date[2] = 1;}
        return date;
      },
      G:(type)=>{
        var date = new Date();
        var result = [date.getFullYear(),date.getMonth() + 1,date.getDate()]
        if(type === 'month'){result[2] = 1;}
        else if(type === 'year'){result[1] = 1; result[2] = 1;}
        return result;
      }
    },
    getToday(mode,type = 'day'){return $$.GetToday[mode](type)},
    getMonths(type){
      return {
        J:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند',],
        G:['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
      }[type]
    },
    getWeekDays(type){
      return {
        J:['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
        G:['SUNDAY','MONDAY','THUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
      }[type]
    },
    getSplitter(value){
      let splitter = '/';
      for(let i = 0; i < value.length; i++){
        if(isNaN(parseInt(value[i]))){return value[i]}
      }
      return splitter;
    },
    validateValue(){
      let Value,{value,type,jalali} = getProps();
      let {startYear,endYear} = getState();
      let today = $$.getToday(jalali?'J':'G');
      let splitter = '/';
      if(Array.isArray(value)){Value = value}
      else if(typeof value === 'string'){
        splitter = $$.getSplitter(value);
        Value = value.split(splitter)
      }
      else {Value = today;}  
      var [year,month,day] = Value;
      year = parseInt(year);
      month = parseInt(month);
      day = parseInt(day);
      if(isNaN(year)){year = today[0]}
      if(year < startYear){year = startYear;}
      if(year > endYear){year = endYear;}
      if(isNaN(month)){month = today[1]}
      if(month < 1){month = 1;}
      if(month > 12){month = 12;}
      if(type === 'day'){
        if(isNaN(day)){day = 1} 
        var daysLength = $$.getMonthDaysLength(year,month,jalali?'J':'G');
        if(day > daysLength){day = daysLength;}
        if(day < 1){day = 1;}
      }
      else {
        day = 1;
      }
      return {year,month,day,splitter};
    },
    getDateDetails(){
      let {year,month,day,startYear,endYear,splitter} = getState();
      var {jalali,type} = getProps();
      var {weekDay,index:weekDayIndex} = $$.getWeekDay([year,month,day],jalali?'J':'G');
      var {weekDay:monthFirstDayWeekDay} = $$.getWeekDay([year,month,1],jalali?'J':'G');
      var today = $$.getToday(jalali?'J':'G',type);
      var {weekDay:todayWeekDay,index:todayWeekDayIndex} = $$.getWeekDay(today,jalali?'J':'G');
      var extra = {};
      var months = $$.getMonths(jalali?'J':'G');
      if(jalali){
        let georgian = $$.j2g(year,month,day)
        let todayGeorgian = $$.j2g(today[0],today[1],today[2]);
        let weekDayGeorgian = $$.getWeekDay(georgian,'G').weekDay;
        let monthStringGeorgian = $$.getMonths('G')[month - 1];
        extra = {georgian,todayGeorgian,weekDayGeorgian,monthStringGeorgian};
      }
      return {
        year,month,day,weekDay,weekDayIndex,monthFirstDayWeekDay,
        year2Digit:year.toString().slice(2,4),month2Digit:month < 10?'0' + month:month.toString(),
        day2Digit:day < 10?'0' + day:day.toString(),
        weekDays:$$.getWeekDays(jalali?'J':'G'),
        monthString:months[month - 1],
        todayMonthString:months[today[1] - 1],
        startYear,endYear,
        dateString:year + splitter + month + splitter + day,
        fullDateString:year + splitter + month + splitter + day + ' ' + weekDay,
        today,todayWeekDay,todayWeekDayIndex,...extra
      }
    },
    getValue(){
      var {jalali,type,value,placeHolder} = getProps();
      let {splitter,year,month,day} = getState();
      if(!value){
        if(placeHolder){return placeHolder}
        return !jalali?'Select Date':'انتخاب تاریخ'; 
      }
      if(type === 'day'){return year + splitter + month + splitter + day}
      if(type === 'month'){return $$.getMonths(jalali?'J':'G')[month - 1] + ' ' + year;}
      if(type === 'year'){return year }
    },
    onToday(){
      var {type,jalali} = getProps();
      var [year,month,day] = $$.getToday(jalali?'J':'G');
      if(type === 'month'){day = 1;}
      else if(type === 'year'){day = 1; month = 1;}
      setState({year,month,day,activeYear:year,activeMonth:month},true);
    },
    getTodayText(){
      let {type,jalali} = getProps();
      return {dayJ:'امروز',dayG:'Today',monthJ:'ماه جاری',monthG:'This Month',yearJ:'سال جاری',yearG:'This Year'}[type + (jalali?'J':'G')];
    },
    isDisabled(date){
      let {limits,jalali,type,disabled} = getProps();
      let {splitter} = getState();
      if(disabled === true){return true}
      if(!limits){return false}
      for(let i = 0; i < limits.length; i++){
        let limit = limits[i];
        if(type === 'day' && limit.type === 'weekDay'){
          let thisMonth = true;
          if(limit.year !== undefined && limit.year !== date[0]){thisMonth = false}
          else if(limit.month !== undefined && limit.month !== date[1]){thisMonth = false}
          if(thisMonth && $$.getWeekDay(date,jalali?'J':'G').index + 1 === limit.weekDay){return true}
        }
        else if(limit.type === 'between'){
          let dateArray1,dateArray2;
          if(typeof limit.date1 === 'string'){dateArray1 = limit.date1.split(splitter)}
          else if(Array.isArray(limit.date1)){dateArray1 = limit.date1}
          else{continue}
          if(typeof limit.date2 === 'string'){dateArray2 = limit.date2.split(splitter)}
          else if(Array.isArray(limit.date2)){dateArray2 = limit.date2}
          else{continue}
          if(type === 'month'){dateArray1[2] = 1; dateArray2[2] = 1;}
          else if(type === 'year'){dateArray1[1] = 1; dateArray1[2] = 1; dateArray2[1] = 1; dateArray2[2] = 1;}
          dateArray1 = [parseInt(dateArray1[0]),parseInt(dateArray1[1]),parseInt(dateArray1[2])];
          dateArray2 = [parseInt(dateArray2[0]),parseInt(dateArray2[1]),parseInt(dateArray2[2])];
          let start,end;
          if(['less','equal'].indexOf($$.compaireDate(dateArray1,dateArray2)) !== -1){start = dateArray1; end = dateArray2;}
          else{start = dateArray2; end = dateArray1;}
          if($$.compaireDate(date,start) === 'greater' && $$.compaireDate(date,end) === 'less'){return true}
        }
        else {
          if(!limit.date){continue;}
          let dateArray;
          if(typeof limit.date === 'string'){dateArray = limit.date.split(splitter)}
          else if(Array.isArray(limit.date)){dateArray = limit.date}
          else{continue}
          if(type === 'month'){dateArray[2] = 1;}
          else if(type === 'year'){dateArray[1] = 1; dateArray[2] = 1;}
          if($$.compaireDate(date,[parseInt(dateArray[0]),parseInt(dateArray[1]),parseInt(dateArray[2])]) === limit.type){return true}
        }   
      }
      return false;
    },
    getCellClassName(Year,Month,Day,disabled){
      let {jalali} = getProps();
      let {year,month,day} = getState();
      let today = $$.getToday(jalali?'J':'G');
      var str = 'gah-cell gah-cell-first';
      if(disabled){str += ' disabled'}
      if(year === Year && month === Month && day === Day){str += ' active';}
      if(today[0] === Year && today[1] === Month && today[2] === Day){str += ' today'}  
      if(jalali){str += ' is-jalali';}
      return str;
    },
    changeActivePage(value,type,obj){return $$['changeActivePage_' + type](value,obj);},
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
    getGridStyle(platform = 'react'){
      let {size,jalali,type} = getProps();
      var columnCount = {day:7,month:3,year:4}[type];
      var rowCount = {day:7,month:4,year:0}[type]; 
      var padding = size / 18,
      fontSize = size / 15,
      a = (size - padding * 2) / columnCount;
      var rowHeight = {day:a,month:size / 6,year:size / 7}[type];
      var gridTemplateColumns = '',gridTemplateRows = '';
      for(let i = 1; i <= columnCount; i++){
        gridTemplateColumns += a + 'px' + (i !== columnCount?' ':'')
      }
      for(let i = 1; i <= rowCount; i++){
        gridTemplateRows += (rowHeight) + 'px' + (i !== rowCount?' ':'')
      }
      let direction = jalali?'rtl':'ltr';
      if(platform === 'react'){
        return{gridTemplateColumns,gridTemplateRows,direction,padding,fontSize}
      }
      else if(platform === 'jquery'){
        return `grid-template-columns:${gridTemplateColumns};grid-template-rows:${gridTemplateRows};direction:${direction};padding:${padding}px;font-size:${fontSize}px;`
      }
    },
    getGridHeaderValue(activeYear,activeMonth,onChange){
      var {jalali,type} = getProps();
      let {years} = getState();
      let result = '';
      if(type === 'day'){
        let months = $$.getMonths(jalali?'J':'G');
        if(!jalali){months = months.map((o)=>o.slice(0,3))}
        let monthString = months[activeMonth - 1];
        result += monthString + ' ';
      }
      result += activeYear;
      return result;
    },
    getGridHeaderValue(activeYear,activeMonth,onChange){
      var {jalali,type} = getProps();
      let {years} = getState();
      let M = '';
      if(type === 'day'){
        let months = $$.getMonths(jalali?'J':'G');
        if(!jalali){months = months.map((o)=>o.slice(0,3))}
        M = (
          <select className='select-active' value={activeMonth.toString()} onChange={(e)=>onChange({activeMonth:parseInt(e.target.value)})}>
            {months.map((o,i)=><option key={i} value={(i + 1).toString()}>{o}</option>)}
          </select>
        );
      }
      let Y = (
        <select className='select-active' value={activeYear.toString()} onChange={(e)=>onChange({activeYear:parseInt(e.target.value)})}>
          {years.map((o,i)=><option key={i} value={o.toString()}>{o}</option>)}
        </select>
      );
      return <>{M}{Y}</>;
    },
    renderWeekDays(platform = 'react'){
      var {jalali} = getProps();
      let weekDays = $$.getWeekDays(jalali?'J':'G'),cls = 'gah-weekday gah-cell';
      if(platform === 'react'){
        return weekDays.map((w,i)=><div key={'weekDay' + i} className={cls}><span>{w.slice(0,jalali?1:2)}</span></div>)
      }
      else if(platform === 'jquery'){
        return weekDays.map((w,i)=>`<div class='${cls}'><span>${w.slice(0,jalali?1:2)}</span></div>`).join(' ');
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
      var {jalali} = getProps();
      var firstDayWeekDayIndex = $$.getWeekDay([activeYear,activeMonth,1],jalali?'J':'G').index;
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
      let {jalali,size,type} = getProps();
      let month = details.todayMonthString;
      let week = details.todayWeekDay;
      let today = details.today;
      if(platform === 'react'){
        return (
          <div className='gah-today' style={{width:size / 2}}>
            <div style={{fontSize:size / 13}}>{$$.getTodayText()}</div>
            {
              type === 'day' &&
              <>
                <div style={{fontSize:size / 11}}>{jalali?week:week.slice(0,3)}</div>
                <div style={{fontSize:size / 12 * 4,height:size/12 * 4}}>{today[2]}</div>
                <div style={{fontSize:size / 11}}>{jalali?month:month.slice(0,3)}</div>
              </>
            }
            {type === 'month' && <div style={{fontSize:size / 8}}>{jalali?month:month.slice(0,3)}</div>}
            <div style={{fontSize:size / 11}}>{today[0]}</div>
          </div>
        )
      }
      else if(platform === 'jquery'){
        return (`
            <div class='gah-today' style='width:${size / 2}px;'>
              <div style='font-size:${size / 13}px;'>${$$.getTodayText()}</div>
              ${
                type === 'day'?(`
                  <div style='font-size:${size / 11}px;'>${jalali?week:week.slice(0,3)}</div>
                  <div style='font-size:${size / 12 * 4}px;height:${size/12 * 4}px;'>${today[2]}</div>
                  <div style='font-size:${size / 11}px;'>${jalali?month:month.slice(0,3)}</div>
                `):'' 
              }
              ${type === 'month'?(`<div style='font-size:${size / 8}px;'>${jalali?month:month.slice(0,3)}</div>`):''}
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
    }
  };
  return {
    g2j:$$.g2j,
    j2g:$$.j2g,
    getMonthDaysLength:$$.getMonthDaysLength,
    getDayIndexInYear:$$.getDayIndexInYear,
    getDaysBetween:$$.getDaysBetween,
    compaireDate:$$.compaireDate,
    getNextDay:$$.getNextDay,
    getPrevDay:$$.getPrevDay,
    getNextMonth:$$.getNextMonth,
    getPrevMonth:$$.getPrevMonth,
    getWeekDay:$$.getWeekDay,
    getToday:$$.getToday,
    getMonths:$$.getMonths,
    getWeekDays:$$.getWeekDays,
    getSplitter:$$.getSplitter,
    validateValue:$$.validateValue,
    getDateDetails:$$.getDateDetails,
    getValue:$$.getValue,
    onToday:$$.onToday,
    getTodayText:$$.getTodayText,
    isDisabled:$$.isDisabled,
    getCellClassName:$$.getCellClassName,
    changeActivePage:$$.changeActivePage,
    getGridStyle:$$.getGridStyle,
    getGridHeaderValue:$$.getGridHeaderValue,
    renderWeekDays:$$.renderWeekDays,
    renderEndSpaces:$$.renderEndSpaces,
    renderSpaces:$$.renderSpaces,
    getTodayContent:$$.getTodayContent,
    getPopupStyle:$$.getPopupStyle
  }
}
