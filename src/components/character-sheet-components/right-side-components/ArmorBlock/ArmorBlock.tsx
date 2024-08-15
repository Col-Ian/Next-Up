import { useCallback, useContext, useEffect, useState } from 'react';
import SheetLabel from '../../labels/SheetLabel';
import styles from './ArmorBlock.module.css';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
import { useArmor } from '../../../../hooks/useArmor';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';

type FormValues = FieldValues & {
	name: ArmorType[];
};

// Dylan: Can't seem to get the armor equipped to update dynamically, only on refresh. Increasing the EAC/KAC values on the armor in its section should increase the bonuses and total in the Armor Class section.

function ArmorBlock() {
	const { armorEquipped, updateArmorEquipped } = useContext(
		CharacterSheetContext
	);

	// const { updateArmorEquipped } = useArmorClassBlock();

	const { armorArray, updateArmorArray, currentCharacterID } = useArmor();

	const { control, register, watch, reset } = useForm<FormValues>();

	const { fields, append, remove } = useFieldArray<FormValues, 'armors', 'id'>({
		control,
		name: 'armors',
		keyName: 'id',
	});

	const [showArray, setShowArray] = useState<boolean>(false);

	const [selectedRadioButton, setSelectedRadioButton] = useState<number>(0);

	useEffect(() => {
		let tempIndex = 0;
		armorArray.forEach((armor, index) => {
			if (armor.isEquipped) {
				tempIndex = index;
			}
		});
		setSelectedRadioButton(tempIndex);

		let defaultValues = {
			armors: armorArray,
		};
		reset({ ...defaultValues });
	}, [currentCharacterID, armorEquipped]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateArmorArray(data.armors);
			armorArray.forEach((armor) => {
				if (armor.isEquipped) {
					updateArmorEquipped(armor);
				}
			});
		});

		return () => subscription.unsubscribe();
	}, [watch, currentCharacterID]);

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

	// function handleEquip(index: number) {
	// 	let tempArray: ArmorType[] = armorArray;
	// 	tempArray[index].isEquipped = true;
	// 	tempArray.forEach((armor: ArmorType, i: number) => {
	// 		if (i != index) {
	// 			armor.isEquipped = false;
	// 		}
	// 	});
	// 	setSelectedRadioButton(index);
	// 	updateArmorArray(tempArray);
	// 	updateArmorEquipped(tempArray[index]);
	// }

	const handleEquip = useCallback(
		(index: number) => {
			{
				let tempArray: ArmorType[] = armorArray;
				tempArray[index].isEquipped = true;
				tempArray.forEach((armor: ArmorType, i: number) => {
					if (i != index) {
						armor.isEquipped = false;
					}
				});
				setSelectedRadioButton(index);
				updateArmorArray(tempArray);
				updateArmorEquipped(tempArray[index]);
			}
		},
		[currentCharacterID]
	);

	function isRadioSelected(value: string) {
		return `radio${selectedRadioButton}` === value ? true : false;
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
												// defaultValue={armor.armorName}
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
												// defaultValue={armor.armorType}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>LEVEL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorLevel`)}
												// defaultValue={armor.armorLevel}
											/>
										</div>
									</div>
									<div className={styles.bottomRow}>
										<div className={styles.inputDivEquip}>
											<div className={styles.inputLabel}>EQUIP</div>
											<input
												type='radio'
												className={styles.checkboxInput}
												value={`radio${index}`}
												checked={isRadioSelected(`radio${index}`)}
												onChange={() => handleEquip(index)}

												// {...register(`armors.${index}.isEquipped`)}
												// checked={armorArray[index].isEquipped ? true : false}
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
												// defaultValue={armor.armorEAC}
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
												// defaultValue={armor.armorKAC}
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
												// defaultValue={armor.maxDexBonus}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>PROFICIENCY</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`armors.${index}.armorProficiency`)}
												// defaultValue={armor.armorProficiency}
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
