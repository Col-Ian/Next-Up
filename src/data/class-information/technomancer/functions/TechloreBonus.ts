import { getValue } from '../../../../utils/getValue';
import { setValue } from '../../../../utils/setValue';

export default function TechloreBonus(characterID: string) {
	const characterLevel: number = getValue(`Level${characterID}`);

	let computersSkill: SkillListType = getValue(`Computers${characterID}`);

	let mysticismSkill: SkillListType = getValue(`Mysticism${characterID}`);

	if (computersSkill.insightBonusToRank < characterLevel / 3) {
		computersSkill.insightBonusToRank = characterLevel / 3;
		setValue(`Computers${characterID}`, computersSkill);
	}

	if (mysticismSkill.insightBonusToRank < characterLevel / 3) {
		mysticismSkill.insightBonusToRank = characterLevel / 3;
		setValue(`Mysticism${characterID}`, mysticismSkill);
	}
}
