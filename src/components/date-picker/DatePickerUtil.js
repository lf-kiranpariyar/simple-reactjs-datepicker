/**
 * Created by kiran
 * Kiran Pariyar <kiranpariyar@lftechnology.com>
 * on 7/22/16.
 */

class DatePickerUtil {

  static generateYear(currentYear, noOfYearToGenerate) {
    let years = [];
    for (let i = currentYear; i >= currentYear - noOfYearToGenerate; i--) {
      years.push(i);
    }
    return years;
  }

  static generateDay(noOfDayToGenerate) {
    let days = [];
    for (let i = 1; i <= noOfDayToGenerate; i++) {
      days.push(i);
    }
    return days;
  }

  static calculateDaysInMonth(year,month) {
    return new Date(year, month, 0).getDate();
  }
}

export default DatePickerUtil;
