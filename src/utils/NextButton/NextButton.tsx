import { Dispatch, SetStateAction } from 'react';
import styles from './NextButton.module.css';

type NextButtonTypes = {
	message: string;
	arrayToCycle: any[];
	arrayPosition: number;
	setArrayPosition: Dispatch<SetStateAction<number>>;
	condition: boolean;
	functionToRun?: () => void;
};

function NextButton({
	message,
	arrayToCycle,
	arrayPosition,
	setArrayPosition,
	condition,
	functionToRun,
}: NextButtonTypes) {
	function handleNext() {
		if (functionToRun) {
			functionToRun();
		}
		if (arrayPosition < arrayToCycle.length - 1) {
			setArrayPosition(arrayPosition + 1);
		}
	}

	return (
		<div className={styles.parentDiv}>
			{condition ? (
				<div className={styles.nextButton} onClick={handleNext}>
					{message}
				</div>
			) : (
				<div className={styles.nextButtonFalse}>{message}</div>
			)}
		</div>
	);
}

export default NextButton;
