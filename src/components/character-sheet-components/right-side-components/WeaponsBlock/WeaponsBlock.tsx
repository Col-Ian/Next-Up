import { useEffect, useState } from 'react';
import SheetLabel from '../../labels/SheetLabel';
import styles from './WeaponsBlock.module.css';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
import { useCurrentID } from '../../../../hooks/useCurrentID';
import { useWeapons } from '../../../../hooks/useWeapons';
import { useForm } from 'react-hook-form';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';

function WeaponsBlock() {
	const {
		weaponsArray,
		updateWeaponsArray,
		handleAddWeapon,
		handleDeleteWeapon,
	} = useWeapons();

	const { currentID } = useCurrentID();

	const { register, watch, reset } = useForm();

	const [showArray, setShowArray] = useState<boolean>(false);

	useEffect(() => {
		reset(weaponsArray);
	}, [currentID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateWeaponsArray(data.weapons);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentID]);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='WEAPONS' />
				{/* List will be too small to add a scroll. It looks weird. */}
				{showArray ? (
					<div
						className={styles.addAbilityButton}
						onClick={() => {
							handleAddWeapon();
						}}
					>
						<AddButtonLabel itemToAdd='WEAPON' />
					</div>
				) : null}
			</div>
			<div className={styles.weaponsBlockContent}>
				{showArray ? (
					<div className={styles.weaponsWrapper}>
						{weaponsArray.map((weapon: WeaponType, index: number) => {
							return (
								<div
									className={styles.individualWeapon}
									key={`${weapon.weaponName}${index}`}
								>
									<div
										className={styles.delete}
										onClick={() => {
											handleDeleteWeapon(index);
										}}
									>
										&#128465;
									</div>
									<div className={styles.topRow}>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>NAME</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponName`)}
												defaultValue={weapon.weaponName}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>TYPE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponType`)}
												defaultValue={weapon.weaponType}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>LEVEL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`weapons.${index}.weaponLevel`)}
												defaultValue={weapon.weaponLevel}
											/>
										</div>
									</div>
									<div className={styles.middleRow}>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>ATTACK ROLL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`weapons.${index}.weaponToHit`)}
												defaultValue={weapon.weaponToHit}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>DAMAGE ROLL</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponDamageRoll`)}
												defaultValue={weapon.weaponDamageRoll}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>DAMAGE TYPE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponDamageType`)}
												defaultValue={weapon.weaponDamageType}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>RANGE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponRange`)}
												defaultValue={weapon.weaponRange}
											/>
										</div>
									</div>
									<div className={styles.bottomRow}>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>CRITICAL</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponCritical`)}
												defaultValue={weapon.weaponCritical}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>AMMO</div>
											<input
												type='number'
												className={styles.ammoInput}
												{...register(`weapons.${index}.weaponAmmoTotal`)}
												defaultValue={weapon.weaponAmmoTotal}
											/>
											<div className={styles.inputLabel}>USAGE</div>
											<input
												type='number'
												className={styles.ammoInput}
												{...register(`weapons.${index}.weaponAmmoUsage`)}
												defaultValue={weapon.weaponAmmoUsage}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>PROFICIENCY</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponProficiency`)}
												defaultValue={weapon.weaponProficiency}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				) : null}

				<div
					className={styles.dropDownWrapper}
					onClick={() => setShowArray(!showArray)}
				>
					<ExpandComponent expanded={showArray} />
				</div>
			</div>
		</div>
	);
}

export default WeaponsBlock;
