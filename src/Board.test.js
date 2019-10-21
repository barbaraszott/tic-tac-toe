import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import renderer from 'react-test-renderer';

const defaultProps = {
	onSquareClick : () => {},
	isFinished    : false,
	winningLine   : [],
	moves         : {},
	winner        : null
};

it('should render without crashing', () => {
	shallow(<Board {...defaultProps} />);
});

it('renders correctly', () => {
	const tree = renderer.create(<Board {...defaultProps} />).toJSON();

	expect(tree).toMatchSnapshot();
});

it('renders correctly winning line [0, 3, 6]', () => {
	const component = shallow(
		<Board
			{...defaultProps}
			isFinished={true}
			winner="x"
			winningLine={[
				0,
				3,
				6
			]}
		/>
	);

	expect(component).toMatchSnapshot();
});

it('should not pass style to squares if there is no winner', () => {
	const component = shallow(<Board {...defaultProps} isFinished={true} />);

	expect(component).toMatchSnapshot();
});
