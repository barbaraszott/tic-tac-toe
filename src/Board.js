import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

function Square() {
	return <div className="square">{/* TO DO */}</div>;
}

class Board extends Component {
	renderSquare = (i) => <Square key={i} />;

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

Board.propTypes = {};

export default Board;
