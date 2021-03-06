import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Result.scss';
import playerColors from './playerColors';

class Result extends Component {
	render() {
		const winner = this.props.winner;

		if (!winner) return <p className="result">It's a draw!</p>;

		const winnerColor = { color: winner === 'x' ? playerColors.x : playerColors.o };

		return (
			<p className="result">
				<span className="winner" style={winnerColor}>
					{winner}
				</span>{' '}
				win!
			</p>
		);
	}
}

Result.propTypes = {
	winner : PropTypes.string
};

export default Result;
