/**
 * Created by kiran
 * Kiran Pariyar <kiranpariyar@lftechnology.com>
 * on 8/2/16.
 */

//Libraries
import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import expect from 'expect';

//Component
import DatePicker from '../src/DatePickerComponent';

function setup(params) {
  let props = {
    date: params,
    dateFormat: 'YYYY-MM-DD',
    onOfYear: 50,
    onChange: expect.createSpy,
  };

  let component = shallow(<DatePicker {...props} />);


  return {
    props: props,
    component: component
  }
}

describe('DatePickerComponent', ()=> {
  describe('should render', ()=> {
    it('select field for year, month and day', ()=> {
      let date = moment('2015-04-12');
      let {component} = setup(date);
      expect(component.find('select').length).toBe(3);
    });
  });

  describe('componentWillMount',()=>{
    it('should set initial state',()=>{
      let date = moment('2015-04-12');
      let {component} = setup(date);
      let expectedState = {
        noOfDay: 30,
        year: '2015',
        month: '4',
        day: '12',
        yearChanged: true,
        monthChanged: true,
        errorMessage: ''
      };
      expect(component.state()).toEqual(expectedState);
    });
  });

});