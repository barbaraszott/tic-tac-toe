import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';
import Square from './Square';

class Board extends Component {
	renderSquare = (i) => {
		let boxWinStyle;

		if (this.props.isFinished && this.props.winner && this.props.winningLine.includes(i)) {
			boxWinStyle = { backgroundColor: 'yellow' };
		}

		const value = this.props.moves[i];

		return (
			<Square
				id={i}
				onClick={this.props.onSquareClick}
				isFinished={this.props.isFinished}
				style={boxWinStyle}
				value={value}
			/>
		);
	};

	render() {
		return (
			<React.Fragment>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</React.Fragment>
		);
	}
}

Board.propTypes = {
	onSquareClick : PropTypes.func,
	isFinished    : PropTypes.bool,
	winningLine   : PropTypes.array,
	moves         : PropTypes.object,
	winner        : PropTypes.string
};

export default Board;
