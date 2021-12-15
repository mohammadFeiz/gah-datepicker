# gah-datepicker(react js)
# install
```javascript
npm i gah-datepicker
```

gregorian | ```jalali={true}```
--------- | ------
![alt text](/images/2.gif) | ![alt text](/images/3.gif)
```type='day'``` | ```type='month'```
![alt text](/images/3.jpg) | ![alt text](/images/16.jpg)
```size={180}``` | ```size={120}```
![alt text](/images/3.jpg) | ![alt text](/images/11.jpg)
```theme={['orange','#555']}``` | ```theme={['#777','lightblue']}```
![alt text](/images/19.jpg) | ![alt text](/images/17.jpg)
```range={true}``` | ```multiselect={true}```
![alt text](/images/6.gif) | ![alt text](/images/4.gif)
```caret={false}``` | ```caret={(<div className='mdi mdi-chevron-down'></div>)}```
![alt text](/images/7.jpg) | ![alt text](/images/8.jpg)
```editValue={(text)=>'From Date : ' + text}``` | ```disabled={true}```
![alt text](/images/20.jpg) | ![alt text](/images/21.jpg)

```style={{width:'100%',background:'dodgerblue',color:'#fff',borderRadius:6}}``` | ```icon={(<svg...>...</svg>)}```
-------------------------------------------------------------------------------- | --------------------------------
![alt text](/images/10.jpg) | ![alt text](/images/6.jpg)



- react js
- custom size by set one prop
- custom theme by one prop
- gregorian date
- persian date
- month picker
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

### all props
prop | type | default | Description
---- | ---- | ------- | -----------
value | string or array | false | value of datepicker
onChange | function | Required | change value event. get an object as parameter contain changed value properties.
type | 'day' or 'month' | 'day' | for select month , set type as 'month'.
multiselect | boolean | false | enable multiselect mode.
range | boolean | false | enable range mode.
prevYears | number | 10 | numeber of years that can select before this year.
nextYears | number | 20 | numeber of years that can select after this year.
limits | array of objects | optional | set dates disabled.
jalali | boolean | false | set datepicker as persian datepicker(برای تقویم فارسی کافیست این پروپرتی را تنظیم کنید)
icon | html or jsx | optional | use icon in datepicker button.
className | 'string' | optional | custom className of datepicker.
id | 'string' | optional | id of datepicker.
style | css object | optional | css style of datepicker button.
caret | boolean or html or jsx | true (default caret) | set caret icon of datepicker button.
onClear | function | optional | place clear button in bottom of datepicker. user can call onClear function by click on clear button.
size | number | 180 | set size of datepicker
placeHolder | 'string' | 'Select Date' in gregorian mode and 'انتخاب تاریخ' in jalali mode | show text on button when value is false or undefined
theme | array of 2 color string | ['dodgerblue','#ffffff'] | set theme color of datepicker by define 2 color
disabled | boolean | false | make date picker disabled. block actions.


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
        onChange={(obj)=>{
          this.setState({date:obj.dateString})
        }}
      />
    )
  }
}

```
- ##### onChange props get obj as parameter. see obj json:
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
        jalali={true}
        value={date}
        onChange={(obj)=>{
          this.setState({date:obj.dateString})
        }}
      />
    )
  }
}

```
- ##### obj:
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
    "georgian": [
        2021,
        5,
        10
    ],
    "todayGeorgian": [
        2021,
        12,
        14
    ],
    "weekDayGeorgian": "MONDAY",
    "monthStringGeorgian": "FEBRUARY"
}
```
![alt text](/images/2.jpg)
# type
```javascript
<GAH
  ...
  type='month'
  ...
/>
```

![alt text](/images/16.jpg)
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
```javascript
import React,{Component} from "react";
import GAH from 'gah-datepicker';
export default class App extends Component{
  state={
    values:['2021/12/1','2021/12/2','20211/12/6','2021/12/20']
  };
  render(){ 
    let {values} = this.state; 
    return (
      <GAH
        multiselect={true}
        values={values}
        onChange={(values)=>this.setState({values})} 
      />
    )
  }
}

```

![alt text](/images/4.gif)
# range
- ##### for range mode set range = true
- ##### range mode get start and end props and will render 2 datepicker
- ##### start and end can get all props exept multiselect prop
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
        range={true}
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

# limits
- ##### make dates disabled
- ##### in this example, '2020/1/1' will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'equal',date:'2020/1/1'}
  ]}
  ...
/>
```
![alt text](/images/15.jpg)
- ##### in this example all dates before '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'less',date:'2020/2/20'}
  ]}
  ...
/>
```
![alt text](/images/12.jpg)

- ##### in this example all dates after '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'greater',date:'2020/2/20'}
  ]}
  ...
/>
```
![alt text](/images/13.jpg)

- ##### in this example all dates between '2020/2/10' and '2020/2/20' will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'between',startDate:'2020/2/10',endDate:'2020/2/20'}
  ]}
  ...
/>
```
![alt text](/images/14.jpg)

- ##### in this example all fridays will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'weekDay',weekDay:7}
  ]}
  ...
/>
```
- ##### in this example all fridays in 2020 year will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'weekDay',weekDay:7,year:2020}
  ]}
  ...
/>
```
- ##### in this example fridays in 2020/6 will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'weekDay',weekDay:7,year:2020,month:6}
  ]}
  ...
/>
```
- ##### in this example all fridays in all years in june will be disabled.
```javascript
<GAH
  ...
  limits={[
    {type:'weekDay',weekDay:7,month:6}
  ]}
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

