import React,{Component,Fragment,createContext} from 'react';
import RDropdownButton from 'r-dropdown-button';
import {getPlusIcon,getMinusIcon,getGridIcon,getMonthDaysLength,getWeekDay,jalali_to_gregorian,getToday,getMonths,getNextDay,getPrevDay,compaireDate} from './functions';

import './index.css';
export default class GAH extends Component{
  constructor(props){
    super(props);
    this.icons = {
      grid:getGridIcon(),minus:getMinusIcon(),plus:getPlusIcon()
    }
    this.mode = this.props.jalali?'J':'G';
    this.init();
  }
  init(){
    var {value,prevYears,nextYears,range} = this.props;
    var today = getToday(this.mode);
    this.startYear = today[0] - prevYears;
    this.endYear = today[0] + nextYears;
    this.years = [];
    for(var i = this.startYear; i <= this.endYear; i++){this.years.push(i);}
    if(range){this.setRangeType(value,today);}
    else {this.setSingleType(value,today)}
  }
  validateValue(value,today){
    var Value,{splitter,type} = this.props;
    if(Array.isArray(value)){Value = value}
    else if(typeof value === 'string'){Value = value.split(splitter)}
    else {Value = today;}  
    var [year,month,day] = Value;
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    if(isNaN(year)){year = today[0]}
    if(year < this.startYear){year = this.startYear;}
    if(year > this.endYear){year = this.endYear;}
    if(isNaN(month)){month = today[1]}
    if(month < 1){month = 1;}
    if(month > 12){month = 12;}
    if(type === 'day'){
      if(isNaN(day)){day = 1} 
      var daysLength = getMonthDaysLength(year,month,this.mode);
      if(day > daysLength){day = daysLength;}
      if(day < 1){day = 1;}
    }
    else {
      day = 1;
    }
    return [year,month,day];
  }
  setSingleType(value,today){
    var [year,month,day] = this.validateValue(value,today);
    this.state = {year,month,day,activeRange:'start',listView:false};
  }
  setRangeType(value,today){
    var {value = {}} = this.props;
    if(Array.isArray(value) || typeof(value) !== 'object'){value = {}}
    var {start,end} = value;
    var startArray = this.validateValue(start,today);
    var endArray = this.validateValue(end,today);
    var Start = {year:startArray[0],month:startArray[1],day:startArray[2]};
    var End = {year:endArray[0],month:endArray[1],day:endArray[2]};
    this.state = {start:Start,end:End,activeRange:'start',listView:false}
  }
  
  
  setActiveRange(type){
    this.setState({activeRange:type})
  }
  SetState(obj,sendChanges){
    var {onChange,range} = this.props;
    this.setState(obj,sendChanges && onChange?()=>onChange(range?this.rangeDetails:this.details):()=>{})
  }
  getDateDetails(){
    var {start,end,activeRange} = this.state;
    var {range} = this.props;
    if(range){
      this.rangeDetails = {
        start:this.getDetailsSingle(start.year,start.month,start.day),
        end:this.getDetailsSingle(end.year,end.month,end.day) 
      }
      this.details = this.rangeDetails[activeRange];
    }
    else{
      let {year,month,day} = this.state;
      this.details = this.getDetailsSingle(year,month,day)
    }
  }
  getDetailsSingle(year,month,day){
    var {splitter = '/',jalali,type} = this.props;
    var {weekDay,index:weekDayIndex} = getWeekDay([year,month,day],this.mode);
    var {weekDay:monthFirstDayWeekDay} = getWeekDay([year,month,1],this.mode);
    var today = getToday(this.mode,type);
    var extra = {};
    var months = getMonths(this.mode);
    if(jalali){
      let georgian = jalali_to_gregorian(year,month,day)
      let todayGeorgian = jalali_to_gregorian(today[0],today[1],today[2]);
      let weekDayGeorgian = getWeekDay(georgian,'G').weekDay;
      let monthStringGeorgian = getMonths('G')[month - 1];
      extra = {georgian,todayGeorgian,weekDayGeorgian,monthStringGeorgian};
    }
    return {
      year,month,day,weekDay,weekDayIndex,monthFirstDayWeekDay,
      year2Digit:year.toString().slice(2,4),month2Digit:month < 10?'0' + month:month.toString(),
      day2Digit:day < 10?'0' + day:day.toString(),
      monthString:months[month - 1],
      startYear:this.startYear,endYear:this.endYear,
      dateString:year + splitter + month + splitter + day,
      fullDateString:year + splitter + month + splitter + day + ' ' + weekDay,
      today,...extra
    }
  }
  setNextDay(){
    var {range} = this.props;
    if(range){
      let {activeRange} = this.state;
      let dateObj = this.state[activeRange];
      let dateArray = [dateObj.year,dateObj.month,dateObj.day];
      let newDate = getNextDay(dateArray,this.mode);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState({[activeRange]:newDateObj},true)
    }
    else{
      let {year,month,day} = this.state;
      let newDate = getNextDay([year,month,day],this.mode);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState(newDateObj,true)
    }
  }
  setPrevDay(){
    var {range} = this.props;
    if(range){
      let {activeRange} = this.state;
      let dateObj = this.state[activeRange];
      let dateArray = [dateObj.year,dateObj.month,dateObj.day];
      let newDate = getPrevDay(dateArray,this.mode);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState({[activeRange]:newDateObj},true)
    }
    else{
      let {year,month,day} = this.state;
      let newDate = getPrevDay([year,month,day],this.mode);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState(newDateObj,true)
    }
  }
  getValue(){
    var {range,splitter,type} = this.props;
    if(range){
      let {start,end} = this.state;
      if(type === 'day'){return start.year + splitter + start.month + splitter + start.day + ' - ' + end.year + splitter + end.month + splitter + end.day}
      if(type === 'month'){
        let months = getMonths(this.mode);
        return months[start.month - 1] + ' ' + start.year + ' - ' + months[end.month - 1] + ' ' + end.year 
      }
      if(type === 'year'){return start.year + ' - ' + end.year}
    }
    else{
      let {year,month,day} = this.state;
      if(type === 'day'){return year + splitter + month + splitter + day}
      if(type === 'month'){
        let months = getMonths(this.mode);
        return months[month - 1] + ' ' + year 
      }
      if(type === 'year'){return year }
    }
  }
  render(){
    var {jalali,range} = this.props;
    this.getDateDetails();
    var Value = this.getValue();
    return (
      <div className='gah-datepicker' style={{direction:jalali?'rtl':'ltr'}}> 
        <div className='gah-datepicker-icon'>{getGridIcon()}</div>
        <RDropdownButton 
          rtl={jalali}
          animate={true}
          open={true}
          className='gah-datepicker-button'
          text={Value}
          style={{display:'flex',justifyContent:'flex-start',color:'inherit'}}
          items={()=>{return (
            <GAHDatePickerPopup 
              icons={this.icons}
              {...this.props} 
              {...this.state}
              SetState={this.SetState.bind(this)}
              details={this.details}
              rangeDetails={this.rangeDetails}
              years={this.years}
              mode={this.mode}
              setActiveRange={this.setActiveRange.bind(this)}
            />
          )}}
        />
        {
          !range &&
          <div className='gah-step'>
            <div className='gah-step-up' onClick={()=>this.setNextDay()}></div>
            <div className='gah-step-down' onClick={()=>this.setPrevDay()}></div>  
          </div>
        }
        
      </div>
    )
  }
}
GAH.defaultProps = {size:180,jalali:true,disabled:false,splitter:'/',prevYears:10,nextYears:20,type:'day'}

