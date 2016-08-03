//React Dependencies
import React from 'react';

//Libraries
import moment from 'moment';

//Utils
import DatePickerUtil from './DatePickerUtil';

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.renderDay = this.renderDay.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
    this.renderYear = this.renderYear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.calculateDate = this.calculateDate.bind(this);
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
    this.setInitialDate = this.setInitialDate.bind(this);
    this.state = {
      noOfDay: 31,
      year: '0',
      month: '0',
      day: '0',
      yearChanged: false,
      monthChanged: false,
      errorMessage: ''
    };
  }

  componentWillMount() {
    this.setInitialDate(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    let date = nextProps.date;
    this.setInitialDate(date);
  }

  setInitialDate(date){
    if (date != null || date != undefined) {
      let year = date.format('YYYY');
      let month = date.format('M');
      let day = date.format('D');
      this.setState({
        noOfDay: DatePickerUtil.calculateDaysInMonth(year, month),
        year: year,
        month: month,
        day: day,
        yearChanged: true,
        monthChanged: true
      });
    }
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    switch (name) {
      case 'day':
        this.handleDayChange(value);
        break;

      case 'month':
        this.handleMonthChange(value);
        break;

      case 'year':
        this.handleYearChange(value);
        break;

      default:
        return;
    }
  }

  handleDayChange(value) {
    this.state.day = value;
    this.setState({day: this.state.day});
    this.calculateDate();
  }

  handleMonthChange(value) {
    this.state.month = value;
    this.setState({month: this.state.month});

    if (this.state.month != '0' && !this.state.yearChanged) {
      this.setState({monthChanged: true})
    } else if (this.state.month != '0' && this.state.yearChanged) {
      this.setState({monthChanged: true});
      this.state.noOfDay = DatePickerUtil.calculateDaysInMonth(this.state.year, this.state.month);

      if (this.state.noOfDay < this.state.day) {
        this.state.day = '0'
      }

      this.setState({noOfDay: this.state.noOfDay, day: this.state.day});
    } else if (this.state.month == '0') {
      this.setState({monthChanged: false});
    }

    this.calculateDate();
  }

  handleYearChange(value) {
    this.state.year = value;
    this.setState({year: this.state.year});

    if (this.state.year != '0' && !this.state.monthChanged) {
      this.setState({yearChanged: true})
    } else if (this.state.year != '0' && this.state.monthChanged) {
      this.setState({yearChanged: true});
      this.state.noOfDay = DatePickerUtil.calculateDaysInMonth(this.state.year, this.state.month);

      if (this.state.noOfDay < this.state.day) {
        this.state.day = '0'
      }

      this.setState({noOfDay: this.state.noOfDay, day: this.state.day});
    } else {
      this.setState({yearChanged: false})
    }

    this.calculateDate();
  }

  calculateDate() {
    if (this.state.day != '0' && this.state.month != '0' && this.state.year != '0') {
      let date = this.state.year + '-' + this.state.month + '-' + this.state.day;
      let formatedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
      if (formatedDate == 'Invalid date') {
        this.displayErrorMessage(formatedDate);
        this.props.onChange(null);
      } else {
        this.displayErrorMessage();
        this.props.onChange(moment(date, 'YYYY-MM-DD'));
      }
    } else {
      this.props.onChange(null);
      this.displayErrorMessage();
    }
  }

  displayErrorMessage(error) {
    if(error){
      this.state.errorMessage = 'The date is invalid. Please select a valid date.';
      this.setState({errorMessage: this.state.errorMessage});
    }else{
      this.state.errorMessage = '';
      this.setState({errorMessage: this.state.errorMessage});
    }
  }

  renderDay(key) {
    return (
      <option key={key} value={key}>{key}</option >
    );
  }

  renderMonth() {
    return (
      <select className="form-control"
              name="month"
              onChange={this.handleChange}
              value={this.state.month}>
        <option value="0">month</option>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
    );
  }

  renderYear(key) {
    return (
      <option key={key} value={key}>{key}</option>
    );
  }

  render() {
    return (
      <div className="form-inline date">
        <div className="form-group">
          <select className="form-control"
                  name="year"
                  onChange={this.handleChange}
                  value={this.state.year}>
            <option value="0">year</option>
            {DatePickerUtil.generateYear(new Date().getFullYear(), this.props.noOfYear).map(this.renderYear)}
          </select>
        </div>

        <div className="form-group">
          {this.renderMonth()}
        </div>

        <div className="form-group">
          <select className="form-control"
                  name="day"
                  onChange={this.handleChange}
                  value={this.state.day}>
            <option value="0">day</option>
            {DatePickerUtil.generateDay(this.state.noOfDay).map(this.renderDay)}
          </select>
        </div>
        <span className="date-error">{this.state.errorMessage}</span>
      </div>
    );
  }
}

DatePickerComponent.defaultProps = {
  dateFormat: 'YYYY-MM-DD',
  noOfYear: 70
};

DatePickerComponent.propTypes = {
  dateFormat: React.PropTypes.string,
  noOfYear: React.PropTypes.number,
  date: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default DatePickerComponent;
