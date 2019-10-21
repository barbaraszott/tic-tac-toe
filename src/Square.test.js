import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

const defaultProps = {
	id         : 0,
	onClick    : () => {},
	isFinished : false,
	style      : {},
	value      : ''
};

it('renders without crashing', () => {
	shallow(<Square {...defaultProps} />);
});

it('should have square icon with icon-x if value of the square is x', () => {
	const wrapper = shallow(<Square {...defaultProps} value="x" />);
	const squareIcon = wrapper.find('.square-icon');

	expect(squareIcon.hasClass('icon-x')).toEqual(true);
});

it('should have square icon with icon-o if value of the square i o', () => {
	const wrapper = shallow(<Square {...defaultProps} value="o" />);
	const squareIcon = wrapper.find('.square-icon');

	expect(squareIcon.hasClass('icon-o')).toEqual(true);
});

it('should fire onClick from props after clicking on square if game is not finished and square was not clicked before', () => {
	const mockOnClick = jest.fn();
	const wrapper = shallow(<Square {...defaultProps} onClick={mockOnClick} />);

	wrapper.find('.square').simulate('click');

	expect(mockOnClick).toHaveBeenCalled();
});

it('should not fire onClick from props after clicking on square if game is finished', () => {
	const mockOnClick = jest.fn();
	const wrapper = shallow(<Square {...defaultProps} isFinished={true} onClick={mockOnClick} />);

	wrapper.find('.square').simulate('click');

	expect(mockOnClick).not.toHaveBeenCalled();
});

it('should not fire onClick from props after clicking on square if square already has value', () => {
	const mockOnClick = jest.fn();
	const wrapper = shallow(<Square {...defaultProps} value="x" onClick={mockOnClick} />);

	wrapper.find('.square').simulate('click');

	expect(mockOnClick).not.toHaveBeenCalled();
});
