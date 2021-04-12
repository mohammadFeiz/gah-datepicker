import React from 'react';
export function getPlusIcon(){
    return (
      <svg className='rdp-arrow-icon' style={{width:"24px",height:"24px"}} width={24} height={24}>
        <path fill="transparent" d="M11 8 L15 12 L11 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
      </svg>
    )
  }
export function getMinusIcon(){
    return (
      <svg className='rdp-arrow-icon' style={{width:"24px",height:"24px"}} width={24} height={24}>
        <path fill="transparent" d="M13 8 L9 12 L13 16" strokeLinejoin="miter-clip" strokeLinecap="square" strokeWidth={2}></path>
      </svg>
    )
  }
export function getGridIcon(){
    return (
      <svg style={{width:"24px",height:"24px",background:"unset"}} width={24} height={24}>
        <path fill="transparent" d="M18 6 L6 6 L6 18 L18 18 L18 6" strokeLinejoin="round" strokeLinecap="round" strokeWidth={1}>
      </path><path fill="transparent" d="M18 10 L6 10 L18 10" strokeLinejoin="round" strokeLinecap="round" strokeWidth={1}>
      </path><path fill="transparent" d="M18 14 L6 14 L18 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth={1}>
      </path><path fill="transparent" d="M10 6 L10 18 L10 6" strokeLinejoin="round" strokeLinecap="round" strokeWidth={1}>
      </path><path fill="transparent" d="M14 6 L14 18 L14 6" strokeLinejoin="round" strokeLinecap="round" strokeWidth={1}>
      </path>
      </svg>
    )
  }
export function getArrowUpIcon(){
    return (
      <svg style={{width:"24px",height:"24px",background:"unset"}} width={24} height={24}>
        <path fill="transparent" d="M8 11 L12 7 L16 11" strokeLinejoin="miter" strokeLinecap="square" strokeWidth={2}>
      </path><path fill="transparent" d="M12 7 L12 18" strokeLinejoin="bevel" strokeLinecap="butt" strokeWidth={2}>
      </path>
      </svg>
    )
  }
export function getArrowDownIcon(){
    return (
      <svg style={{width:"24px",height:"24px",background:"unset"}} width={24} height={24}>
        <path fill="transparent" d="M12 6 L12 16" strokeLinejoin="bevel" strokeLinecap="butt" strokeWidth={2}>
      </path><path fill="transparent" d="M8 13 L12 17 L16 13" strokeLinejoin="miter" strokeLinecap="square" strokeWidth={2}>
      </path>
      </svg>
    )
  }
export function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * ~~(days / 12053));days %= 12053;jy += 4 * ~~(days / 1461);days %= 1461;
    if (days > 365) {jy += ~~((days - 1) / 365);days = (days - 1) % 365;}
    if (days < 186) {jm = 1 + ~~(days / 31);jd = 1 + (days % 31);} else {jm = 7 + ~~((days - 186) / 30);jd = 1 + ((days - 186) % 30);}
    return [jy, jm, jd];
  }
export function jalali_to_gregorian(jy, jm, jd) {
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
  }
var GetMonthDaysLength = {
  J:(year,month)=>{
    if(month <= 6){return  31;}
    if(month <= 11){return 30;}
    if([1,5,9,13,17,22,26,30].indexOf(year % 33) === -1){return 29;}
    return 30;
  },
  G:(year,month)=>{return new Date(year, month, 0).getDate();}
}
export function getMonthDaysLength(year,month,type){
  return GetMonthDaysLength[type](year,month)
}
function getDayIndexInYear([year,month,day]){
  var index = 0;
  for(let i = 1; i < month; i++){
    if(i <= 6){index += 31}
    else{index +=30}
  }
  return index + day;
}
function getLeapBetweenYears(start,end){
  var count = 0;
  start++;
  while(start < end){
    if([1,5,9,13,17,22,26,30].indexOf(start % 33) !== -1){count++;}
    start++;
  }
  return count;
}
function getDaysBetween(start,end){
    if(end[0] - start[0] === 0){return Math.max(getDayIndexInYear(end) - getDayIndexInYear(start) - 1,0);}
    var result = 0;
    if(end[0] - start[0] > 1){
      var leaps = getLeapBetweenYears(start[0],end[0]);
      var notLeaps = Math.max(end[0] - start[0] - 1 - leaps,0);
      result = leaps * 366 + notLeaps * 365;
    }
    result += getDayIndexInYear(end) - 1;
    result += ([1,5,9,13,17,22,26,30].indexOf(start[0] % 33) !== -1?366:365) - getDayIndexInYear(start);
    return result;
  }
export function compaireDate([year1,month1,day1],[year2,month2,day2]){
  if(year1 < year2){return 'less'}if(year1 > year2){return 'greater'}
  if(month1 < month2){return 'less'}if(month1 > month2){return 'greater'}
  if(day1 < day2){return 'less'}if(day1 > day2){return 'greater'}
  return 'equal';
}
export function getNextDay([year,month,day],type){
    var monthDaysLength = getMonthDaysLength(year,month,type);
    if(day < monthDaysLength){return [year,month,day + 1]}
    if(month < 12){return [year,month + 1,1]}
    return [year + 1,1,1];
}
export function getPrevDay([year,month,day],type){
    if(day > 1){return [year,month,day - 1]}
    if(month > 1){
      month -= 1;
      day = getMonthDaysLength(year,month,type);
      return [year,month,day];
    }
    year -= 1;
    month = 12;
    day = getMonthDaysLength(year,month,type);
    return [year,month,day];
}
export function getNextMonth([year,month]){
    if(month < 12){return [year,month + 1,1]}
    return [year + 1,1,1];
}
export function getPrevMonth([year,month]){
    if(month > 1){return [year,month - 1,1]}
    return [year - 1,12,1];
}
function getDatesBetween(start,end){
  let Start,End;
  if(['equal','less'].indexOf(compaireDate(start,end)) !== -1){Start = start; End = end;}
  else{Start = end; end = Start;}
  var dates = [],nextDay = this.getNextDay(Start);
  while(compaireDate(nextDay,End) === 'less'){
      dates.push(nextDay);
      nextDay = this.getNextDay(nextDay);
  }
  return dates;
}
var GetWeekDay = {
  J:([year,month,day])=>{
    var res = compaireDate([year,month,day],[1399,12,30]);
    var offset;
    var weekDays = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'];
    if(res === 'equal'){offset = 0;}
    else if(res === 'less'){
      offset = (-getDaysBetween([year,month,day],[1399,12,30]) - 1) % 7;
      if(offset < 0){offset += 7}
    }
    else{
      offset = (getDaysBetween([1399,12,30],[year,month,day]) + 1) % 7;
    }
    return {weekDay:weekDays[offset],index:offset};
  },
  G:([year,month,day])=>{
    var offset = new Date(year,month - 1,day).getDay();
    var weekDays = ['SUNDAY','MONDAY','THUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    return {weekDay:weekDays[offset],index:offset};
  }
}
export function getWeekDay(date,type){return GetWeekDay[type](date)}

var GetToday = {
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
}
export function getToday(mode,type = 'day'){
  return GetToday[mode](type)
}

export function getMonths(type){
  return {
    J:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند',],
    G:['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
  }[type]
}