var rdpContext = createContext();
class GAHDatePickerPopup extends Component {
  isDisabled(date){
    var {limits,splitter,range,start,end,activeRange,mode,type} = this.props;
    if(range){
      if(activeRange === 'end' && compaireDate(date,[start.year,start.month,start.day]) === 'less'){return true}
      if(activeRange === 'start' && compaireDate(date,[end.year,end.month,end.day]) === 'greater'){return true}
    }
    if(!limits){return false}
    for(let i = 0; i < limits.length; i++){
      let limit = limits[i];
      if(type === 'day' && limit.type === 'weekDay'){
        let thisMonth = true;
        if(limit.year !== undefined && limit.year !== date[0]){thisMonth = false}
        else if(limit.month !== undefined && limit.month !== date[1]){thisMonth = false}
        if(thisMonth){
          let weekDay = getWeekDay(date,mode).index + 1;
          if(weekDay === limit.weekDay){return true}
        }
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
        if(['less','equal'].indexOf(compaireDate(dateArray1,dateArray2)) !== -1){start = dateArray1; end = dateArray2;}
        else{start = dateArray2; end = dateArray1;}
        if(compaireDate(date,start) === 'greater' && compaireDate(date,end) === 'less'){return true}
      }
      else {
        let dateArray;
        if(typeof limit.date === 'string'){dateArray = limit.date.split(splitter)}
        else if(Array.isArray(limit.date)){dateArray = limit.date}
        else{continue}
        if(type === 'month'){dateArray[2] = 1;}
        else if(type === 'year'){dateArray[1] = 1; dateArray[2] = 1;}
        if(compaireDate(date,[parseInt(dateArray[0]),parseInt(dateArray[1]),parseInt(dateArray[2])]) === limit.type){return true}
      }   
    }
    return false;
  }
  getHeader(){
    var {range,size,type,mode} = this.props;
    var style = {height:size / 8 + 6,fontSize:size / 16,padding:`0 3px`};
    if(!range){return null;}
    else {
      let {activeRange,setActiveRange,rangeDetails} = this.props;
      let {year:year1,month:month1,day:day1} = rangeDetails.start;
      let {year:year2,month:month2,day:day2} = rangeDetails.end;
      let rangeStyle = {height:size / 8};
      let value1,value2;
      if(type === 'month'){
        let months = getMonths(mode);
        value1 = year1 + ' ' + months[month1 - 1];
        value2 = year2 + ' ' + months[month2 - 1];
      }
      else{
        value1 = year1 + ' / ' + month1 + ' / ' + day1;
        value2 = year2 + ' / ' + month2 + ' / ' + day2;
      }
      return (
        <div className='rdp-header' style={style}>
          <span 
            className={'rdp-range-value rdp-range-start' + (activeRange === 'start'?' active':'')}
            onClick={()=>setActiveRange('start')}
            style={rangeStyle}
          >{value1}</span>
          <span 
            className={'rdp-range-value rdp-range-end' + (activeRange === 'end'?' active':'')}
            onClick={()=>setActiveRange('end')}
            style={rangeStyle}
          >{value2}</span>
        </div>
      )
    }
  }
  getBody(){
    var {listView,details,activeRange} = this.props;
    if(listView){return <GAHDatePickerList details={details}/>}
    return <GAHDatePickerGrid key={activeRange} details={details}/>
  }
  getFooter(){
    var {onSubmit,onClose,mode,disabled,size} = this.props;
    var buttonStyle = {padding:`${size / 24}px ${size / 12}px`}
    var closeText = {G:'Cansel',J:'بستن'}[mode];
    var submitText = {G:'OK',J:'تایید'}[mode];
    return (
      <div className='rdp-footer' style={{fontSize:size / 13}}>
        {
          typeof onClose === 'function' && 
          <button style={buttonStyle} onClick={()=>onClose(this.props.details)}>{closeText}</button>
        }
        {
          typeof onSubmit === 'function' && !disabled && 
          <button style={buttonStyle} onClick={()=>onSubmit(this.props.details)}>{submitText}</button>
        }       
      </div>
    )
  }
  getStyle(){
    var {size} = this.props;
    return {width:size,fontSize:size / 17};
  }
  render(){
    var {theme= 'theme1',className,id,style,defaultProps = {},years} = this.props;
    var context = {...this.props,isDisabled:this.isDisabled.bind(this),years}
    var className = `rdp rdp-${theme}${className?' ' + className:''}`;
    return (
      <rdpContext.Provider value={context}>
        <div className={className} id={id} {...defaultProps} style={{...this.getStyle(),...style}}>{this.getHeader()}{this.getBody()}{this.getFooter()}</div>
      </rdpContext.Provider>
    );
  }
}

