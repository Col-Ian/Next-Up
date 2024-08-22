import { themeList } from '../../data/theme-information/themeList';
import { getValue } from '../../utils/getValue';
import { setValue } from '../../utils/setValue';

export function LevelUpFunction(
	characterID: string,
	characterBasicInfo: CharacterInfoObjectType,
	nextLevel: number,
	strengthAbility: AbilityScoreType,
	dexterityAbility: AbilityScoreType,
	constitutionAbility: AbilityScoreType,
	intelligenceAbility: AbilityScoreType,
	wisdomAbility: AbilityScoreType,
	charismaAbility: AbilityScoreType,
	themeArrayPosition: number,
	classAbilityList: ClassAbilityListTypes,
	optionSelected: string
) {
	// Add an empty feat as an ability to remind the player to add a feat once back on the screen

	if ((nextLevel - 1) % 2 === 0) {
		const tempAbilityArray: AbilityListTypes[] = getValue(
			`Abilities${characterID}`
		);

		setValue(`Abilities${characterID}`, [
			...tempAbilityArray,
			{
				abilityName: `Level ${nextLevel} Feat`,
				abilityDescription: `Add the feat given to you at level ${nextLevel}`,
				abilitySource: `Level ${nextLevel} Feat`,
				actionType: [],
				usesResolve: 0,
			},
		]);
	}

	// Add abilities that may be given by theme
	if (themeArrayPosition != 0) {
		const tempAbilityArray: AbilityListTypes[] = getValue(
			`Abilities${characterID}`
		);

		setValue(`Abilities${characterID}`, [
			...tempAbilityArray,

			{
				abilityName:
					themeList[characterBasicInfo.theme].themeAbilityTitle[
						themeArrayPosition
					],
				abilityDescription:
					themeList[characterBasicInfo.theme].themeAbilityDescription[
						themeArrayPosition
					],
				abilitySource: `Theme (${characterBasicInfo.theme})`,
				actionType: ['None'],
				usesResolve: 0,
			},
		]);
	}

	// Confirm abiliy score changes when appropriate
	if (nextLevel % 5 === 0) {
		const tempAbilityScores: TempAbilityScoreType =
			getValue('tempAbilityScores');

		setValue(`Strength${characterID}`, {
			aSName: 'Strength',
			asBonus: strengthAbility.asBonus,
			asPenalty: strengthAbility.asPenalty,
			value: tempAbilityScores.strength,
		});

		setValue(`Dexterity${characterID}`, {
			aSName: 'Dexterity',
			asBonus: dexterityAbility.asBonus,
			asPenalty: dexterityAbility.asPenalty,
			value: tempAbilityScores.dexterity,
		});

		setValue(`Constitution${characterID}`, {
			aSName: 'Constitution',
			asBonus: constitutionAbility.asBonus,
			asPenalty: constitutionAbility.asPenalty,
			value: tempAbilityScores.constitution,
		});

		setValue(`Intelligence${characterID}`, {
			aSName: 'Intelligence',
			asBonus: intelligenceAbility.asBonus,
			asPenalty: intelligenceAbility.asPenalty,
			value: tempAbilityScores.intelligence,
		});

		setValue(`Wisdom${characterID}`, {
			aSName: 'Wisdom',
			asBonus: wisdomAbility.asBonus,
			asPenalty: wisdomAbility.asPenalty,
			value: tempAbilityScores.wisdom,
		});

		setValue(`Charisma${characterID}`, {
			aSName: 'Charisma',
			asBonus: charismaAbility.asBonus,
			asPenalty: charismaAbility.asPenalty,
			value: tempAbilityScores.charisma,
		});
	}

	// Add any options the class may have
	if (classAbilityList.hasOptions) {
		const tempAbilityArray: AbilityListTypes[] = getValue(
			`Abilities${characterID}`
		);

		setValue(`Abilities${characterID}`, [
			...tempAbilityArray,

			{
				abilityName: classAbilityList.options[optionSelected].abilityName,
				abilityDescription:
					classAbilityList.options[optionSelected].abilityDescription,
				abilitySource: classAbilityList.options[optionSelected].abilitySource,
				actionType: classAbilityList.options[optionSelected].actionType,
				usesResolve: classAbilityList.options[optionSelected].usesResolve,
			},
		]);
	}

	// Add the abilities given by class
	if (Object.keys(classAbilityList.abilities).length != 0) {
		const tempAbilityArray: AbilityListTypes[] = getValue(
			`Abilities${characterID}`
		);

		const arrayToAdd: AbilityListTypes[] = Object.keys(
			classAbilityList.abilities
		).map((ability) => {
			return classAbilityList.abilities[ability];
		});

		setValue(`Abilities${characterID}`, [...tempAbilityArray, ...arrayToAdd]);
	}

	// Run any functions the class may need to run at this level
	classAbilityList.functionToRun({ keyID: characterID });

	// Set the level.
	setValue(`Level${characterID}`, nextLevel);
}
