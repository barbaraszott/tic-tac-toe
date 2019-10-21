import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import Result from './Result';
import Turn from './Turn';

it('renders without crashing', () => {
	shallow(<Game />);
});

it('renders game title', () => {
	const wrapper = shallow(<Game />);
	const title = <h1>Tic Tac Toe</h1>;
	expect(wrapper.contains(title)).toEqual(true);
});

describe('Game is finished', () => {
	const wrapper = shallow(<Game />);

	wrapper.setState({
		isFinished : true
	});

	it('should render Result component', () => {
		expect(wrapper.find(Result).exists()).toEqual(true);
	});

	it('should not render Turn component', () => {
		expect(wrapper.find(Turn).exists()).toEqual(false);
	});

	it('should have game-reset button without class reset-disabled', () => {
		const resetBtn = wrapper.find('.game-reset');

		expect(resetBtn.hasClass('reset-disabled')).toEqual(false);
	});
});

describe('Game is not finished', () => {
	const wrapper = shallow(<Game />);

	wrapper.setState({
		isFinished : false
	});

	it('should render Turn component', () => {
		expect(wrapper.find(Turn).exists()).toEqual(true);
	});

	it('should not render Result component', () => {
		expect(wrapper.find(Result).exists()).toEqual(false);
	});

	it('should have game-reset button with class reset-disabled', () => {
		const resetBtn = wrapper.find('.game-reset');

		expect(resetBtn.hasClass('reset-disabled')).toEqual(true);
	});
});
