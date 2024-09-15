import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import { useContext, useEffect, useState } from 'react';
import AddButtonLabel from '../../AddButtonLabel/AddButtonLabel';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';

type FormValues = FieldValues & {
	name: AbilityListTypes[];
};

function AbilitiesBlock() {
	const { abilitiesArray, updateAbilityArray, currentCharacterIDAB } =
		useContext(CharacterSheetContext);

	const { control, register, watch, reset } = useForm<FormValues>();

	const [showAbilities, setShowAbilities] = useState<boolean>(false);

	const { fields, append, remove } = useFieldArray<
		FormValues,
		'abilities',
		'id'
	>({
		control,
		name: 'abilities',
		keyName: 'id',
	});

	useEffect(() => {
		const defaultValues = {
			abilities: abilitiesArray,
		};

		reset({ ...defaultValues });
	}, [currentCharacterIDAB]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateAbilityArray(data.abilities);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentCharacterIDAB]);

	function handleRemove(index: number) {
		if (abilitiesArray.length > 1) {
			remove(index);
		} else {
			remove(index);
			append({
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			});
		}
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ABILITIES' />
				{showAbilities ? (
					<div
						className={styles.addAbilityButton}
						onClick={() => {
							append({
								abilityName: '',
								abilityDescription: '',
								abilitySource: '',
								actionType: [false, false, false, false, false, false],
								usesResolve: 0,
							});
						}}
					>
						<AddButtonLabel itemToAdd='ABILITY' />
					</div>
				) : null}
			</div>
			<div className={styles.abilitiesBlockContent}>
				{showAbilities
					? fields.map((field, index) => {
							return (
								<div className={styles.individualAbility} key={field.id}>
									<div className={styles.leftBlock}>
										<div
											className={styles.delete}
											onClick={() => handleRemove(index)}
										>
											&#128465;
										</div>
										<div className={styles.topRow}>
											<div className={styles.inputDiv}>
												<input
													type='text'
													{...register(`abilities.${index}.abilityName`)}
													spellCheck={false}
													className={styles.textInput}
												/>
											</div>
											<div className={styles.verticalBar} />
											<div className={styles.inputDiv}>
												<input
													type='text'
													{...register(`abilities.${index}.abilitySource`)}
													spellCheck={false}
													className={styles.textInput}
												/>
											</div>
											<div className={styles.verticalBar} />
											<div className={styles.inputDiv}>
												<div className={styles.inputLabel}>RP</div>
												<input
													type='number'
													{...register(`abilities.${index}.usesResolve`)}
													className={styles.numberInput}
												/>
											</div>
										</div>
										<div className={styles.abilityDescription}>
											<textarea
												{...register(`abilities.${index}.abilityDescription`)}
												className={styles.abilityTextarea}
												spellCheck={false}
											/>
										</div>
									</div>

									<div className={styles.typeDiv}>
										<div className={styles.typeDivLabel}>Action</div>
										<div className={styles.actionTypeDropDown}>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.0`)}
												/>
												<div className={styles.actionLabel}>Standard</div>
											</div>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.1`)}
												/>
												<div className={styles.actionLabel}>Move</div>
											</div>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.2`)}
												/>
												<div className={styles.actionLabel}>Swift</div>
											</div>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.3`)}
												/>
												<div className={styles.actionLabel}>Full</div>
											</div>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.4`)}
												/>
												<div className={styles.actionLabel}>Reaction</div>
											</div>
											<div className={styles.actionRow}>
												<input
													type='checkbox'
													{...register(`abilities.${index}.actionType.5`)}
												/>
												<div className={styles.actionLabel}>Other</div>
											</div>
										</div>
									</div>
								</div>
							);
					  })
					: null}
				<div
					className={styles.dropDownWrapper}
					onClick={() => setShowAbilities(!showAbilities)}
				>
					<ExpandComponent expanded={showAbilities} />
				</div>
			</div>
		</div>
	);
}

export default AbilitiesBlock;