class GAHDatePickerList extends Component{
  static contextType = rdpContext;
  change(year,month,day){
    var {SetState,isDisabled,range,activeRange,mode,type} = this.context;
    var {details} = this.props;
    var {startYear,endYear} = details;
    if(year > endYear){year = endYear;}
    if(year < startYear){year = startYear;}
    if(month > 12){month = 12;}
    if(month < 1){month = 1;}
    let daysLength = getMonthDaysLength(year,month,mode);
    if(day > daysLength){day = daysLength;}
    if(isDisabled([year,month,day])){return;}  
    if(details.year === year && details.month === month && details.day === day){return;}
    if(range){SetState({[activeRange]:{year,month,day}},true);}
    else {SetState({year,month,day},true);}
  }
  getDays(){
    var {details} = this.props;
    var {mode} = this.context;
    var {year,month} = details,days = [];
    var length = getMonthDaysLength(year,month,mode);
    for(let i = 1; i <= length; i++){days.push(i)}
    return days;
  }
  
  onToday(){
    var {SetState,range,activeRange} = this.context;
    var {details} = this.props;
    var [year,month,day] = details.today;
    if(range){SetState({[activeRange]:{year,month,day}},true);}
    else{SetState({year,month,day},true); }
  }
  render(){
    var {icons,SetState,isDisabled,years,size,mode,type} = this.context;
    var {details} = this.props;
    var months = getMonths(mode);
    var {year,month,day,georgian:g} = details;
    var days = this.getDays();
    var selectStyle={direction:mode === 'J'?'rtl':'ltr'};
    var sign = {J:-1,G:1}[mode];
    var todayText = {J:'امروز',G:'Today'}[mode];
    return(
      <Fragment>
        <div className='rdp-list-header' style={{height:size / 5.5}}>
            {mode === 'J' && type === 'day' && <span>{`${g[0]}/${g[1]}/${g[2]} ${details.weekDayGeorgian.slice(0,3)}`}</span>}
            {mode === 'J' && type === 'month' && <span>{`${g[0]} ${details.monthStringGeorgian}`}</span>}
            <div onClick={()=>SetState({listView:false})}>{icons.grid}</div>
        </div>
        <div className='rdp-list'>
          
          <div className='rdp-today'>
            <button onClick={()=>this.onToday()}>{todayText}</button>
          </div>
          <div className='rdp-list-item'>
            <div className='rdp-step' onClick={()=>this.change(year + -sign,month,day)}>{icons.minus}</div>
            <select value={year} onChange={(e)=>this.change(parseInt(e.target.value),month,day)} style={selectStyle}>
              {years.map((y,i)=>{return <option key={i} value={y}>{y}</option>})}
            </select>
            <div className='rdp-step' onClick={()=>this.change(year + sign,month,day)}>{icons.plus}</div>
          </div>
          
          <div className='rdp-list-item'>
            <div className='rdp-step' onClick={()=>this.change(year,month + -sign,day)}>{icons.minus}</div>
            <select value={month} onChange={(e)=>this.change(year,parseInt(e.target.value),day)} style={selectStyle}>
              {months.filter((m,i)=>!isDisabled([year,i + 1,1])).map((m,i)=>{return <option key={i} value={i + 1}>{m}</option>})}
            </select>
            <div className='rdp-step' onClick={()=>this.change(year,month + sign,day)}>{icons.plus}</div>
          </div>
          
          {
            type === 'day' &&
            <div className='rdp-list-item'>
              <div className='rdp-step' onClick={()=>this.change(year,month,day + -sign)}>{icons.minus}</div>
              <select value={day} onChange={(e)=>this.change(year,month,parseInt(e.target.value))} style={selectStyle}>
                {days.filter((d)=>!isDisabled([year,month,d])).map((d,i)=>{return <option key={i} value={d}>{d}</option>})}
              </select>
              <div className='rdp-step' onClick={()=>this.change(year,month,day + sign)}>{icons.plus}</div>
            </div>
          }
        </div>
      </Fragment>  
    )
  }
}

