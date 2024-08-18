import { Dispatch, SetStateAction } from 'react';
import styles from './BackButton.module.css';

type BackButtonTypes = {
	arrayPosition: number;
	setArrayPosition: Dispatch<SetStateAction<number>>;
};

function BackButton({ arrayPosition, setArrayPosition }: BackButtonTypes) {
	function handleBack() {
		setArrayPosition(arrayPosition - 1);
	}

	return (
		<div className={styles.parentDiv}>
			{arrayPosition > 0 ? (
				<div className={styles.backButton} onClick={handleBack}>
					Back
				</div>
			) : (
				<div className={styles.backButtonFalse}>Back</div>
			)}
		</div>
	);
}

export default BackButton;
