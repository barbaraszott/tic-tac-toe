import React from 'react';
import './Game.scss';
import Board from './Board';
import lines from './lines';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moves       : {},
			player      : null,
			isFinished  : false,
			winner      : null,
			winningLine : null
		};
	}

	//choose randomly first player
	chooseFirstPlayer = () => {
		const first = Math.round(Math.random()) === 0 ? 'x' : 'o';

		this.setState({
			player : first
		});
	};

	nextPlayer = () => {
		const next = this.state.player === 'x' ? 'o' : 'x';

		return next;
	};

	makeMove = (checkedBox) => {
		const currentPlayer = this.state.player;

		const newState = {
			moves : { ...this.state.moves, [checkedBox]: currentPlayer }
		};

		lines.forEach((line) => {
			if (line.every((box) => newState.moves[box] === currentPlayer)) {
				newState.isFinished = true;
				newState.winner = currentPlayer;
				newState.winningLine = line;
			}
		});

		if (Object.keys(newState.moves).length === 9) {
			newState.isFinished = true;
		}

		this.setState({
			moves       : newState.moves,
			isFinished  : newState.isFinished,
			winner      : newState.winner,
			winningLine : newState.winningLine,
			player      : this.nextPlayer()
		});
	};

	componentDidMount = () => {
		this.chooseFirstPlayer();
	};

	resetGame = () => {
		this.setState({
			moves       : {},
			// player      : null,
			isFinished  : false,
			winner      : null,
			winningLine : null
		});

		//TODO: change this so on componentDidMount setState is run only once
		this.chooseFirstPlayer();
	};

	render() {
		return (
			<div className="game">
				<h1>Tic Tac Toe</h1>
				{!this.state.isFinished ? <h2>Current Player: {this.state.player}</h2> : <h2>Winner: {this.state.winner}</h2>}

				<div className="game-board">
					<Board
						onSquareClick={this.makeMove}
						player={this.state.player}
						isFinished={this.state.isFinished}
						winningLine={this.state.winningLine}
					/>
				</div>
				<button className="reset" onClick={this.resetGame}>
					Play again!
				</button>
			</div>
		);
	}
}

export default Game;
