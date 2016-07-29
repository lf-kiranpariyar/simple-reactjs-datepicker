/**
 * Created by kiran
 * Kiran Pariyar <kiranpariyar@lftechnology.com>
 * on 7/28/16.
 */

//React dependencies
import React from 'react';

//Component
import DatePickerComponent from './date-picker/DatePickerComponent';

class DatePickerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
  }

  handleDateChange(date) {
    console.log('date', date);
  }

  render() {
    return (
      <DatePickerComponent date={this.state.date}
                           onChange={this.handleDateChange}/>
    );
  }
}

export default DatePickerExample;
