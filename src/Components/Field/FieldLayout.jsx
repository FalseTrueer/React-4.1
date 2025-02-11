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
	checkWin,
	buttonClick
}) {


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
	checkWin: PropTypes.func.isRequired,
	buttonClick: PropTypes.func.isRequired,
};
