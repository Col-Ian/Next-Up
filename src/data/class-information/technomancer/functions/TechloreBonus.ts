import { getValue } from '../../../../utils/getValue';
import { setValue } from '../../../../utils/setValue';

export default function TechloreBonus(characterID: string) {
	const characterLevel: number = getValue(`Level${characterID}`) + 1;

	let computersSkill: SkillListType = getValue(`Computers${characterID}`);

	let mysticismSkill: SkillListType = getValue(`Mysticism${characterID}`);

	if (computersSkill.insightBonusToValue < characterLevel / 3) {
		computersSkill.insightBonusToValue = characterLevel / 3;
		setValue(`Computers${characterID}`, computersSkill);
	}

	if (mysticismSkill.insightBonusToValue < characterLevel / 3) {
		mysticismSkill.insightBonusToValue = characterLevel / 3;
		setValue(`Mysticism${characterID}`, mysticismSkill);
	}
}
