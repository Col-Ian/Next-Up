import { useContext, useEffect, useState } from 'react';
import { operativeAbilityList } from '../../../../data/class-information/operative/abilities/operativeAbilityList.ts';
import { specializationList } from '../../../../data/class-information/operative/abilities/specializationsList.ts';
import DropDownList from '../../../DropDownList/DropDownList.tsx';
import styles from './OperativeLevelComponents.module.css';
import stylesGeneral from '../../../../states/CreateCharacter/CreateCharacter.module.css';
import { setValue } from '../../../../utils/setValue.ts';
import { Link } from 'react-router-dom';
import { OperativesEdgeSkillBonus } from '../../../../data/class-information/operative/functions/OperativesEdgeSkillBonus.ts';
import { getValue } from '../../../../utils/getValue.ts';
import RedLabel from '../../../labels/RedLabel/RedLabel.tsx';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet.tsx';
import SplitIntoParagraphs from '../../../../utils/SplitIntoParagraphs.tsx';

function OperativeFirstLevel({ keyID }: { keyID: string }) {
	const specializationArray = Object.keys(specializationList).map(
		(key: string) => {
			return key;
		}
	);

	const {
		updateAbilityArray,
		strengthAbility,
		updateStrength,
		dexterityAbility,
		updateDexterity,
		constitutionAbility,
		updateConstitution,
		intelligenceAbility,
		updateIntelligence,
		wisdomAbility,
		updateWisdom,
		charismaAbility,
		updateCharisma,
	} = useContext(CharacterSheetContext);

	const [specialization, setSpecialization] = useState<string>('');

	const [moveOn, setMoveOn] = useState<boolean>(false);

	const [
		{
			description,
			associatedSkills,
			trickAttackSkill,
			specializationExploit,
			abilityName,
			abilityDescription,
		},
		setSpecializationObject,
	] = useState<SpecializationListTypes>({
		description: '',
		associatedSkills: [''],
		trickAttackSkill: '',
		specializationExploit: {
			abilityName: '',
			abilityDescription: '',
			abilitySource: '',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		abilityName: '',
		abilityDescription: '',
		actionType: [false, false, false, false, false, false],
		usesResolve: 0,
	});

	useEffect(() => {
		if (specializationList[specialization]) {
			setSpecializationObject(specializationList[specialization]);
			setMoveOn(true);
		}
	}, [specialization]);

	function confirmFirstLevelChanges() {
		// Get the temp ability scores
		const tempAbilityScores: {
			strength: number;
			dexterity: number;
			constitution: number;
			intelligence: number;
			wisdom: number;
			charisma: number;
		} = getValue(`tempAbilityScores`);

		// Set the default abilities given by Operative
		Object.keys(operativeAbilityList['1'].abilities).forEach((i) => {
			// AddAbility(keyID, operativeAbilityList['1'].abilities[i]);
			updateAbilityArray([
				...getValue(`Abilities${keyID}`),
				operativeAbilityList['1'].abilities[i],
			]);
		});

		// Add the specialization as an object to the ability list.
		const specializationAsAbility: AbilityListTypes = {
			abilityName: `Specialization: ${specialization}`.toUpperCase(),
			abilityDescription: `Associated Skills: ${associatedSkills[0]} and ${associatedSkills[1]}. ${trickAttackSkill}`,
			abilitySource: 'Operative (Specialization)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		};
		updateAbilityArray([
			...getValue(`Abilities${keyID}`),
			specializationAsAbility,
		]);
		// AddAbility(keyID, specializationAsAbility);

		// Set the specialization selected to the list so we can reference it again later when needed.
		setValue(`OperativeSpecialization${keyID}`, specialization);

		// Add Operative's Edge bonus of 1.
		OperativesEdgeSkillBonus(keyID, 1);

		// Confirm Attributes.
		updateStrength({
			aSName: 'Strength',
			asBonus: strengthAbility.asBonus,
			asPenalty: strengthAbility.asPenalty,
			value: tempAbilityScores.strength,
		});

		updateDexterity({
			aSName: 'Dexterity',
			asBonus: dexterityAbility.asBonus,
			asPenalty: dexterityAbility.asPenalty,
			value: tempAbilityScores.dexterity,
		});

		updateConstitution({
			aSName: 'Constitution',
			asBonus: constitutionAbility.asBonus,
			asPenalty: constitutionAbility.asPenalty,
			value: tempAbilityScores.constitution,
		});

		updateIntelligence({
			aSName: 'Intelligence',
			asBonus: intelligenceAbility.asBonus,
			asPenalty: intelligenceAbility.asPenalty,
			value: tempAbilityScores.intelligence,
		});

		updateWisdom({
			aSName: 'Wisdom',
			asBonus: wisdomAbility.asBonus,
			asPenalty: wisdomAbility.asPenalty,
			value: tempAbilityScores.wisdom,
		});

		updateCharisma({
			aSName: 'Charisma',
			asBonus: charismaAbility.asBonus,
			asPenalty: charismaAbility.asPenalty,
			value: tempAbilityScores.charisma,
		});

		// Set the associated skills for the Operative Specialization
		associatedSkills.forEach((skill) => {
			let tempSkill: SkillListType = getValue(`${skill}${keyID}`);
			tempSkill.operativeSpecializationSkill = true;
			setValue(`${skill}${keyID}`, tempSkill);
		});

		// Set the level to 1 so it's no longer locked in the level 1 selection screen.
		setValue(`Level${keyID}`, 1);
	}

	return (
		<div className={styles.firstParentDiv}>
			<div className={styles.classAbilityList}>
				{Object.keys(operativeAbilityList['1'].abilities).map(
					(ability, index) => {
						return (
							<div
								className={styles.classAbility}
								key={`classAbility${ability}`}
							>
								<RedLabel redLabelText={ability} />
								<div className={stylesGeneral.descriptionDiv}>
									<SplitIntoParagraphs
										text={
											operativeAbilityList['1'].abilities[ability]
												.abilityDescription
										}
										id={`classAbilityDescription${index}`}
									/>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div className={styles.specializationSelected}>
				<div className={styles.specializationMessage}>
					Select your Specialization from the list below. You will gain the
					Exploit at 5th level, even if you don't meet the requirements.
				</div>
				<div className={styles.dropDownDiv}>
					<DropDownList
						optionType={'Specialization'}
						optionsArray={specializationArray}
						optionSelection={setSpecialization}
						selectedOption={specialization}
						above={true}
					/>
				</div>
				{specialization != '' && (
					<div className={styles.specializationFullDescription}>
						<div className={styles.specializationHead}>{specialization}</div>
						<div className={styles.specializationDescription}>
							<SplitIntoParagraphs
								text={description}
								id='specializationDescription'
							/>
						</div>
						<ul className={styles.specializationUL}>
							<li key={'AssociatedSkills'}>
								<span className={styles.boldHead}>Associated Skills: </span>{' '}
								{associatedSkills[0]} and {associatedSkills[1]}.{' '}
								{trickAttackSkill}
							</li>
							<li
								className={styles.specializationLi}
								key={'SpecializationExploit'}
							>
								<div className={styles.boldHead}>Specialization Exploit: </div>
								<div className={styles.exploitDiv}>
									<RedLabel redLabelText={specializationExploit.abilityName} />
									<div className={stylesGeneral.descriptionDiv}>
										<SplitIntoParagraphs
											text={specializationExploit.abilityDescription}
											id='exploitDescription'
										/>
									</div>
								</div>
							</li>
							<li key={'SpecializationAbility'}>
								<span className={styles.boldHead}>{abilityName}: </span>
								{abilityDescription}
							</li>
						</ul>
					</div>
				)}
			</div>
			{moveOn && (
				<div className={styles.confirmFirstLevelChangesParent}>
					<Link
						onClick={confirmFirstLevelChanges}
						to={`/Next-Up/charactersheet/${keyID}`}
					>
						<div className={styles.confirmChanges}>Add Character</div>
					</Link>
				</div>
			)}
		</div>
	);
}

export default OperativeFirstLevel;
