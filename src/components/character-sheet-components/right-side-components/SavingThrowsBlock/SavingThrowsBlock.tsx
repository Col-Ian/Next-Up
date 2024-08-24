import { useContext, useEffect, useRef } from 'react';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './SavingThrowsBlock.module.css';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { useParams } from 'react-router-dom';
import { classList } from '../../../../data/class-information/classList';
import { getValue } from '../../../../utils/getValue';
import {
	badSaveBonus,
	goodSaveBonus,
} from '../../../../data/savingThrowValuesPerLevel';
import { GetModifier } from '../../../../utils/GetModifier';
import { useFormContext } from 'react-hook-form';

function SavingThrowsBlock() {
	const { characterID } = useParams();

	const {
		characterInfoObject,
		dexterityAbility,
		constitutionAbility,
		wisdomAbility,
		savingThrowMisc,
	} = useContext(CharacterSheetContext);

	const { register } = useFormContext();

	const fortitudeBase = useRef<number>(0);
	const reflexBase = useRef<number>(0);
	const willBase = useRef<number>(0);

	useEffect(() => {
		fortitudeBase.current = getSavingThrowBonus('Fortitude');
		reflexBase.current = getSavingThrowBonus('Reflex');
		willBase.current = getSavingThrowBonus('Will');
	}, [characterID]);

	function getSavingThrowBonus(SavingThrow: string) {
		let savingThrowFound: boolean = false;

		let savingThrowBonus: number = 0;

		classList[
			characterInfoObject.chClass
		].classDefaults.goodSavingThrows.forEach((save) => {
			if (save === SavingThrow) {
				savingThrowBonus = goodSaveBonus[getValue(`Level${characterID}`)];
				savingThrowFound = true;
			}
		});

		if (!savingThrowFound) {
			classList[
				characterInfoObject.chClass
			].classDefaults.badSavingThrows.forEach((save) => {
				if (save === SavingThrow) {
					savingThrowBonus = badSaveBonus[getValue(`Level${characterID}`)];
				}
			});
		}

		return savingThrowBonus;
	}

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='SAVING THROWS' />
			<div className={styles.savingThrowBlockContent}>
				<div className={styles.savingThrowTypeColumn}>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>FORTITUDE</div>
						<div className={styles.attributeAffecting}>(CONSTITUTION)</div>
					</div>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>REFLEX</div>
						<div className={styles.attributeAffecting}>(DEXTERITY)</div>
					</div>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>WILL</div>
						<div className={styles.attributeAffecting}>(WISDOM)</div>
					</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>TOTAL</div>
					<input
						type='number'
						value={
							fortitudeBase.current +
							GetModifier(constitutionAbility) +
							savingThrowMisc.fortitude
						}
						readOnly
					/>
					<input
						type='number'
						value={
							reflexBase.current +
							GetModifier(dexterityAbility) +
							savingThrowMisc.reflex
						}
						readOnly
					/>
					<input
						type='number'
						value={
							willBase.current +
							GetModifier(wisdomAbility) +
							savingThrowMisc.will
						}
						readOnly
					/>
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>=</div>
					<div className={styles.middle}>=</div>
					<div className={styles.bottom}>=</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>BASE SAVE</div>
					<input type='number' value={fortitudeBase.current} readOnly />
					<input type='number' value={reflexBase.current} readOnly />
					<input type='number' value={willBase.current} readOnly />
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>+</div>
					<div className={styles.middle}>+</div>
					<div className={styles.bottom}>+</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>ABILITY MOD</div>
					<input
						type='number'
						value={GetModifier(constitutionAbility)}
						readOnly
					/>
					<input type='number' value={GetModifier(dexterityAbility)} readOnly />
					<input type='number' value={GetModifier(wisdomAbility)} readOnly />
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>+</div>
					<div className={styles.middle}>+</div>
					<div className={styles.bottom}>+</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>MISC MOD</div>
					<input
						type='number'
						{...register('miscFortitude', { valueAsNumber: true })}
					/>
					<input
						type='number'
						{...register('miscReflex', { valueAsNumber: true })}
					/>
					<input
						type='number'
						{...register('miscWill', { valueAsNumber: true })}
					/>
				</div>
			</div>
		</div>
	);
}

export default SavingThrowsBlock;
