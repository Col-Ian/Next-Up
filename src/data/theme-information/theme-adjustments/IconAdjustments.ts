import EditTempCharacterInfoValue from '../../EditTempCharacterInfoValue.ts';
import setIsClassSkillOrPlusOne from '../setIsClassSkillOrPlusOne.ts';

export default function IconAdjustments(keyID: string) {
	// Dexterity
	EditTempCharacterInfoValue(true, 1, 'Charisma');

	// Piloting
	setIsClassSkillOrPlusOne(keyID, 'Culture');
}
