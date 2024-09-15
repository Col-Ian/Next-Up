import styles from './SpellBlocks.module.css';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import AddButtonLabel from '../../AddButtonLabel/AddButtonLabel';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';

type FormValues = FieldValues & {
	name: SpellListTypes[];
};

type SpellBlocksProps = {
	spellLevel: string;
	spellArray: SpellListTypes[];
	updateSpellArray: (newSpellArray: SpellListTypes[]) => void;
	currentCharacterID: string | undefined;
};

function SpellBlocks({
	spellLevel,
	spellArray,
	updateSpellArray,
	currentCharacterID,
}: SpellBlocksProps) {
	const { control, register, watch, reset } = useForm<FormValues>();

	const [showAllSpells, setShowAllSpells] = useState<boolean>(false);

	const { fields, append, remove } = useFieldArray<FormValues, 'spells', 'id'>({
		control,
		name: 'spells',
		keyName: 'id',
	});

	useEffect(() => {
		const defaultValues = {
			spells: spellArray,
		};

		reset({ ...defaultValues });
	}, [currentCharacterID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateSpellArray(data.spells);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentCharacterID]);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText={`LEVEL ${spellLevel} SPELLS`} />
				{showAllSpells ? (
					<div
						className={styles.addSpellButton}
						onClick={() => {
							append({
								spellTitle: '',
								spellPreviewDescription: '',
								spellSchool: '',
								spellCastingTime: '',
								spellRange: '',
								spellTargets: '',
								spellArea: '',
								spellEffect: '',
								spellDuration: '',
								spellSavingThrow: '',
								spellResistance: '',
								spellDescriptionFull: '',
								actionType: [false, false, false, false, false, false],
							});
						}}
					>
						<AddButtonLabel itemToAdd='SPELL' />
					</div>
				) : null}
			</div>
			<div className={styles.spellBlockContent}>
				<div className={styles.spellBlockGrid}>
					{showAllSpells ? (
						spellArray.length > 0 ? (
							fields.map((field, index) => {
								return (
									<div
										className={styles.individualSpell}
										key={`Level${spellLevel}${field.id}`}
									>
										<div
											className={styles.delete}
											onClick={() => remove(index)}
										>
											&#128465;
										</div>
										<div className={styles.spellBlockSection}>
											<div className={styles.inputDiv}>
												<input
													type='text'
													{...register(`spells.${index}.spellTitle`)}
													spellCheck={false}
													className={[styles.textInput, styles.spellTitle].join(
														' '
													)}
													placeholder='Spell Name'
												/>
											</div>
											<div className={styles.inputDiv}>
												<div className={styles.spellItemLabel}>School</div>
												<input
													type='text'
													{...register(`spells.${index}.spellSchool`)}
													spellCheck={false}
													className={styles.textInput}
												/>
											</div>
											<div className={styles.doubleInputDiv}>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>
														Casting Time
													</div>
													<input
														type='text'
														{...register(`spells.${index}.spellCastingTime`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>Range</div>
													<input
														type='text'
														{...register(`spells.${index}.spellRange`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
											</div>
											<div className={styles.doubleInputDiv}>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>Area</div>
													<input
														type='text'
														{...register(`spells.${index}.spellArea`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>Targets</div>
													<input
														type='text'
														{...register(`spells.${index}.spellTargets`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
											</div>
											<div className={styles.doubleInputDiv}>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>Effect</div>
													<input
														type='text'
														{...register(`spells.${index}.spellEffect`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>Duration</div>
													<input
														type='text'
														{...register(`spells.${index}.spellDuration`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
											</div>
											<div className={styles.doubleInputDiv}>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>
														Saving Throw
													</div>
													<input
														type='text'
														{...register(`spells.${index}.spellSavingThrow`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
												<div className={styles.inputDiv}>
													<div className={styles.spellItemLabel}>
														Spell Resistance
													</div>
													<input
														type='text'
														{...register(`spells.${index}.spellResistance`)}
														spellCheck={false}
														className={styles.textInput}
													/>
												</div>
											</div>
										</div>
										<div className={styles.spellBlockSection}>
											<textarea
												{...register(`spells.${index}.spellDescriptionFull`)}
												className={styles.fullText}
												placeholder='Enter the full description of the spell.'
											/>
										</div>
										<div className={styles.spellBlockSection}>
											<textarea
												{...register(`spells.${index}.spellPreviewDescription`)}
												className={styles.previewText}
												placeholder='Enter a brief description of the spell that will be shown in your combat options.'
											/>
											<div className={styles.actionTypeDiv}>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.0`)}
													/>
													<div className={styles.actionLabel}>Standard</div>
												</div>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.1`)}
													/>
													<div className={styles.actionLabel}>Move</div>
												</div>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.2`)}
													/>
													<div className={styles.actionLabel}>Swift</div>
												</div>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.3`)}
													/>
													<div className={styles.actionLabel}>Full</div>
												</div>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.4`)}
													/>
													<div className={styles.actionLabel}>Reaction</div>
												</div>
												<div className={styles.actionDiv}>
													<input
														type='checkbox'
														{...register(`spells.${index}.actionType.5`)}
													/>
													<div className={styles.actionLabel}>Other</div>
												</div>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div className={styles.noSpells}>
								<p>No Level {spellLevel} Spells</p>
							</div>
						)
					) : null}
				</div>
				<div
					className={styles.dropDownWrapper}
					onClick={() => setShowAllSpells(!showAllSpells)}
				>
					<ExpandComponent expanded={showAllSpells} />
				</div>
			</div>
		</div>
	);
}

export default SpellBlocks;
