import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedBy : null
		};
	}

	handleClick = () => {
		if (this.props.isFinished || this.state.checkedBy !== null) return;

		this.setState({
			checkedBy : this.props.player
		});

		this.props.onClick(this.props.id);
	};

	render() {
		return (
			<div className="square" onClick={this.handleClick} style={this.props.style}>
				{this.state.checkedBy}
			</div>
		);
	}
}

class Board extends Component {
	renderSquare = (i) => {
		let boxWinStyle;
		if (this.props.isFinished && this.props.winningLine.includes(i)) {
			boxWinStyle = { backgroundColor: 'yellow' };
		}
		return (
			<Square
				id={i}
				onClick={this.props.onSquareClick}
				player={this.props.player}
				isFinished={this.props.isFinished}
				style={boxWinStyle}
			/>
		);
	};

	render() {
		// const player = this.props.player;
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
	player        : PropTypes.string,
	isFinished    : PropTypes.bool,
	winningLine   : PropTypes.array
};

export default Board;
