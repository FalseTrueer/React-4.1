import { useState } from 'react';
import { GameLayout } from './GameLayout';

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	function handleClick() {
		setField(Array(9).fill(''));
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
	}

	const gameProps = {
		currentPlayer,
		isGameEnded,
		isDraw,
		field,
		setField,
		setIsGameEnded,
		setIsDraw,
		setCurrentPlayer,
		handleClick
	};

	return <GameLayout {...gameProps} />;
}
