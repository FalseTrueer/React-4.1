import React, { useState } from 'react';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './Game.module.css';
import PropTypes from 'prop-types';

export function GameLayout({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
}) {
	function handleClick() {
		setField(Array(9).fill(''));
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
	}

	return (
		<div className={styles.gameField}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			></Information>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setCurrentPlayer={setCurrentPlayer}
			></Field>
			<button className={styles.resetButton} onClick={handleClick}>
				Начать заново
			</button>
		</div>
	);
}

GameLayout.PropTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	setField: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
};
