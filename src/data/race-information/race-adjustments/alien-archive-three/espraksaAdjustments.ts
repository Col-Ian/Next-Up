import AddRacialBonusToSkill from '../../../AddRacialBonusToSkill';
import EditTempCharacterInfoValue from '../../../EditTempCharacterInfoValue';

export function espraksaAdjustments() {
	// Ability Score adjustments
	// +2 to Wisdom and Charisma.
	// -2 to Constitution

	// Wisdom
	EditTempCharacterInfoValue(true, 2, 'Wisdom');

	// Charisma
	EditTempCharacterInfoValue(true, 2, 'Charisma');

	// Constitution
	EditTempCharacterInfoValue(false, 2, 'Constitution');

	// +2 bonus to Diplomacy and Sense Motive from Empathic
	AddRacialBonusToSkill(true, 2, 'Diplomacy');
	AddRacialBonusToSkill(true, 2, 'Sense Motive');
}
