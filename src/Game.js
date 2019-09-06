import React from 'react';
import './Game.scss';
import Board from './Board';
import lines from './lines';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moves      : { x: [], o: [] },
			player     : null,
			isFinished : false,
			winner     : null
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
	};

	componentDidMount = () => {
		this.chooseFirstPlayer();
	};

	render() {
		return (
			<div className="game">
				<h1>Tic Tac Toe</h1>
				<h2>Current Player: {this.state.player}</h2>

				<div className="game-board">
					<Board />
				</div>
			</div>
		);
	}
}

export default Game;
