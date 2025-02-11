import { FieldLayout } from './FieldLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export function Field({
	field,
	isGameEnded,
	currentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
}) {
	function checkWin(field, curPlayer) {
		return WIN_PATTERNS.some((pattern) => {
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
		<FieldLayout
			field={field}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setField={setField}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
			setCurrentPlayer={setCurrentPlayer}
			checkWin={checkWin}
			buttonClick={buttonClick}
		/>
	);
}
