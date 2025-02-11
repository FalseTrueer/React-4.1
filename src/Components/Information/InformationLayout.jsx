import styles from './Information.module.css';
import PropTypes from 'prop-types';

export function InformationLayout({ isDraw, isGameEnded, currentPlayer }) {
	return (
		<h1 className={styles.h1Info}>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</h1>
	);
}

InformationLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
