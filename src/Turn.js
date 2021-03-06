import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Turn.scss';

class Turn extends Component {
	render() {
		const player = this.props.player;

		return (
			<div className="turn">
				<div id="turn-icon-x" className={`turn-icon ${player === 'x' ? 'is-active' : ''}`}>
					X
				</div>
				<div id="turn-icon-o" className={`turn-icon ${player === 'o' ? 'is-active' : ''}`}>
					O
				</div>
				<div id="turn-toggle" className={`turn-toggle ${player === 'x' ? 'toggle-x' : 'toggle-o'}`} />
			</div>
		);
	}
}

Turn.propTypes = {
	player : PropTypes.oneOf([
		'x',
		'o'
	]).isRequired
};

export default Turn;
