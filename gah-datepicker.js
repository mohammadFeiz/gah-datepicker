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
    this.type = this.props.jalali?'J':'G';
    this.init();
  }
  init(){
    var {value,prevYears,nextYears,range} = this.props;
    var today = getToday(this.type);
    this.startYear = today[0] - prevYears;
    this.endYear = today[0] + nextYears;
    this.years = [];
    for(var i = this.startYear; i <= this.endYear; i++){this.years.push(i);}
    if(range){this.setRangeType(value,today);}
    else {this.setSingleType(value,today)}
  }
  validateValue(value,today){
    var Value,{splitter} = this.props;
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
    if(isNaN(day)){day = 1} 
    var daysLength = getMonthDaysLength(year,month,this.type);
    if(day > daysLength){day = daysLength;}
    if(day < 1){day = 1;}
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
    var {splitter = '/',jalali} = this.props;
    var {weekDay,index:weekDayIndex} = getWeekDay([year,month,day],this.type);
    var {weekDay:monthFirstDayWeekDay} = getWeekDay([year,month,1],this.type);
    var today = getToday(this.type);
    var extra = {};
    var months = getMonths(this.type);
    if(jalali){
      let georgian = jalali_to_gregorian(year,month,day)
      let todayGeorgian = jalali_to_gregorian(today[0],today[1],today[2]);
      let weekDayGeorgian = getWeekDay(georgian,'G').weekDay;
      extra = {georgian,todayGeorgian,weekDayGeorgian};
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
      let newDate = getNextDay(dateArray,this.type);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState({[activeRange]:newDateObj},true)
    }
    else{
      let {year,month,day} = this.state;
      let newDate = getNextDay([year,month,day],this.type);
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
      let newDate = getPrevDay(dateArray,this.type);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState({[activeRange]:newDateObj},true)
    }
    else{
      let {year,month,day} = this.state;
      let newDate = getPrevDay([year,month,day],this.type);
      let newDateObj = {year:newDate[0],month:newDate[1],day:newDate[2]};
      this.SetState(newDateObj,true)
    }
  }
  getValue(){
    var {range,splitter} = this.props;
    if(range){
      let {start,end} = this.state;
      return start.year + splitter + start.month + splitter + start.day + ' - ' + end.year + splitter + end.month + splitter + end.day 
    }
    else{
      let {year,month,day} = this.state;
      return year + splitter + month + splitter + day
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
              type={this.type}
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
GAH.defaultProps = {size:150,jalali:true,disabled:false,splitter:'/',prevYears:10,nextYears:20}

var rdpContext = createContext();
class GAHDatePickerPopup extends Component {
  isDisabled(date){
    var {limits,splitter,range,start,end,activeRange,type} = this.props;
    if(range){
      if(activeRange === 'end' && compaireDate(date,[start.year,start.month,start.day]) === 'less'){return true}
      if(activeRange === 'start' && compaireDate(date,[end.year,end.month,end.day]) === 'greater'){return true}
    }
    if(!limits){return false}
    for(let i = 0; i < limits.length; i++){
      let limit = limits[i];
      
      if(limit.type === 'weekDay'){
        let thisMonth = true;
        if(limit.year !== undefined && limit.year !== date[0]){thisMonth = false}
        else if(limit.month !== undefined && limit.month !== date[1]){thisMonth = false}
        if(thisMonth){
          let weekDay = getWeekDay(date,type).index + 1;
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
        if(compaireDate(date,[parseInt(dateArray[0]),parseInt(dateArray[1]),parseInt(dateArray[2])]) === limit.type){return true}
      }   
    }
    return false;
  }
  getHeader(){
    var {range,size} = this.props;
    var style = {height:size / 8 + 6,fontSize:size / 16,padding:`0 3px`};
    if(!range){return null;}
    else {
      let {activeRange,setActiveRange,rangeDetails} = this.props;
      let {year:year1,month:month1,day:day1} = rangeDetails.start;
      let {year:year2,month:month2,day:day2} = rangeDetails.end;
      let rangeStyle = {height:size / 8};
      return (
        <div className='rdp-header' style={style}>
          <span 
            className={'rdp-range-value rdp-range-start' + (activeRange === 'start'?' active':'')}
            onClick={()=>setActiveRange('start')}
            style={rangeStyle}
          >{year1 + ' / ' + month1 + ' / ' + day1}</span>
          <span 
            className={'rdp-range-value rdp-range-end' + (activeRange === 'end'?' active':'')}
            onClick={()=>setActiveRange('end')}
            style={rangeStyle}
          >{year2 + ' / ' + month2 + ' / ' + day2}</span>
        </div>
      )
    }
  }
  getBody(){return this.props.listView?<RDatePickerList details={this.props.details}/>:<RDatePickerGrid key={this.props.activeRange} details={this.props.details}/>}
  getFooter(){
    var {onSubmit,onClose,type,disabled,size} = this.props;
    var buttonStyle = {padding:`${size / 24}px ${size / 12}px`}
    var closeText = {G:'Cansel',J:'بستن'}[type];
    var submitText = {G:'OK',J:'تایید'}[type];
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
    var {theme= 'theme1',className,id,style,defaultProps = {}} = this.props;
    var context = {...this.props,isDisabled:this.isDisabled.bind(this)}
    var className = `rdp rdp-${theme}${className?' ' + className:''}`;
    return (
      <rdpContext.Provider value={context}>
        <div className={className} id={id} {...defaultProps} style={{...this.getStyle(),...style}}>{this.getHeader()}{this.getBody()}{this.getFooter()}</div>
      </rdpContext.Provider>
    );
  }
}
class RDatePickerList extends Component{
  static contextType = rdpContext;
  change(year,month,day){
    var {SetState,isDisabled,range,activeRange,type} = this.context;
    var {details} = this.props;
    var {startYear,endYear} = details;
    if(year > endYear){year = endYear;}
    if(year < startYear){year = startYear;}
    if(month > 12){month = 12;}
    if(month < 1){month = 1;}
    let daysLength = getMonthDaysLength(year,month,type);
    if(day > daysLength){day = daysLength;}
    if(isDisabled([year,month,day])){return;}
    if(details.year === year && details.month === month && details.day === day){return;}
    if(range){SetState({[activeRange]:{year,month,day}},true);}
    else {SetState({year,month,day},true);}
  }
  getDays(){
    var {details} = this.props;
    var {type} = this.context;
    var {year,month} = details,days = [];
    var length = getMonthDaysLength(year,month,type);
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
    var {icons,SetState,isDisabled,years,size,type} = this.context;
    var {details} = this.props;
    var months = getMonths(type);
    var {year,month,day,georgian:g} = details;
    var days = this.getDays();
    var selectStyle={direction:type === 'J'?'rtl':'ltr'};
    var sign = {J:-1,G:1}[type];
    var todayText = {J:'امروز',G:'Today'}[type];
    return(
      <Fragment>
        <div className='rdp-list-header' style={{height:size / 5.5}}>
            {type === 'J' && <span>{`${g[0]}/${g[1]}/${g[2]} ${details.weekDayGeorgian.slice(0,3)}`}</span>}
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
              {months.map((m,i)=>{return <option key={i} value={i + 1}>{m}</option>})}
            </select>
            <div className='rdp-step' onClick={()=>this.change(year,month + sign,day)}>{icons.plus}</div>
          </div>
          
          <div className='rdp-list-item'>
            <div className='rdp-step' onClick={()=>this.change(year,month,day + -sign)}>{icons.minus}</div>
            <select value={day} onChange={(e)=>this.change(year,month,parseInt(e.target.value))} style={selectStyle}>
              {days.filter((d)=>!isDisabled([year,month,d])).map((d,i)=>{return <option key={i} value={d}>{d}</option>})}
            </select>
            <div className='rdp-step' onClick={()=>this.change(year,month,day + sign)}>{icons.plus}</div>
          </div>
        </div>
      </Fragment>  
    )
  }
}

class RDatePickerGrid extends Component{
  static contextType = rdpContext;
  constructor(props){
    super(props);
    var {details} = this.props;
    this.state = {activeYear:details.year,activeMonth:details.month}
  }
  getWeekDays(){
    var {type} = this.context;
    var weekDays = type === 'J'?['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه']:['SUNDAY','MONDAY','THUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    return weekDays.map((w,i)=><div key={'weekDay' + i} className='rdp-weekday rdp-cell'><span>{w.slice(0,type === 'J'?1:2)}</span></div>)
  }
  getSpaces(){
    var {type} = this.context;
    var {activeYear,activeMonth} = this.state;
    var firstDayWeekDayIndex = getWeekDay([activeYear,activeMonth,1],type).index;
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
  getCellClassName(day,disabled){
    var {range,type,end,start} = this.context;
    var {details} = this.props;
    var {activeYear,activeMonth} = this.state;
    var str = 'rdp-cell rdp-cell-first';
    if(disabled){str += ' disabled'}
    if(details.year === activeYear && details.month === activeMonth && details.day === day){str += ' active'}
    if(details.today[0] === activeYear && details.today[1] === activeMonth && details.today[2] === day){str += ' today'}
    if(type === 'J'){str += ' is-jalali';}
    if(range){
      let a = compaireDate([activeYear,activeMonth,day],[end.year,end.month,end.day]);
      let b = compaireDate([activeYear,activeMonth,day],[start.year,start.month,start.day]);
      if(a === 'less' && b === 'greater'){str += ' in-range';}
      if(b === 'equal'){str += ' start'}
      if(a === 'equal'){str += ' end'}
    }
    return str;
  }
  getDayCells(){
    var {activeYear,activeMonth} = this.state;
    var {isDisabled,type} = this.context;
    var daysLength = getMonthDaysLength(activeYear,activeMonth,type);
    var days = [];
    for(let i = 1 ; i <= daysLength; i++){
      let disabled = isDisabled([activeYear,activeMonth,i]);
      let className = this.getCellClassName(i,disabled);
      let onClick = disabled || this.context.disabled?undefined:()=>this.change(activeYear,activeMonth,i);
      days.push(<div onClick={onClick} key={'day' + i} className={className}>{i}</div>)
    }
    return days;
  }
  getEndSpaces(length){
    let Spaces = [];
    for(let i = 0; i < length; i++){
      Spaces.push(<div key={'endspace' + i} className='rdp-space rdp-cell'></div>)
    }
    return Spaces;
  }
  changeActiveMonth(value){
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
    var {icons,SetState,listView,disabled,size,type} = this.context;
    var months = getMonths(type);
    var {activeYear,activeMonth} = this.state;
    var monthString = months[activeMonth - 1];
    var sign = {J:-1,G:1}[type];
    return (
      <div className='rdp-grid-header' style={{height:size / 5.5,padding:`0 ${size / 12.5}px`}}>
          {!listView && !disabled && <div onClick={()=>this.changeActiveMonth(-sign)}>{icons.minus}</div>}
          <div 
            className='rdp-month' 
            onClick={()=>{if(!disabled){SetState({listView:true})}}}
            style={{cursor:disabled?'':'pointer',fontSize:Math.floor(size / 12)}}
          >{(type === 'J'?monthString:monthString.slice(0,3)) + ' ' + activeYear}</div>
          {!listView && !disabled && <div onClick={()=>this.changeActiveMonth(sign)}>{icons.plus}</div>}
      </div>
    )
  }
  getStyle(){
    var {size,type} = this.context;
    var padding = size / 24,fontSize = size / 18,a = (size - padding * 2) / 7;
    return{
      gridTemplateColumns:`${a}px ${a}px ${a}px ${a}px ${a}px ${a}px ${a}px`,
      gridTemplateRows:`${a}px ${a}px ${a}px ${a}px ${a}px ${a}px ${a}px`,
      direction:type === 'J'?'rtl':'ltr',padding,fontSize
    }
  }
  render(){
    var Spaces = this.getSpaces(),WeekDays = this.getWeekDays(),Days = this.getDayCells();
    var EndSpaces = this.getEndSpaces(42 - (Spaces.length + Days.length));
    return (
      <Fragment>
        {this.getHeader()}
        <div className='rdp-grid' style={this.getStyle()}>{WeekDays}{Spaces}{Days}{EndSpaces}</div>
      </Fragment>
    )
  }
}