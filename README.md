# gah-datepicker(react js)
```#datepicker #rangepicker #monthpicker #hourpicker #multidatepicker```
# install
```javascript
npm i gah-datepicker
```

```calendarType='gregorian'``` | ```calendarType='jalali'```
------------------------------ | ---------------------------
![alt text](/images/2.gif) | ![alt text](/images/3.gif)

```unit='month'``` | ```unit='day'``` | ```unit='hour'```
------------------ | ---------------- | -----------------
![alt text](/images/16.jpg) | ![alt text](/images/3.jpg) | ![alt text](/images/25.jpg) 

```type='range'``` | ```type='multiselect'```
------------------ | ------------------------
![alt text](/images/6.gif) | ![alt text](/images/4.gif)

```justCalendar={true}``` | ```swipe={true}```
------------------------- | ------------------
![alt text](/images/23.jpg) | ![alt text](/images/8.gif)

```size={180}``` | ```size={120}```
---------------- | ----------------
![alt text](/images/3.jpg) | ![alt text](/images/11.jpg)

```theme={['orange','#555']}``` | ```theme={['#777','lightblue']}```
------------------------------- | ----------------------------------
![alt text](/images/19.jpg) | ![alt text](/images/17.jpg)

```getDateStyle={(obj)=>...}``` | ```getDateStyle={(obj)=>...}```
----------------------------------------------- | ---------------------
![alt text](/images/22.jpg) | ![alt text](/images/26.jpg)


```editValue={(text)=>'From Date : ' + text}``` | ```disabled={true}```
----------------------------------------------- | ---------------------
![alt text](/images/20.jpg) | ![alt text](/images/21.jpg)

default caret               | ```caret={false}```        | ```caret={(<div className='mdi mdi-chevron-down'></div>)}```
--------------------------- | -------------------------- | ------------------------------------------------------------
![alt text](/images/24.jpg) | ![alt text](/images/7.jpg) | ![alt text](/images/8.jpg)

```style={{width:'100%',background:'dodgerblue',color:'#fff',borderRadius:6}}``` | ```icon={(<svg...>...</svg>)}```
-------------------------------------------------------------------------------- | --------------------------------
![alt text](/images/10.jpg) | ![alt text](/images/6.jpg)



- react js
- custom size by set one prop
- custom theme by set one prop
- custom date cell style
- gregorian date
- jalali date ( persian )
- month picker
- day picker
- hour picker
- range picker
- multi select
- simple configuration
# Read this document in 5 minutes
# use
- ##### ES6:
```javascript
import GAH from 'gah-datepicker';
```
- ##### ES5:
```javascript
var GAH = require('gah-datepicker');
```

### main props
prop | type | default | Description
---- | ---- | ------- | -----------
value | string or array | false | value of datepicker
onChange | function | Required | change value event. get an object as parameter contain changed value properties.
onClear | function | optional | place clear button in bottom of datepicker. user can call onClear function by click on clear button.
className | 'string' | optional | custom className of datepicker.
id | 'string' | optional | id of datepicker.
style | css object | optional | inline css style of datepicker button.
disabled | boolean | false | make date picker disabled. block actions.
type | string ('default' or 'range' or 'multiselect') | 'default' | set date picker on default or range or multiselect mode.
calendarType | 'gregorian' or 'jalali' | 'gregorian' | set datepicker type(برای تقویم فارسی کافیست این پروپرتی را روی جلالی تنظیم کنید)
unit | 'month' or 'day' or 'hour' | 'day' | for select month , set unit as 'month' and for select hour set ubit as 'hour'.