class GAHDatePickerGrid extends Component{
  static contextType = rdpContext;
  constructor(props){
    super(props);
    var {details} = this.props;
    this.state = {activeYear:details.year,activeMonth:details.month}
  }
  getWeekDays(){
    var {mode} = this.context;
    var weekDays = mode === 'J'?['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه']:['SUNDAY','MONDAY','THUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    return weekDays.map((w,i)=><div key={'weekDay' + i} className='rdp-weekday rdp-cell'><span>{w.slice(0,mode === 'J'?1:2)}</span></div>)
  }
  getSpaces(){
    var {mode} = this.context;
    var {activeYear,activeMonth} = this.state;
    var firstDayWeekDayIndex = getWeekDay([activeYear,activeMonth,1],mode).index;
    let Spaces = [];
    for(let i = 0; i < firstDayWeekDayIndex; i++){
      Spaces.push(<div key={'space' + i} className='rdp-space rdp-cell'></div>)
    }
    return Spaces;
  }
  change(year,month,day){
    var {SetState,range,activeRange,} = this.context;
    if(range){SetState({[activeRange]:{year,month,day}},true);}
    else{SetState({year,month,day},true); }
  }
  getCellClassName(year,month,day,disabled){
    var {range,mode,end,start} = this.context;
    var {details} = this.props;
    var str = 'rdp-cell rdp-cell-first';
    if(disabled){str += ' disabled'}
    if(details.year === year && details.month === month && details.day === day){str += ' active'}
    if(details.today[0] === year && details.today[1] === month && details.today[2] === day){str += ' today'}  
    if(mode === 'J'){str += ' is-jalali';}
    if(range){
      let a = compaireDate([year,month,day],[end.year,end.month,end.day]);
      let b = compaireDate([year,month,day],[start.year,start.month,start.day]);
      if(a === 'less' && b === 'greater'){str += ' in-range';}
      if(b === 'equal'){str += ' start'}
      if(a === 'equal'){str += ' end'}
    }
    return str;
  }
  getCells(){
    var {type} = this.context;
    return this['getCellsBy' + type]()
  }
  getCellsByday(){
    var {activeYear,activeMonth} = this.state;
    var {isDisabled,mode} = this.context;
    var daysLength = getMonthDaysLength(activeYear,activeMonth,mode);
    var Days = [];
    for(let day = 1 ; day <= daysLength; day++){
      let disabled = isDisabled([activeYear,activeMonth,day]);
      let className = this.getCellClassName(activeYear,activeMonth,day,disabled);
      let onClick = disabled || this.context.disabled?undefined:()=>this.change(activeYear,activeMonth,day);
      Days.push(<div onClick={onClick} key={'day' + day} className={className}>{day}</div>)
    }
    return Days;
  }
  getCellsBymonth(){
    var {mode,isDisabled} = this.context;
    var {activeYear} = this.state;
    var months = getMonths(mode);
    var Months = [];
    for (let month = 0; month < months.length; month++){
      let disabled = isDisabled([activeYear,month + 1,1]);
      Months.push(
        <div 
          key={month} 
          style={{borderRadius:0}} 
          className={this.getCellClassName(activeYear,month + 1,1,disabled)}
          onClick={disabled || this.context.disabled?undefined:()=>this.change(activeYear,month + 1,1)}
        >{months[month]}</div>
      )
    }
    return Months
  }
  getCellsByyear(){
    var {isDisabled,years} = this.context;
    var Years = [];
    for (let year = 0; year < years.length; year++){
      let disabled = isDisabled([years[year],1,1]);
      Years.push(
        <div 
          key={year} 
          style={{borderRadius:0,minHeight:'24px'}} 
          className={this.getCellClassName(years[year],1,1,disabled)}
          onClick={disabled || this.context.disabled?undefined:()=>this.change(years[year],1,1)}
        >{years[year]}</div>
      )
    }
    return Years
  }
  getEndSpaces(length){
    let Spaces = [];
    for(let i = 0; i < length; i++){
      Spaces.push(<div key={'endspace' + i} className='rdp-space rdp-cell'></div>)
    }
    return Spaces;
  }
  changeActivePage(value){
    var {type} = this.context;
    this['changeActivePageType' + type](value);
  }
  changeActivePageTypemonth(value){
    var {details} = this.props;
    var {activeYear} = this.state;
    if(value === 1){
        if(activeYear === details.endYear){return;}
        activeYear++;
    }
    else{
        if(activeYear === details.startYear){return;}
        activeYear--;
    }
    this.setState({activeYear});
  }
  changeActivePageTypeday(value){
    var {details} = this.props;
    var {activeYear,activeMonth} = this.state;
    if(value === 1){
      if(activeMonth === 12){
        if(activeYear === details.endYear){return;}
        activeYear++;
        activeMonth = 1;
      }
      else {activeMonth++;}
    }
    else{
      if(activeMonth === 1){
        if(activeYear === details.startYear){return;}
        activeYear--;
        activeMonth = 12;
      }
      else {activeMonth--;}
    }
    this.setState({activeYear,activeMonth});
  }
  getHeader(){
    var {icons,SetState,listView,disabled,size,mode,type} = this.context;
    var {activeYear,activeMonth} = this.state;
    var sign = {J:-1,G:1}[mode];
    var value;
    if(type === 'year'){return null;}
    else if(type === 'day'){
      let months = getMonths(mode);
      let monthString = months[activeMonth - 1];
      value = (mode === 'J'?monthString:monthString.slice(0,3)) + ' ' + activeYear;
    }
    else {value = activeYear}
    return (
      <div className='rdp-grid-header' style={{height:size / 5.5,padding:`0 ${size / 12.5}px`}}>
          {!listView && !disabled && <div onClick={()=>this.changeActivePage(-sign)}>{icons.minus}</div>}
          <div 
            className='rdp-month' 
            onClick={()=>{if(!disabled){SetState({listView:true})}}}
            style={{cursor:disabled?'':'pointer',fontSize:Math.floor(size / 12)}}
          >{value}</div>
          {!listView && !disabled && <div onClick={()=>this.changeActivePage(sign)}>{icons.plus}</div>}
      </div>
    )
  }
  getStyle(){
    var {size,mode,type} = this.context;
    var columnCount = {day:7,month:3,year:4}[type];
    var rowCount = {day:7,month:4,year:0}[type]; 
    var padding = size / 24,fontSize = size / 18,a = (size - padding * 2) / columnCount;
    var rowHeight = {day:a,month:size / 5.5,year:size / 5.5}[type];
    var gridTemplateColumns = '',gridTemplateRows = '';
    for(let i = 1; i <= columnCount; i++){
      gridTemplateColumns += a + 'px' + (i !== columnCount?' ':'')
    }
    for(let i = 1; i <= rowCount; i++){
      gridTemplateRows += rowHeight + 'px' + (i !== rowCount?' ':'')
    }
    return{
      gridTemplateColumns,gridTemplateRows,
      direction:mode === 'J'?'rtl':'ltr',padding,fontSize
    }
  }
  getContentday(){
    var Spaces = this.getSpaces(),WeekDays = this.getWeekDays(),Days = this.getCells();
    var EndSpaces = this.getEndSpaces(42 - (Spaces.length + Days.length));
    return (
      <Fragment>
        {WeekDays}{Spaces}{Days}{EndSpaces}
      </Fragment>
    )
  }
  getContentmonth(){
    return this.getCells();
  }
  getContentyear(){
    return this.getCells();
  }
  render(){
    var {type} = this.context;
    return (
      <Fragment>
        {this.getHeader()}
        <div className='rdp-grid' style={this.getStyle()}>{this['getContent' + type]()}</div>
      </Fragment>
    )
  }
}
