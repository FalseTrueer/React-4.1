import { useState } from 'react';
import { GameLayout } from './GameLayout';

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const gameProps = {
		currentPlayer,
		isGameEnded,
		isDraw,
		field,
		setField,
		setIsGameEnded,
		setIsDraw,
		setCurrentPlayer,
	};

	return <GameLayout {...gameProps} />;
}
