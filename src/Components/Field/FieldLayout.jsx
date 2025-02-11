import styles from './Field.module.css';
import PropTypes from 'prop-types';

export function FieldLayout({
	field,
	isGameEnded,
	currentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
	winPatterns,
}) {
	function checkWin(field, curPlayer) {
		return winPatterns.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				field[a] === curPlayer && field[b] === curPlayer && field[c] === curPlayer
			);
		});
	}

	function buttonClick(ind) {
		if (field[ind] || isGameEnded) {
			return;
		}

		const newField = [...field];
		newField[ind] = currentPlayer;
		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true);
			return;
		}

		if (!newField.includes('')) {
			setIsDraw(true);
			return;
		}

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	}

	return (
		<ul className={styles.fieldUl}>
			{field.map((el, ind) => (
				<li key={ind} className={styles.fieldLi}>
					<button onClick={() => buttonClick(ind)}>{el}</button>
				</li>
			))}
		</ul>
	);
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	winPatterns: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};
