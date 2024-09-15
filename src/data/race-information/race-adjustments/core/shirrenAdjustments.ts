import AddRacialBonusToSkill from '../../../AddRacialBonusToSkill.ts';
import EditTempCharacterInfoValue from '../../../EditTempCharacterInfoValue.ts';

export default function shirrenAdjustments() {
	// Constitution
	EditTempCharacterInfoValue(true, 2, 'Constitution');

	// Wisdom
	EditTempCharacterInfoValue(true, 2, 'Wisdom');

	// Charisma
	EditTempCharacterInfoValue(false, 2, 'Charisma');

	// +2 to Culture and Diplomacy

	// Culture
	AddRacialBonusToSkill(true, 2, 'Culture');

	// Diplomacy
	AddRacialBonusToSkill(true, 2, 'Diplomacy');
}