### other props
prop | type | default | Description
---- | ---- | ------- | -----------
startYear | number or string | "-20" | startYear = "-20" means datepicker years start from 20 years ago. startYear = 2002 means datepicker years start from 2002.
endYear | number or string | "+10" | endYear = "+10" means datepicker last year will be 10 years later. endYear = 2030 means datepicker last year will be 2030.
setDisabled | function | optional | will called For each date and get the date object as parameter, must return a boolean to determine whether the date is disabled or not.
getDateStyle | function | optional | will called For each date and get the date object as parameter, must return an css object as style of date.
icon | html or jsx | optional | use icon in datepicker button.
caret | boolean or html or jsx | true (default caret) | set caret icon of datepicker button.
size | number | 180 | set size of datepicker
placeHolder | 'string' | 'Select Date' in gregorian mode and 'انتخاب تاریخ' in jalali mode | show text on button when value is false or undefined
theme | array of 2 color string | optional | set theme color of datepicker by define 2 color
swipe | boolean | false | change date by swipe mouse vertically.
justCalendar | boolean | false | show just calendar alwais visible without datepicker button.
animate | boolean | false | open calendar with animation
open | boolean | false | show calendar in first render.

# css styling
- ##### styling datepicker by css based on elements classes.
```javascript
.gah-cell{
  color:#333;
  background:lightseagreen
}
.gah-cell.gah-disabled{
  background: midnightblue; 
}
.gah-cell.gah-active{
  background:yellow;
  color:#333;
}
.gah-today{
  background:red;
  color:#fff;
}
.gah-header{
  background:steelblue;
  color:orange;
  stroke:orange;
}
.gah-body{
  background: chartreuse;
}
.gah-footer{
  color:#666;
  background:lightcoral
}
```
![alt text](/images/34.jpg)


# Basic
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={date:'2020/4/5'};
  render(){
    let {date} = this.state;
    return (
      <GAH
        value={date}
        onChange={(dateObject)=>{
          this.setState({date:dateObject.dateString})
        }}
      />
    )
  }
}

```
- ##### onChange props get dateObject as parameter. see dateObject json:
```javascript
{
    "year": 2020,
    "month": 2,
    "day": 20,
    "weekDay": "THURSDAY",
    "weekDayIndex": 4,
    "monthFirstDayWeekDay": "SATURDAY",
    "year2Digit": "20",
    "month2Digit": "02",
    "day2Digit": "20",
    "weekDays": [
        "SUNDAY",
        "MONDAY",
        "THUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
    ],
    "monthString": "FEBRUARY",
    "todayMonthString": "DECEMBER",
    "startYear": 2011,
    "endYear": 2041,
    "dateString": "2020/2/20",
    "fullDateString": "2020/2/20 THURSDAY",
    "today": [
        2021,
        12,
        14
    ],
    "todayWeekDay": "THUESDAY",
    "todayWeekDayIndex": 2
}
```
![alt text](/images/1.jpg)

# jalali(تقویم فارسی)
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={date:'1400/2/20'};
  render(){
    let {date} = this.state;
    return (
      <GAH
        calendarType='jalali'
        value={date}
        onChange={(dateObject)=>{
          this.setState({date:dateObject.dateString})
        }}
      />
    )
  }
}

```
- ##### dateObject structure in jalali mode:
```javascript
{
    "year": 1400,
    "month": 2,
    "day": 20,
    "weekDay": "دوشنبه",
    "weekDayIndex": 2,
    "monthFirstDayWeekDay": "چهارشنبه",
    "year2Digit": "00",
    "month2Digit": "02",
    "day2Digit": "20",
    "weekDays": [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه"
    ],
    "monthString": "اردیبهشت",
    "todayMonthString": "آذر",
    "startYear": 1390,
    "endYear": 1420,
    "dateString": "1400/2/20",
    "fullDateString": "1400/2/20 دوشنبه",
    "today": [
        1400,
        9,
        23
    ],
    "todayWeekDay": "سه شنبه",
    "todayWeekDayIndex": 3,
    "gregorian": [
        2021,
        5,
        10
    ],
    "todayGregorian": [
        2021,
        12,
        14
    ],
    "weekDayGregorian": "MONDAY",
    "monthStringGregorian": "FEBRUARY"
}
```
![alt text](/images/2.jpg)
# unit
- ##### month picker:
```javascript
<GAH
  ...
  unit='month'
  value='2021/12'
  ...
/>
```
![alt text](/images/16.jpg)
- ##### hour picker:
```javascript
<GAH
  ...
  unit='hour'
  value='2021/12/18/10'
  ...
/>
```
![alt text](/images/25.jpg)

