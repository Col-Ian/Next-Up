import { envoyAbilityList } from '../../../../data/class-information/envoy/abilities/envoyAbilityList';
import SplitIntoParagraphs from '../../../../utils/SplitIntoParagraphs';
import RedLabel from '../../../labels/RedLabel/RedLabel';
import styles from './EnvoyFirstLevel.module.css';
import stylesGeneral from '../../../../states/CreateCharacter/CreateCharacter.module.css';
import DropDownList from '../../../DropDownList/DropDownList';
import { envoyImpoveisationList } from '../../../../data/class-information/envoy/abilities/envoyImprovisationList';
import { useContext, useEffect, useState } from 'react';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { getValue } from '../../../../utils/getValue';
import { setValue } from '../../../../utils/setValue';
import { Link } from 'react-router-dom';

function EnvoyFirstLevel({ keyID }: { keyID: string }) {
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

	const [improvisation, setImprovisation] = useState<string>('');

	const [moveOn, setMoveOn] = useState<boolean>(false);

	useEffect(() => {
		if (improvisation != '') {
			setMoveOn(true);
		}
	}, [improvisation]);

	const improvisationArray = Object.keys(envoyImpoveisationList['1']).map(
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
		Object.keys(envoyAbilityList['1'].abilities).map((ability) => {
			updateAbilityArray([
				...getValue(`Abilities${keyID}`),
				envoyAbilityList['1'].abilities[ability],
			]);
		});

		updateAbilityArray([
			...getValue(`Abilities${keyID}`),
			envoyImpoveisationList['1'][improvisation],
		]);

		// Set the level to 1 so it's no longer locked in the level 1 selection screen.
		setValue(`Level${keyID}`, 1);
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.classAbilityList}>
				{Object.keys(envoyAbilityList['1'].abilities).map((ability, index) => {
					return (
						<div className={styles.classAbility} key={`classAbility${ability}`}>
							<RedLabel redLabelText={ability} />
							<div className={stylesGeneral.descriptionDiv}>
								<SplitIntoParagraphs
									text={
										envoyAbilityList['1'].abilities[ability].abilityDescription
									}
									id={`classAbilityDescription${index}`}
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className={styles.improvisationSelected}>
				<div className={styles.improvisationMessage}>
					Select your envoy improvisation below.
				</div>
				<div className={styles.dropDownDiv}>
					<DropDownList
						optionType={'Improvisation'}
						optionsArray={improvisationArray}
						optionSelection={setImprovisation}
						selectedOption={improvisation}
						above={true}
					/>
				</div>
				{improvisation != '' && (
					<div className={styles.classAbility}>
						<RedLabel
							redLabelText={
								envoyImpoveisationList['1'][improvisation].abilityName
							}
						/>
						<div className={stylesGeneral.descriptionDiv}>
							<SplitIntoParagraphs
								text={
									envoyImpoveisationList['1'][improvisation].abilityDescription
								}
								id={`improvisationDescription`}
							/>
						</div>
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

export default EnvoyFirstLevel;
