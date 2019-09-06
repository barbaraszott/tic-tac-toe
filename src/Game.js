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
		const { player, moves } = this.state;
		moves[player].push(checkedBox);

		if (moves[player].length >= 3) {
			lines.forEach((line) => {
				if (line.every((box) => moves[player].includes(box))) {
					this.setState({
						isFinished  : true,
						winner      : this.state.player,
						winningLine : line
					});
					return;
				}
			});
		}

		if (!this.state.isFinished) {
			this.setState({
				moves,
				player : this.nextPlayer()
			});
		}
	};

	componentDidMount = () => {
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
			</div>
		);
	}
}

export default Game;
