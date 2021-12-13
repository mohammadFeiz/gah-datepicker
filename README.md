# gah-datepicker
### install
```javascript
npm i gah-datepicker
```
## Basic
```javascript
import React,{Component} from "react";
import GAH from './gah-datepicker';
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
#### onChange props get obj as parameter. see obj json:
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
    "dateString": "2020.2.20",
    "fullDateString": "2020.2.20 THURSDAY",
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

## jalali
```javascript
import React,{Component} from "react";
import GAH from './gah-datepicker';
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

## use any splitter
```javascript
<GAH
  ...
  value='2020.2.20'
  ...
/>
```
![alt text](/images/3.jpg)

## without value
```javascript
<GAH
  ...
  value={false}
  ...
/>
```
![alt text](/images/4.jpg)
## placeHolder
```javascript
<GAH
  value={false}
  placeHolder='Select Any Date'
/>
```
![alt text](/images/5.jpg)
## icon
```javascript
import React,{Component} from "react";
import GAH from './gah-datepicker';
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


