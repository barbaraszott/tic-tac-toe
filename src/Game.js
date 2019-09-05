import React from 'react';
import './Game.scss';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game       : new Array(9).fill(null),
			player     : null,
			isFinished : false
		};
	}

	//choose randomly first player
	chooseFirstPlayer = () => {
		const first = Math.round(Math.random()) === 0 ? 'x' : 'o';

		this.setState({
			player : first
		});
	};

	componentDidMount = () => {
		this.chooseFirstPlayer();
	};

	render() {
		return (
			<div className="game">
				<h1>Tic Tac Toe</h1>
				<h2>CurrentPlayer</h2>
				<span>{this.state.player}</span>
			</div>
		);
	}
}

export default Game;
