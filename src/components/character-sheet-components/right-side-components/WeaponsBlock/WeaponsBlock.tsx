import { useEffect, useState } from 'react';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './WeaponsBlock.module.css';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
import { useWeapons } from '../../../../hooks/useWeapons';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import AddButtonLabel from '../../AddButtonLabel/AddButtonLabel';

type FormValues = FieldValues & {
	name: WeaponType[];
};

function WeaponsBlock() {
	const { weaponsArray, updateWeaponsArray, currentCharacterID } = useWeapons();

	const { control, register, watch, reset } = useForm<FormValues>();

	const { fields, append, remove } = useFieldArray<FormValues, 'weapons', 'id'>(
		{
			control,
			name: 'weapons',
			keyName: 'id',
		}
	);

	const [showArray, setShowArray] = useState<boolean>(false);

	useEffect(() => {
		let defaultValues = {
			weapons: weaponsArray,
		};
		reset({ ...defaultValues });
	}, [currentCharacterID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateWeaponsArray(data.weapons);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentCharacterID]);

	function handleRemove(index: number) {
		if (weaponsArray.length > 1) {
			remove(index);
		} else {
			remove(index);
			append({
				weaponName: '',
				weaponType: '',
				weaponRange: '',
				weaponCritical: '',
				weaponAmmoTotal: 0,
				weaponAmmoUsage: 0,
				weaponProficiency: '',
				weaponLevel: 0,
				weaponToHit: 0,
				weaponDamageType: '',
				weaponDamageRoll: '',
			});
		}
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='WEAPONS' />
				{showArray ? (
					<div
						className={styles.addAbilityButton}
						onClick={() => {
							append({
								weaponName: '',
								weaponType: '',
								weaponRange: '',
								weaponCritical: '',
								weaponAmmoTotal: 0,
								weaponAmmoUsage: 0,
								weaponProficiency: '',
								weaponLevel: 0,
								weaponToHit: 0,
								weaponDamageType: '',
								weaponDamageRoll: '',
							});
						}}
					>
						<AddButtonLabel itemToAdd='WEAPON' />
					</div>
				) : null}
			</div>
			<div className={styles.weaponsBlockContent}>
				{showArray ? (
					<div className={styles.weaponsWrapper}>
						{fields.map((weapon, index) => {
							return (
								<div className={styles.individualWeapon} key={weapon.id}>
									<div
										className={styles.delete}
										onClick={() => {
											handleRemove(index);
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
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>LEVEL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`weapons.${index}.weaponLevel`)}
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
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>DAMAGE ROLL</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponDamageRoll`)}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>DAMAGE TYPE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponDamageType`)}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>RANGE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`weapons.${index}.weaponRange`)}
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
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>AMMO</div>
											<input
												type='number'
												className={styles.ammoInput}
												{...register(`weapons.${index}.weaponAmmoTotal`)}
											/>
											<div className={styles.inputLabel}>USAGE</div>
											<input
												type='number'
												className={styles.ammoInput}
												{...register(`weapons.${index}.weaponAmmoUsage`)}
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
