import { useFormContext } from 'react-hook-form';
import styles from './LanguagesBlock.module.css';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';

function LanguagesBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='LANGUAGES' />
			<div className={styles.languagesContent}>
				<textarea {...register('languages')} spellCheck={false} />
			</div>
		</div>
	);
}

export default LanguagesBlock;
