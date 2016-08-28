# Simple ReactJS Datepicker
Simple three field select type react datepicker

## Installation

- The package can be installed via NPM :

```
npm install simple-reactjs-datepicker@1.0.7 --save
```
 note : version less than 1.0.7 are deprecated

## To build the **new** examples locally :
  
  - ``` git clone git@github.com:lf-kiranpariyar/simple-reactjs-datepicker.git ```
  - ``` npm install ```
  - ``` npm start ```

## Usage

You’ll need to install React and Moment.js separately.
 - ``` npm install --save moment ```

Below is a simple example on how to use the Datepicker in a React view.

```js
//React dependencies
import React from 'react';
import DatePickerComponent from 'simple-reactjs-datepicker'

//Libraries
import moment from 'moment';

class DatePickerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: {}
    };
  }

  handleDateChange(date) {
    console.log('date', date);
  }

  render() {
    return (
      <DatePickerComponent date={moment()}
                  onChange={this.handleDateChange} />
    );
  }
}

```

## Configuration

The most basic use of the DatePicker can be described with:

```js
<DatePickerComponent selected={this.state.date} onChange={this.handleChange} />
```

## PropTypes options

| Parameter | Type | Description |
|:---|:---|:---|
| date | `Object`, `required` | Current date in datepicker |
| onChange | `function`, `required` | Call back function for getting current date |
| noOfYear | `number`, `non-required` | Total number of year in datepicker |
| dateFormat | `String`, `non-required` | Date format of any |
