import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Square.scss';

class Square extends Component {
	handleClick = () => {
		if (this.props.isFinished || this.props.value) return;

		this.props.onClick(this.props.id);
	};

	render() {
		const icon = !this.props.value ? '' : this.props.value === 'x' ? 'icon-x' : 'icon-o';

		return (
			<div className="square" onClick={this.handleClick} style={this.props.style}>
				<div className={`square-icon ${icon}`} />
			</div>
		);
	}
}

Square.propTypes = {
	id         : PropTypes.number,
	onClick    : PropTypes.func,
	isFinished : PropTypes.bool,
	style      : PropTypes.object,
	value      : PropTypes.string
};

export default Square;
