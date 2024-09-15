import styles from './TechnomancerFirstLevel.module.css';
import stylesGeneral from '../../../../states/CreateCharacter/CreateCharacter.module.css';
import { technomancerAbilityList } from '../../../../data/class-information/technomancer/abilities/technomancerAbilityList';
import RedLabel from '../../../labels/RedLabel/RedLabel';
import SplitIntoParagraphs from '../../../../utils/SplitIntoParagraphs';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { useContext, useEffect, useState } from 'react';
import { setValue } from '../../../../utils/setValue';
import { getValue } from '../../../../utils/getValue';
import { technomaticTalentList } from '../../../../data/class-information/technomancer/abilities/technomaticTaletList';
import DropDownList from '../../../DropDownList/DropDownList';
import { Link } from 'react-router-dom';

function TechnomancerFirstLevel({ keyID }: { keyID: string }) {
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

	const [technomantic, setTechnomantic] = useState<string>('');

	const [moveOn, setMoveOn] = useState<boolean>(false);

	useEffect(() => {
		if (technomantic != '') {
			setMoveOn(true);
		}
	}, [technomantic]);

	const technomanticArray = Object.keys(technomaticTalentList).map(
		(key: string) => {
			return key;
		}
	);

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

		// Abilities
		Object.keys(technomancerAbilityList['1'].abilities).map((ability) => {
			updateAbilityArray([
				...getValue(`Abilities${keyID}`),
				technomancerAbilityList['1'].abilities[ability],
			]);
		});

		updateAbilityArray([
			...getValue(`Abilities${keyID}`),
			technomaticTalentList[technomantic],
		]);

		// Set the level to 1 so it's no longer locked in the level 1 selection screen.
		setValue(`Level${keyID}`, 1);
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.classAbilityList}>
				{Object.keys(technomancerAbilityList['1'].abilities).map(
					(ability, index) => {
						return (
							<div
								className={styles.classAbility}
								key={`classAbility${ability}`}
							>
								<RedLabel
									redLabelText={
										technomancerAbilityList['1'].abilities[ability].abilityName
									}
								/>
								<div className={stylesGeneral.descriptionDiv}>
									<SplitIntoParagraphs
										text={
											technomancerAbilityList['1'].abilities[ability]
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
			<div className={styles.technomanticSelection}>
				<div className={styles.technomanticMessage}>
					Select your technomantic talent below.
				</div>
				<div className={styles.dropDownDiv}>
					<DropDownList
						optionType={'Technomantic Talent'}
						optionsArray={technomanticArray}
						optionSelection={setTechnomantic}
						selectedOption={technomantic}
						above={true}
					/>
				</div>
				{technomantic != '' && (
					<div className={styles.classAbility}>
						<RedLabel
							redLabelText={technomaticTalentList[technomantic].abilityName}
						/>
						<div className={stylesGeneral.descriptionDiv}>
							<SplitIntoParagraphs
								text={technomaticTalentList[technomantic].abilityDescription}
								id={`technomanticDescription`}
							/>
						</div>
					</div>
				)}
			</div>
			{moveOn && (
				<div className={stylesGeneral.confirmFirstLevelChangesParent}>
					<Link
						onClick={confirmFirstLevelChanges}
						to={`/Next-Up/charactersheet/${keyID}`}
					>
						<div className={stylesGeneral.confirmChanges}>Add Character</div>
					</Link>
				</div>
			)}
		</div>
	);
}

export default TechnomancerFirstLevel;
