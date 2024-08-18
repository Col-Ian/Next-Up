import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './ArmorProficienciesBlock.module.css';
import { useFormContext } from 'react-hook-form';

function ArmorProficienciesBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='ARMOR PROFICIENCIES' />
			<div className={styles.armorProficienciesContent}>
				<textarea {...register('armorProficiencies')} spellCheck={false} />
			</div>
		</div>
	);
}

export default ArmorProficienciesBlock;
