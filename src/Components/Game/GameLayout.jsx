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
	handleClick
}) {

	return (
		<div className={styles.gameField}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setCurrentPlayer={setCurrentPlayer}
			/>
			<button className={styles.resetButton} onClick={handleClick}>
				Начать заново
			</button>
		</div>
	);
}

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
};
