import { AddAbility } from '../../../../utils/AddAbility';
import { getValue } from '../../../../utils/getValue';
import { specializationList } from '../abilities/specializationsList';

export function OperativeLevelFiveFunction(characterID: string) {
	const specialization: string = getValue(
		`OperativeSpecialization${characterID}`
	);

	AddAbility(
		characterID,
		specializationList[specialization].specializationExploit
	);
}