# use any splitter (each not an number character)
- ##### in this example splitter is "."
- ##### you can set any isNaN character for splitting date.
```javascript
<GAH
  ...
  value='2020.2.20'
  ...
/>
```
![alt text](/images/3.jpg)
# multiselect
- ##### for multiselect mode set type = 'multiselect'
- ##### simple multiselect:
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={
    dates:[
      '2021/12/1',
      '2021/12/2',
      '2021/12/6',
      '2021/12/20'
    ]
  };
  render(){ 
    let {dates} = this.state; 
    return (
      <GAH
        type='multiselect'
        values={dates}
        onChange={(values)=>this.setState({dates:values})} 
      />
    )
  }
}

```
![alt text](/images/4.gif)
# range
- ##### for range mode set type = 'range'
- ##### range mode get start and end props and will render 2 datepicker
- ##### start and end can get most main props
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={
    startDate:'2020/3/4',
    endDate:'2020/3/7'
  };
  render(){  
    let {startDate,endDate} = this.state; 
    return (
      <GAH 
        type='range'
        start={{
          value:startDate,
          onChange:({dateString})=>{
            this.setState({startDate:dateString})
          }
          //other props....
        }}
        end={{
          value:endDate,
          onChange:({dateString})=>{
            this.setState({endDate:dateString})
          }
          //other props....
        }}
        
      />
    )
  }
}

```

![alt text](/images/6.gif)

# without value
- ##### if value equal false or undefined , the placeHolder string will be displayed.
```javascript
<GAH
  ...
  value={false}
  ...
/>
```
![alt text](/images/4.jpg)
# placeHolder
```javascript
<GAH
  value={false}
  placeHolder='Select Any Date'
/>
```
![alt text](/images/5.jpg)
# icon
- ##### use any html or jsx in datepicker button as icon.
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={date:'2020.2.20'};
  render(){
    let {date} = this.state;
    let svg = (
      <svg x="0px" y="0px" viewBox="0 0 216.374 216.374" style={{width:20,height:20,marginRight:6}} fill='#666'>
        <path d="M207.374,30.135h-25.438V13.432c0-4.971-4.029-9-9-9s-9,4.029-9,9v16.703H52.438V13.432c0-4.971-4.029-9-9-9s-9,4.029-9,9
          v16.703H9c-4.971,0-9,4.029-9,9v163.808c0,4.971,4.029,9,9,9h198.374c4.971,0,9-4.029,9-9V39.135
          C216.374,34.164,212.345,30.135,207.374,30.135z M198.374,48.135v19.997H18V48.135H198.374z M18,193.942V86.132h180.374v107.811H18
          z"/>
        <path d="M140.288,102.718L89.82,153.186l-13.734-13.734c-3.515-3.514-9.213-3.514-12.728,0c-3.515,3.515-3.514,9.214,0,12.729
          l20.098,20.098c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l56.832-56.831c3.515-3.515,3.515-9.214,0-12.729
          C149.502,99.205,143.803,99.204,140.288,102.718z"/>
      </svg>
    )
    return (
      <GAH
        value={date}
        icon={svg}
      />
    )
  }
}

```
![alt text](/images/6.jpg)
# caret
- ##### without caret
```javascript
<GAH
  ...
  caret={false}
  ...
/>
```
![alt text](/images/7.jpg)

- ##### custom caret
```javascript
<GAH
  ...
  caret={<div className='mdi mdi-chevron-down'></div>}
  ...
/>
```
![alt text](/images/8.jpg)

# prevYears , nextYears
prop | type | default | description
---- | ---- | ------- | -----------
prevYear | number | 10 | years count before this year
nextYear | number | 20 | years count after this year
```javascript
<GAH
  ...
  prevYears={5}
  nextYears={10}
  ...
