import React from 'react';
import './Game.scss';
import Board from './Board';
import lines from './lines';
import Turn from './Turn';
import Result from './Result';

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
	chooseFirstPlayer = () => (Math.round(Math.random()) === 0 ? 'x' : 'o');

	nextPlayer = () => (this.state.player === 'x' ? 'o' : 'x');

	makeMove = (checkedBox) => {
		const currentPlayer = this.state.player;

		const newState = {
			moves : { ...this.state.moves, [checkedBox]: currentPlayer }
		};

		// Check if current player is the winner
		lines.forEach((line) => {
			if (line.every((box) => newState.moves[box] === currentPlayer)) {
				newState.isFinished = true;
				newState.winner = currentPlayer;
				newState.winningLine = line;
			}
		});

		// If there is no winner and there already have been 9 moves - draw (game is finished with no winner)
		const isDraw = Object.keys(newState.moves).length === 9;
		if (isDraw) {
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
		this.setState({
			player : this.chooseFirstPlayer()
		});
	};

	resetGame = () => {
		this.setState({
			moves       : {},
			player      : this.chooseFirstPlayer(),
			isFinished  : false,
			winner      : null,
			winningLine : null
		});
	};

	render() {
		return (
			<div className="game">
				<h1>Tic Tac Toe</h1>

				{this.state.isFinished ? <Result winner={this.state.winner} /> : <Turn player={this.state.player} />}

				<div className="game-board">
					<Board
						onSquareClick={this.makeMove}
						isFinished={this.state.isFinished}
						winner={this.state.winner}
						winningLine={this.state.winningLine}
						moves={this.state.moves}
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
