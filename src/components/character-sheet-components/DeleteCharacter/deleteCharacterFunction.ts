import { skillList } from '../../../data/skillList';
import { getValue } from '../../../utils/getValue';
import { setValue } from '../../../utils/setValue';

export function deleteCharacterFunction(keyID: string | undefined) {
	// Basic Info
	localStorage.removeItem(`characterBasicInfo${keyID}`);
	localStorage.removeItem(`characterBasicInfoDynamic${keyID}`);
	localStorage.removeItem(`Level${keyID}`);
	localStorage.removeItem(`Description${keyID}`);

	// Ability Scores
	localStorage.removeItem(`Strength${keyID}`);
	localStorage.removeItem(`Dexterity${keyID}`);
	localStorage.removeItem(`Constitution${keyID}`);
	localStorage.removeItem(`Intelligence${keyID}`);
	localStorage.removeItem(`Wisdom${keyID}`);
	localStorage.removeItem(`Charisma${keyID}`);

	// Skills
	Object.keys(skillList).forEach((key: string) => {
		localStorage.removeItem(`${skillList[key].skillName}${keyID}`);
	});
	localStorage.removeItem(`SkillNotes${keyID}`);
	localStorage.removeItem(`ProfessionName${keyID}`);

	// Weapon and Armor Proficiencies
	localStorage.removeItem(`WeaponProficiencies${keyID}`);
	localStorage.removeItem(`ArmorProficiencies${keyID}`);

	// Current and Temp Stamina, Health, and Resolve
	localStorage.removeItem(`CurrentSP${keyID}`);
	localStorage.removeItem(`CurrentHP${keyID}`);
	localStorage.removeItem(`CurrentRP${keyID}`);
	localStorage.removeItem(`TempSP${keyID}`);
	localStorage.removeItem(`TempHP${keyID}`);
	localStorage.removeItem(`TempRP${keyID}`);

	// Saving Throw and Attack Bonus misc modifiers.
	localStorage.removeItem(`SavingThrowMiscMods${keyID}`);
	localStorage.removeItem(`AttackBonusesMiscMods${keyID}`);

	// Armor Class Kenetic and Energy misc modifiers, DR, and Resistances, Armor Equipped
	localStorage.removeItem(`Armor${keyID}`);
	localStorage.removeItem(`ArmorMiscMods${keyID}`);
	localStorage.removeItem(`DR${keyID}`);
	localStorage.removeItem(`Resistances${keyID}`);
	localStorage.removeItem(`EquippedArmor${keyID}`);

	// Initiative Misc Modifier, Weapons, Other Wealth, Languages
	localStorage.removeItem(`InitiativeMiscModifier${keyID}`);
	localStorage.removeItem(`Weapons${keyID}`);
	localStorage.removeItem(`Feats${keyID}`);
	localStorage.removeItem(`Equipment${keyID}`);
	localStorage.removeItem(`OtherWealth${keyID}`);
	localStorage.removeItem(`Languages${keyID}`);
	localStorage.removeItem(`Experience${keyID}`);

	// Abilities
	localStorage.removeItem(`Abilities${keyID}`);

	// Spells
	localStorage.removeItem(`Level0Spells${keyID}`);
	localStorage.removeItem(`Level1Spells${keyID}`);
	localStorage.removeItem(`Level2Spells${keyID}`);
	localStorage.removeItem(`Level3Spells${keyID}`);
	localStorage.removeItem(`Level4Spells${keyID}`);
	localStorage.removeItem(`Level5Spells${keyID}`);
	localStorage.removeItem(`Level6Spells${keyID}`);

	// Initiative Card
	localStorage.removeItem(`initiativeCards${keyID}`);

	// Class Specific details to delete

	// Operative
	localStorage.removeItem(`OperativeSpecialization${keyID}`);

	// Remove the ID from charactersAbailable

	let characterList: { characterName: string; id: string }[] =
		getValue(`charactersAvailable`);

	characterList.forEach((character, index) => {
		if (character.id === keyID) {
			characterList.splice(index, 1);
		}
	});

	setValue(`charactersAvailable`, characterList);

	dispatchEvent(new Event('Character List Updated'));

	window.scrollTo(0, 0);
}
