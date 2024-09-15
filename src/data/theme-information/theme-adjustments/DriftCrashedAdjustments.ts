import EditTempCharacterInfoValue from '../../EditTempCharacterInfoValue';
import setIsClassSkillOrPlusOne from '../setIsClassSkillOrPlusOne';

export default function DriftCrashedAdjustments(keyID: string) {
	// Dexterity
	EditTempCharacterInfoValue(true, 1, 'Dexterity');

	// Athletics
	setIsClassSkillOrPlusOne(keyID, 'Athletics');
}
