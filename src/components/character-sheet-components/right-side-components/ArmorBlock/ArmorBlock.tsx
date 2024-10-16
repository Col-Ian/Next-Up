import { useContext, useEffect, useState } from 'react';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './ArmorBlock.module.css';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
// import { useArmor } from '../../../../hooks/useArmor';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import AddButtonLabel from '../../AddButtonLabel/AddButtonLabel';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';

type FormValues = FieldValues & {
	name: ArmorType[];
};

// Dylan: Can't seem to get the armor equipped to update dynamically, only on refresh. Increasing the EAC/KAC values on the armor in its section should increase the bonuses and total in the Armor Class section.

function ArmorBlock() {
	const {
		armorEquipped,
		updateArmorEquipped,
		armorArray,
		updateArmorArray,
		currentCharacterIDAC,
	} = useContext(CharacterSheetContext);

	// const { updateArmorEquipped } = useArmorClassBlock();

	// const { armorArray, updateArmorArray, currentCharacterIDAC } = useArmor();

	const { control, register, watch, reset } = useForm<FormValues>();

	const { fields, append, remove } = useFieldArray<FormValues, 'armors', 'id'>({
		control,
		name: 'armors',
		keyName: 'id',
	});

	const [showArray, setShowArray] = useState<boolean>(false);

	useEffect(() => {
		let defaultValues = {
			armors: armorArray,
		};
		reset({ ...defaultValues });
	}, [currentCharacterIDAC, armorEquipped]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateArmorArray(data.armors);
		});

		return () => subscription.unsubscribe();
	}, [watch, currentCharacterIDAC]);

	function handleRemove(index: number) {
		if (armorArray.length > 1) {
			remove(index);
		} else {
			remove(index);
			append({
				armorName: '',
				armorType: '',
				armorProficiency: '',
				armorLevel: 0,
				armorEAC: 0,
				armorKAC: 0,
				maxDexBonus: 0,
				isEquipped: false,
			});
		}
	}

	function handleEquip(index: number) {
		let tempArmorArray: ArmorType[] = armorArray;

		// Set the armor to be opposite of what it's stored as.
		tempArmorArray.forEach((armor, i) => {
			if (i === index) {
				armor.isEquipped = !armor.isEquipped;
			} else {
				armor.isEquipped = false;
			}
		});

		const armorToEquip: ArmorType = tempArmorArray[index];

		let tempArmorEquipped: ArmorType = {
			armorName: '',
			armorType: '',
			armorProficiency: '',
			armorLevel: 0,
			armorEAC: 0,
			armorKAC: 0,
			maxDexBonus: 0,
			isEquipped: false,
		};

		if (armorToEquip.isEquipped) {
			tempArmorEquipped = armorToEquip;
		}

		updateArmorArray(tempArmorArray);
		updateArmorEquipped(tempArmorEquipped);
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ARMOR' />
				{showArray ? (
					<div
						className={styles.addAbilityButton}
						onClick={() => {
							append({
								armorName: '',
								armorType: '',
								armorProficiency: '',
								armorLevel: 0,
								armorEAC: 0,
								armorKAC: 0,
								maxDexBonus: 0,
								isEquipped: false,
							});
						}}
					>
						<AddButtonLabel itemToAdd='ARMOR' />
					</div>
				) : null}
			</div>
			<div className={styles.armorBlockContent}>
				{showArray ? (
					<div className={styles.armorWrapper}>
						{fields.map((armor, index) => {
							return (
								<div className={styles.individualArmor} key={armor.id}>
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
												{...register(`armors.${index}.armorName`)}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>TYPE</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`armors.${index}.armorType`)}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>LEVEL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorLevel`)}
											/>
										</div>
									</div>
									<div className={styles.bottomRow}>
										<div className={styles.inputDivEquip}>
											<div className={styles.inputLabel}>EQUIP</div>
											<input
												type='checkbox'
												className={styles.checkboxInput}
												{...register(`armors.${index}.isEquipped`)}
												onClick={() => handleEquip(index)}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>EAC</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorEAC`, {
													valueAsNumber: true,
												})}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>KAC</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorKAC`, {
													valueAsNumber: true,
												})}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>MAX DEX BONUS</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.maxDexBonus`, {
													valueAsNumber: true,
												})}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>PROFICIENCY</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`armors.${index}.armorProficiency`)}
											/>
										</div>
									</div>
								</div>
							);
						})}{' '}
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

export default ArmorBlock;
