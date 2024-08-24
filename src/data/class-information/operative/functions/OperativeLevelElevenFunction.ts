import { AddAbility } from '../../../../utils/AddAbility';
import { getValue } from '../../../../utils/getValue';
import { specializationList } from '../abilities/specializationsList';
import { OperativesEdgeSkillBonus } from './OperativesEdgeSkillBonus';

export function OperativeLevelElevenFunction(characterID: string) {
	const specializationString: string = getValue(
		`OperativeSpecialization${characterID}`
	);

	const specialization = specializationList[specializationString];

	OperativesEdgeSkillBonus(characterID, 4);

	AddAbility(characterID, {
		abilityName: specialization.abilityName,
		abilityDescription: specialization.abilityDescription,
		abilitySource: 'Operative (Specialization Power)',
		actionType: specialization.actionType,
		usesResolve: specialization.usesResolve,
	});
}
