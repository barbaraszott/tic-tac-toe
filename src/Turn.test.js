import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

it('renders without crashing', () => {
	shallow(<Turn player="x" />);
});

describe('Current player: X', () => {
	it('should have player X icon active', () => {
		const wrapper = shallow(<Turn player="x" />);
		const iconX = wrapper.find('#turn-icon-x');

		expect(iconX.hasClass('is-active')).toEqual(true);
	});

	it('should not have player O active', () => {
		const wrapper = shallow(<Turn player="x" />);
		const iconO = wrapper.find('#turn-icon-o');

		expect(iconO.hasClass('is-active')).toEqual(false);
	});

	it('should have toggle with class toggle-x', () => {
		const wrapper = shallow(<Turn player="x" />);
		const toggle = wrapper.find('#turn-toggle');

		expect(toggle.hasClass('toggle-x')).toEqual(true);
		expect(toggle.hasClass('toggle-o')).toEqual(false);
	});
});

describe('Current player: O', () => {
	it('should have player O icon active', () => {
		const wrapper = shallow(<Turn player="o" />);
		const iconO = wrapper.find('#turn-icon-o');

		expect(iconO.hasClass('is-active')).toEqual(true);
	});

	it('should not have player X icon active', () => {
		const wrapper = shallow(<Turn player="o" />);
		const iconX = wrapper.find('#turn-icon-x');

		expect(iconX.hasClass('is-active')).toEqual(false);
	});

	it('should have toggle with class toggle-o', () => {
		const wrapper = shallow(<Turn player="o" />);
		const toggle = wrapper.find('#turn-toggle');

		expect(toggle.hasClass('toggle-o')).toEqual(true);
		expect(toggle.hasClass('toggle-x')).toEqual(false);
	});
});
