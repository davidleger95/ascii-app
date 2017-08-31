import React from 'react';
import { shallow } from 'enzyme';
import CharInput from '../CharInput';

it('asserts label references input', () => {
  const component = shallow(<CharInput name='label' label="Label" />)
  const labelFor = component.find('label').prop('htmlFor')
  const inputName = component.find('input').prop('name')
  expect(labelFor).toEqual(inputName)
});
