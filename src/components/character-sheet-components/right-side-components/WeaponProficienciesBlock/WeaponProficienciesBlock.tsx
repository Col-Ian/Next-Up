import { useFormContext } from 'react-hook-form';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './WeaponProficienciesBlock.module.css';

function WeaponProficienciesBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='WEAPON PROFICIENCIES' />
			<div className={styles.weaponProficienciesContent}>
				<textarea {...register('weaponProficiencies')} spellCheck={false} />
			</div>
		</div>
	);
}

export default WeaponProficienciesBlock;
