import AddRacialBonusToSkill from '../../../AddRacialBonusToSkill.ts';
import EditTempCharacterInfoValue from '../../../EditTempCharacterInfoValue.ts';

export default function ysokiAdjustments() {
	// Dexterity
	EditTempCharacterInfoValue(true, 2, 'Dexterity');

	// Intelligence
	EditTempCharacterInfoValue(true, 2, 'Intelligence');

	// Strength
	EditTempCharacterInfoValue(false, 2, 'Strength');

	// Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.

	// Engineering
	AddRacialBonusToSkill(true, 2, 'Engineering');

	// Stealth
	AddRacialBonusToSkill(true, 2, 'Stealth');

	// Survival
	AddRacialBonusToSkill(true, 2, 'Survival');
}
