import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export default function AddRacialBonusToSkill(
	isPositive: boolean,
	numberValue: number,
	parameterToEdit: string
) {
	const tempCharInfo = getValue('tempCharacterInfo');

	let valueToAdjust: SkillListType = getValue(
		`${parameterToEdit}${tempCharInfo.keyID}`
	);

	if (isPositive) {
		valueToAdjust.racialBonusToValue += numberValue;
	} else {
		valueToAdjust.racialBonusToValue -= numberValue;
	}
	setValue(`${parameterToEdit}${tempCharInfo.keyID}`, valueToAdjust);
}
