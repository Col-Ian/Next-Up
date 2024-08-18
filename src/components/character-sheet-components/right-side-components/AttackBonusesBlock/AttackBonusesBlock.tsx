import { useContext } from 'react';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './AttackBonusesBlock.module.css';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { getValue } from '../../../../utils/getValue';
import { useParams } from 'react-router-dom';
import { classList } from '../../../../data/class-information/classList';
import { GetModifier } from '../../../../utils/GetModifier';
import { useFormContext } from 'react-hook-form';

function AttackBonusesBlock() {
	const { characterID } = useParams();

	const {
		characterInfoObject,
		strengthAbility,
		dexterityAbility,
		attackBonuses,
	} = useContext(CharacterSheetContext);

	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<div className={styles.header}>
				<SheetLabel sheetLabelText='ATTACK BONUSES' />
				<div className={styles.rightHeader}>
					<div className={styles.rightHeaderText}>
						<div>Base Attack Bonus</div>
						<div>(BAB)</div>
					</div>
					<input
						type='number'
						value={Math.floor(
							getValue(`Level${characterID}`) *
								classList[characterInfoObject.chClass].classDefaults
									.babAdvancement
						)}
						readOnly
					/>
				</div>
			</div>
			<div className={styles.attackBonusesBlockContent}>
				<div className={styles.attackRow}>
					<div className={styles.attackType}>MELEE ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input
							type='number'
							value={
								Math.floor(
									getValue(`Level${characterID}`) *
										classList[characterInfoObject.chClass].classDefaults
											.babAdvancement
								) +
								GetModifier(strengthAbility) +
								attackBonuses.melee
							}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input
							type='number'
							value={Math.floor(
								getValue(`Level${characterID}`) *
									classList[characterInfoObject.chClass].classDefaults
										.babAdvancement
							)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>STR MOD</div>
						<input
							type='number'
							value={GetModifier(strengthAbility)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input
							{...register('meleeMisc', { valueAsNumber: true })}
							type='number'
						/>
					</div>
				</div>
				<div className={styles.borderLine} />
				<div className={styles.attackRow}>
					<div className={styles.attackType}>RANGED ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input
							type='number'
							value={
								Math.floor(
									getValue(`Level${characterID}`) *
										classList[characterInfoObject.chClass].classDefaults
											.babAdvancement
								) +
								GetModifier(dexterityAbility) +
								attackBonuses.ranged
							}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input
							type='number'
							value={Math.floor(
								getValue(`Level${characterID}`) *
									classList[characterInfoObject.chClass].classDefaults
										.babAdvancement
							)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>DEX MOD</div>
						<input
							type='number'
							value={GetModifier(dexterityAbility)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input
							{...register('rangedMisc', { valueAsNumber: true })}
							type='number'
						/>
					</div>
				</div>
				<div className={styles.borderLine} />
				<div className={styles.attackRow}>
					<div className={styles.attackType}>THROWN ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input
							type='number'
							value={
								Math.floor(
									getValue(`Level${characterID}`) *
										classList[characterInfoObject.chClass].classDefaults
											.babAdvancement
								) +
								GetModifier(strengthAbility) +
								attackBonuses.thrown
							}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input
							type='number'
							value={Math.floor(
								getValue(`Level${characterID}`) *
									classList[characterInfoObject.chClass].classDefaults
										.babAdvancement
							)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>STR MOD</div>
						<input
							type='number'
							value={GetModifier(strengthAbility)}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input
							{...register('thrownMisc', { valueAsNumber: true })}
							type='number'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AttackBonusesBlock;
