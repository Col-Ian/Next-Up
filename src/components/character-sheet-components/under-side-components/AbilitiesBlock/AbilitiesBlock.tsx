import SheetLabel from '../../labels/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useAbilities } from '../../../../hooks/useAbilities';
import { useCurrentID } from '../../../../hooks/useCurrentID';

function AbilitiesBlock() {
	const {
		abilitiesArray,
		updateAbilityArray,
		handleAddAbility,
		handleDeleteAbility,
	} = useAbilities();

	const { currentID } = useCurrentID();

	const { register, watch, reset } = useForm();

	useEffect(() => {
		reset(abilitiesArray);
	}, [currentID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateAbilityArray(data.abilities);
		});
		return () => subscription.unsubscribe();
	}, [watch, currentID]);

	function handleAddWithScroll() {
		handleAddAbility();

		const scrollTarget = document.getElementById('scrollTargetAbilities');
		scrollTarget?.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ABILITIES' />
				<div
					className={styles.addAbilityButton}
					onClick={() => {
						handleAddWithScroll();
					}}
				>
					<AddButtonLabel itemToAdd='ABILITY' />
				</div>
			</div>
			<div className={styles.abilitiesBlockContent}>
				{abilitiesArray.map((ability, index) => {
					return (
						<div
							className={styles.individualAbility}
							key={`${ability.abilityName}${index}`}
						>
							<div
								className={styles.delete}
								onClick={() => {
									handleDeleteAbility(index);
								}}
							>
								&#128465;
							</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilityName`)}
										defaultValue={ability.abilityName}
										spellCheck={false}
										className={styles.textInput}
										placeholder='ABILITY NAME'
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilitySource`)}
										defaultValue={ability.abilitySource}
										spellCheck={false}
										className={styles.textInput}
										placeholder='ABILITY SOURCE'
									/>
								</div>
								<div className={styles.verticalBar} />
								<div>TYPE</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>RP</div>
									<input
										type='number'
										{...register(`abilities.${index}.usesResolve`)}
										defaultValue={ability.usesResolve}
										className={styles.numberInput}
									/>
								</div>
							</div>
							<div className={styles.abilityDescription}>
								<textarea
									{...register(`abilities.${index}.abilityDescription`)}
									defaultValue={ability.abilityDescription}
									className={styles.abilityTextarea}
									spellCheck={false}
								/>
							</div>
						</div>
					);
				})}
				<div id='scrollTargetAbilities' />
			</div>
		</div>
	);
}

export default AbilitiesBlock;
