import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

it('renders without crashing', () => {
	shallow(<Game />);
});

it('renders game title', () => {
	const wrapper = shallow(<Game />);
	const title = <h1>Tic Tac Toe</h1>;
	expect(wrapper.contains(title)).toEqual(true);
});
