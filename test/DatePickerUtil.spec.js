/**
 * Created by kiran
 * Kiran Pariyar <kiranpariyar@lftechnology.com>
 * on 8/2/16.
 */

//Libraries
import expect from 'expect';

import DatePickerUtil from '../src/DatePickerUtil';

describe('DatePickerUtil', ()=> {
  describe('generateYear', ()=> {
    it('should generate array of year, when current year and no of year passed', ()=> {
      expect(DatePickerUtil.generateYear(2016, 3)).toEqual([2016, 2015, 2014]);
      expect(DatePickerUtil.generateYear(2015, 5)).toEqual([2015, 2014, 2013, 2012, 2011]);
    });
  });

  describe('generateDay', ()=> {
    it('should generate array of day, when no of day passed', ()=> {
      expect(DatePickerUtil.generateDay(5)).toEqual([1, 2, 3, 4, 5]);
      expect(DatePickerUtil.generateDay(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('calculateDaysInMonth', ()=> {
    it('should calculate no of days in month when year and month passed', ()=> {
      expect(DatePickerUtil.calculateDaysInMonth(2014, 2)).toEqual(28);
      expect(DatePickerUtil.calculateDaysInMonth(2015, 4)).toEqual(30);
      expect(DatePickerUtil.calculateDaysInMonth(1993, 10)).toEqual(31);
    });
  });
});