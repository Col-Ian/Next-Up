import { useFormContext } from 'react-hook-form';
import styles from './ExperienceBlock.module.css';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';

function ExperienceBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='EXPERIENCE POINTS' />
			<div className={styles.experienceBlockContent}>
				<div className={styles.inputDiv}>
					<div className={styles.inputLabel}>
						<div>XP</div>
						<div>EARNED</div>
					</div>
					<input type='text' {...register('xpEarned')} />
				</div>
				<div className={styles.inputDiv}>
					<div className={styles.inputLabel}>
						<div>NEXT</div>
						<div>LEVEL</div>
					</div>
					<input type='text' {...register('nextLevel')} />
				</div>
			</div>
		</div>
	);
}

export default ExperienceBlock;
