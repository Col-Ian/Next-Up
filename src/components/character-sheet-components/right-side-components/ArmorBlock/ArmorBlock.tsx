import { useEffect, useState } from 'react';
import SheetLabel from '../../labels/SheetLabel';
import styles from './ArmorBlock.module.css';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
import { useArmor } from '../../../../hooks/useArmor';
import { useCurrentID } from '../../../../hooks/useCurrentID';
import { useForm } from 'react-hook-form';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';

function ArmorBlock() {
	const { armorArray, updateArmorArray, handleAddArmor, handleDeleteArmor } =
		useArmor();

	const { currentID } = useCurrentID();

	const { register, watch, reset } = useForm();

	const [showArray, setShowArray] = useState<boolean>(false);

	useEffect(() => {
		reset(armorArray);
	}, [currentID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateArmorArray(data.armors);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentID, armorArray, updateArmorArray]);

	// Temp function to mimic what will be final
	function handleEquip(index: number) {
		let tempArray: ArmorType[] = armorArray;
		tempArray[index].isEquipped = !tempArray[index].isEquipped;
		tempArray.forEach((armor: ArmorType, i: number) => {
			if (i != index) {
				armor.isEquipped = false;
			}
		});
		updateArmorArray(tempArray);
	}
	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ARMOR' />
				{/* List will be too small to add a scroll. It looks weird. */}
				{showArray ? (
					<div
						className={styles.addAbilityButton}
						onClick={() => {
							handleAddArmor();
						}}
					>
						<AddButtonLabel itemToAdd='ARMOR' />
					</div>
				) : null}
			</div>
			<div className={styles.armorBlockContent}>
				{showArray ? (
					<div className={styles.armorWrapper}>
						{armorArray.map((armor: ArmorType, index: number) => {
							return (
								<div
									className={styles.individualArmor}
									key={`${armorArray[index].armorName}${index}`}
								>
									<div
										className={styles.delete}
										onClick={() => handleDeleteArmor(index)}
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
												defaultValue={armor.armorName}
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
												defaultValue={armor.armorType}
											/>
										</div>
										<div className={styles.verticalBar} />
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>LEVEL</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorLevel`)}
												defaultValue={armor.armorLevel}
											/>
										</div>
									</div>
									<div className={styles.bottomRow}>
										<div className={styles.inputDivEquip}>
											<div className={styles.inputLabel}>EQUIP</div>
											<input
												type='checkbox'
												className={styles.checkboxInput}
												onClick={() => handleEquip(index)}
												{...register(`armors.${index}.isEquipped`)}
												defaultChecked={armor.isEquipped ? true : false}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>EAC</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorEAC`)}
												defaultValue={armor.armorEAC}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>KAC</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.armorKAC`)}
												defaultValue={armor.armorKAC}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>MAX DEX BONUS</div>
											<input
												type='number'
												className={styles.numberInput}
												{...register(`armors.${index}.maxDexBonus`)}
												defaultValue={armor.maxDexBonus}
											/>
										</div>
										<div className={styles.inputDiv}>
											<div className={styles.inputLabel}>PROFICIENCY</div>
											<input
												type='text'
												className={styles.textInput}
												spellCheck={false}
												{...register(`armors.${index}.armorProficiency`)}
												defaultValue={armor.armorProficiency}
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
