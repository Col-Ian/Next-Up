import { Link, useParams } from 'react-router-dom';
import styles from './LevelUpPage.module.css';
import stylesGeneral from '../../../states/CreateCharacter/CreateCharacter.module.css';
import { getValue } from '../../../utils/getValue';
import { useAbilityScores } from '../../../hooks/useAbilityScores';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { setValue } from '../../../utils/setValue';
import RedLabel from '../../labels/RedLabel/RedLabel';
import { themeList } from '../../../data/theme-information/themeList';
import { classList } from '../../../data/class-information/classList';
import DropDownList from '../../DropDownList/DropDownList';
import { LevelUpFunction } from '../LevelUpFunction';

function LevelUpPage() {
	const { characterID } = useParams();

	// For going beyond level 20.
	const [beyond, setBeyond] = useState<boolean>(false);

	// Ability Score adjustments

	const {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
	} = useAbilityScores();

	const [tempAbilityScores] = useState<TempAbilityScoreType>({
		strength: strengthAbility.value,
		dexterity: dexterityAbility.value,
		constitution: constitutionAbility.value,
		intelligence: intelligenceAbility.value,
		wisdom: wisdomAbility.value,
		charisma: charismaAbility.value,
	});

	const { register, watch } = useForm({
		defaultValues: tempAbilityScores,
	});

	useEffect(() => {
		const subscription = watch((data) => {
			setValue('tempAbilityScores', {
				strength: Number(data.strength),
				dexterity: Number(data.dexterity),
				constitution: Number(data.constitution),
				intelligence: Number(data.intelligence),
				wisdom: Number(data.wisdom),
				charisma: Number(data.charisma),
			});
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	useEffect(() => {
		setValue('tempAbilityScores', tempAbilityScores);
	}, [tempAbilityScores]);

	// Blank state for any options a class may have
	const [firstOptionSelected, setFirstOptionSelected] = useState<string>('');
	const [secondOptionSelected, setSecondOptionSelected] = useState<string>('');

	const optionSelectedArray: {
		optionSelected: string;
		setOptionSelected: Dispatch<SetStateAction<string>>;
	}[] = [
		{
			optionSelected: firstOptionSelected,
			setOptionSelected: setFirstOptionSelected,
		},
		{
			optionSelected: secondOptionSelected,
			setOptionSelected: setSecondOptionSelected,
		},
	];

	// Get the basic info for theme/class.

	const characterBasicInfo: CharacterInfoObjectType = getValue(
		`characterBasicInfo${characterID}`
	);

	// Get the current and next levels

	const currentLevel: number = getValue(`Level${characterID}`);

	const nextLevel: number = getValue(`Level${characterID}`) + 1;

	// If the next level is one of these, return the position of the ability in the themeList.
	function getThemeArrayPosition() {
		if (nextLevel === 6) {
			return 1;
		} else if (nextLevel === 12) {
			return 2;
		} else if (nextLevel === 18) {
			return 3;
		} else {
			return 0;
		}
	}

	function overTwenty() {
		if (nextLevel >= 21) {
			return {
				hasOptions: false,
				optionDescription: [],
				options: [],
				additionalInfo: [],
				hasFunction: false,
				functionToRun: () => {},
				abilities: {},
			};
		} else {
			return classList[characterBasicInfo.chClass].classDefaults
				.classAbilityList[nextLevel];
		}
	}

	const classAbilityList: ClassAbilityListTypes = overTwenty();

	// If there are options, get the array for them.

	function getOptionsArray(index: number) {
		if (
			classAbilityList.hasOptions &&
			classAbilityList.options.length >= index + 1
		) {
			return Object.keys(classAbilityList.options[index]).map((option) => {
				return option;
			});
		} else {
			return [];
		}
	}

	const firstOptionsArray: string[] = getOptionsArray(0);
	const secondOptionsArray: string[] = getOptionsArray(1);

	const optionsArray: [string[], string[]] = [
		firstOptionsArray,
		secondOptionsArray,
	];

	const themeArrayPosition: number = getThemeArrayPosition();

	return (
		<div className={styles.parentDiv}>
			<div className={styles.levelUpWrapper}>
				{nextLevel > 20 ? (
					<div className={styles.levelUpHeading}>
						After Level 20, your character will no longer gain any benefits from
						their class or theme. You will still gain all of the normal passive
						benefits of levelling up, such as having the option to add a feat
						every second level or increasing your ability scores every 5. You
						should speak with your GM before confirming any changes.
					</div>
				) : (
					<div className={styles.levelUpHeading}>
						At level {nextLevel.toString()}, you gain the following benefits:
					</div>
				)}
				{/* You get a feat at every 2nd level starting at 3rd level. This would mean using the next level -1 to find if it's even, so currentLevel will work.*/}
				{currentLevel % 2 === 0 ? (
					<div className={styles.heading}>
						You can add an extra feat to your list of abilities.
					</div>
				) : null}
				{/* Display any abilities given by theme */}
				{themeArrayPosition != 0 ? (
					<div className={styles.themeBonusWrap}>
						<div className={styles.heading}>
							You gain the following ability from your theme:
						</div>
						<RedLabel
							redLabelText={
								themeList[characterBasicInfo.theme].themeAbilityTitle[
									themeArrayPosition
								]
							}
						/>
						<div className={stylesGeneral.descriptionDiv}>
							{
								themeList[characterBasicInfo.theme].themeAbilityDescription[
									themeArrayPosition
								]
							}
						</div>
					</div>
				) : null}
				{/* You get an ability increase every 5 levels */}
				{nextLevel % 5 === 0 ? (
					<div className={styles.abilityIncreaseWrap}>
						<div className={styles.heading}>
							Choose up to four ability scores to increase. If a score is 16 or
							lower, it increases by 2. If it's 17 or higher, it increases by 1
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Strength</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={strengthAbility.value}
											readOnly
										/>
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(strengthAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('strength', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Dexterity</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={dexterityAbility.value}
											readOnly
										/>
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(dexterityAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('dexterity', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Constitution</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={constitutionAbility.value}
											readOnly
										/>
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(constitutionAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('constitution', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Intelligence</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={intelligenceAbility.value}
											readOnly
										/>
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(intelligenceAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('intelligence', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Wisdom</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input type='number' value={wisdomAbility.value} readOnly />
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(wisdomAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('wisdom', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.abilityScoreWrap}>
							<div className={styles.abilityScoreLabel}>Charisma</div>
							<div className={styles.currentSelectedRow}>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Current</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={charismaAbility.value}
											readOnly
										/>
									</div>
								</div>
								<div className={styles.rightArrow}>&rarr;</div>
								<div className={styles.currentSelectedDiv}>
									<div className={styles.currentSelectedText}>Suggested</div>
									<div className={styles.currentSelectedInput}>
										<input
											type='number'
											value={getAbilityScoreIncrease(charismaAbility.value)}
											readOnly
										/>
									</div>
								</div>
							</div>
							<div className={styles.confirmScore}>
								<div className={styles.confirmScoreWrapper}>
									<div className={styles.confirmScoreText}>Confirm: </div>
									<div className={styles.confirmInput}>
										<input
											type='number'
											{...register('charisma', { valueAsNumber: true })}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}

				{Object.keys(classAbilityList.abilities).length != 0 ? (
					<div className={styles.abilitiesWrapper}>
						<div className={styles.heading}>
							You gain the following abilities from {characterBasicInfo.chClass}
							:
						</div>
						{Object.keys(classAbilityList.abilities).map(
							(ability: string, index: number) => {
								return (
									<div
										className={styles.individualAbilityWrapper}
										key={`${ability}${index}`}
									>
										<RedLabel
											redLabelText={classAbilityList.abilities[
												ability
											].abilityName.toUpperCase()}
										/>
										<div className={stylesGeneral.descriptionDiv}>
											{classAbilityList.abilities[ability].abilityDescription}
										</div>
									</div>
								);
							}
						)}
					</div>
				) : null}

				{/* Check for options from the class abilities. */}
				{classAbilityList.hasOptions ? (
					<div className={styles.classOptionsParent}>
						{classAbilityList.optionDescription.map(
							(option: string, index: number) => {
								return (
									<div
										className={styles.classOptionsWrapper}
										key={`options${index}`}
									>
										<div className={styles.heading}>{option}</div>
										<DropDownList
											optionType='Option'
											optionsArray={optionsArray[index]}
											optionSelection={
												optionSelectedArray[index].setOptionSelected
											}
											selectedOption={optionSelectedArray[index].optionSelected}
											above={true}
										/>
										{optionSelectedArray[index].optionSelected != '' ? (
											<div className={styles.optionSelectedDiv}>
												<RedLabel
													redLabelText={
														optionSelectedArray[index].optionSelected
													}
												/>
												<div className={stylesGeneral.descriptionDiv}>
													{
														classAbilityList.options[index][
															optionSelectedArray[index].optionSelected
														].abilityDescription
													}
												</div>
											</div>
										) : null}
									</div>
								);
							}
						)}
					</div>
				) : null}

				{classAbilityList.additionalInfo.length != 0
					? classAbilityList.additionalInfo.map(
							(info: string, index: number) => {
								return (
									<div className={styles.heading} key={`info${index}`}>
										{info}
									</div>
								);
							}
					  )
					: null}

				{nextLevel > 20 ? (
					<div className={styles.checkboxDiv}>
						<input
							type='checkbox'
							defaultChecked={false}
							onChange={() => goBeyond(beyond, setBeyond)}
						/>
						<div className={styles.checkboxText}>Go beyond?</div>
					</div>
				) : null}
				<div className={styles.cancelConfirmDiv}>
					<div className={styles.cancelButton}>
						<Link to={`/Next-Up/charactersheet/${characterID}`}>CANCEL</Link>
					</div>
					{(classAbilityList.hasOptions && firstOptionSelected != '') ||
					(classAbilityList.options.length === 2 &&
						secondOptionSelected != '') ||
					beyond ||
					!classAbilityList.hasOptions ? (
						<div
							className={styles.confirmButton}
							onClick={() =>
								LevelUpFunction(
									characterID!,
									characterBasicInfo,
									nextLevel,
									strengthAbility,
									dexterityAbility,
									constitutionAbility,
									intelligenceAbility,
									wisdomAbility,
									charismaAbility,
									themeArrayPosition,
									classAbilityList,
									optionSelectedArray
								)
							}
						>
							<Link to={`/Next-Up/charactersheet/${characterID}`}>
								LEVEL UP
							</Link>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default LevelUpPage;

function getAbilityScoreIncrease(current: number) {
	return current < 17 ? current + 2 : current + 1;
}

function goBeyond(
	beyond: boolean,
	setBeyond: Dispatch<SetStateAction<boolean>>
) {
	setBeyond(!beyond);
}
