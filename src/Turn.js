import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Turn.scss';

class Turn extends Component {
	render() {
		const player = this.props.player;

		return (
			<div className="turn">
				<div className={`turn-icon ${player === 'x' ? 'is-active' : ''}`}>X</div>
				<div className={`turn-icon ${player === 'o' ? 'is-active' : ''}`}>O</div>
				<div className={`turn-toggle ${player === 'x' ? 'toggle-x' : 'toggle-o'}`} />
			</div>
		);
	}
}

Turn.propTypes = {
	player : PropTypes.string
};

export default Turn;