/>
```
![alt text](/images/9.jpg)

# onClear
- ##### onClear function will be called after user click on clear button.
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={date:'2020/2/20'};
  render(){
    let {date} = this.state;
    return (
      <GAH
        value={date}
        onChange={(obj)=>{this.setState({date:obj.dateString})}}
        onClear={()=>this.setState({date:false})}
      />
    )
  }
}

```
![alt text](/images/1.gif)
# style
- ##### css style for datepicker button.
```javascript
<GAH
  style={{width:'100%',background:'dodgerblue',color:'#fff',borderRadius:6}}
/>
```
![alt text](/images/10.jpg)
# size
- ##### for set custom size of datepicker just set size props.
```javascript
<GAH
  size={120}
/>
```
![alt text](/images/11.jpg)

# setDisabled
- ##### make dates disabled
- ##### in this example, '2020/1/1' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    obj.isEqual('2020/1/1')
  }}
  ...
/>
```
- ##### also in this example, '2020/1/1' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.year === 2020 && obj.month === 1 && obj.day === 1
  }}
  ...
/>
```
- ##### also in this example, '2020/1/1' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.dateString === '2020/1/1'
  }}
  ...
/>
```

![alt text](/images/15.jpg)
- ##### in this example all dates before '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.isLess('2020/2/20')
  }}
  ...
/>
```
![alt text](/images/12.jpg)

- ##### in this example all dates after '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.isGreater('2020/2/20')
  }}
  ...
/>
```
![alt text](/images/13.jpg)

- ##### in this example all dates between '2020/2/10' and '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.isBetween('2020/2/10','2020/2/20')
  }}
  ...
/>
```
![alt text](/images/14.jpg)

- ##### in this example all fridays will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.weekDay === 'friday'
    // or return obj.weekDayIndex === 5
  }}
  ...
/>
```
- ##### in this example all fridays in 2020 year will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.year === 2020 && obj.weekDay === 'friday'
  }}
  ...
/>
```
- ##### in this example fridays in 2020/6 will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.year === 2020 && obj.month === 6 && obj.weekDay === 'friday'
  }}
  ...
/>
```
- ##### in this example all fridays in all years in june will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.month === 6 && obj.weekDay === 'friday'
  }}
  ...
/>
```
- ##### in this example all days in 2020/6 will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.isEqual('2020/6')
  }}
  ...
/>
```
- ##### in this example all days in 2020 will be disabled.
```javascript
<GAH
  ...
  setDisabled={(obj)=>{
    return obj.isEqual('2020')
  }}
  ...
/>
```


# theme
```javascript
<GAH
  ...
  theme={['#777','lightblue']}
  ...
/>
```
![alt text](/images/17.jpg)
```javascript
<GAH
  ...
  theme={['orange','#fff']}
  ...
/>
```
![alt text](/images/18.jpg)
```javascript
<GAH
  ...
  theme={['orange','#555']}
  ...
/>
```
![alt text](/images/19.jpg)

# getDateStyle

```javascript
<GAH
  ...
  getDateStyle={(obj)=>{
    if(obj.weekDayIndex === 3){
      return {background:'#2dc0c5',color:'#fff'}
    }
    if(obj.weekDayIndex === 4){
      return {background:'#9be4e7',color:'#fff'}
    }
    if(obj.weekDayIndex === 5){
      return {background:'#6fd7c8',color:'#fff'}
    }
    if(obj.weekDayIndex === 6){
      return {background:'#56f997',color:'#fff'}
    }
  }}
  ...
/>
```
![alt text](/images/22.jpg)

```javascript
<GAH
  ...
  getDateStyle={(obj)=>{
    if(obj.isBetween('2021/4/15','2021/4/28')){
      return {background:'orange',color:'#fff'}
    }
  }}
  ...
/>
```
![alt text](/images/26.jpg)

