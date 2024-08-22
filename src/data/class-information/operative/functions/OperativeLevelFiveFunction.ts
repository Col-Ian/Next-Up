import { getValue } from '../../../../utils/getValue';
import { setValue } from '../../../../utils/setValue';
import { specializationList } from '../abilities/specializationsList';

export function OperativeLevelFiveFunction(characterID: string) {
	const specialization: string = getValue(
		`OperativeSpecialization${characterID}`
	);

	const tempAbilityArray: AbilityListTypes[] = getValue(
		`Abilities${characterID}`
	);

	setValue(`Abilities${characterID}`, [
		...tempAbilityArray,
		specializationList[specialization].specializationExploit,
	]);
}
