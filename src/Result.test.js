import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';
import playerColors from './playerColors';

it('renders game with a draw when there is no winner', () => {
	const wrapper = shallow(<Result winner={null} />);
	const message = "It's a draw!";

	expect(wrapper.contains(message)).toEqual(true);
});

it('should show winner X', () => {
	const wrapper = shallow(<Result winner="x" />);
	const winnerShown = wrapper.find('.winner').text();

	expect(winnerShown).toEqual('x');
});

it('should show winner O', () => {
	const wrapper = shallow(<Result winner="o" />);
	const winnerShown = wrapper.find('.winner').text();

	expect(winnerShown).toEqual('o');
});

it('should have proper color if X is winner', () => {
	const wrapper = shallow(<Result winner="x" />);
	const colorX = playerColors.x;
	const winnerShownColor = wrapper.find('.winner').props().style.color;

	expect(winnerShownColor).toEqual(colorX);
});

it('should have proper color if O is winner', () => {
	const wrapper = shallow(<Result winner="o" />);
	const colorO = playerColors.o;
	const winnerShownColor = wrapper.find('.winner').props().style.color;

	expect(winnerShownColor).toEqual(colorO);
});
