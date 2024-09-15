import { Dispatch, SetStateAction } from 'react';

// Get the list of given action based on the default lists and the abilities from storage.
export function setActionList(
	type: number,
	abilitiesArray: AbilityListTypes[],
	spellArray: SpellListTypes[],
	defaultList: AbilityListTypes[],
	setList: Dispatch<SetStateAction<AbilityListTypes[]>>
) {
	let tempList: AbilityListTypes[] = [];

	abilitiesArray.forEach((ability) => {
		if (ability.actionType[type]) {
			tempList = [...tempList, ability];
		}
	});

	spellArray.forEach((spell) => {
		if (spell.actionType[type]) {
			tempList = [
				...tempList,
				{
					abilityName: spell.spellTitle,
					abilityDescription: spell.spellPreviewDescription,
					abilitySource: 'Spell',
					actionType: spell.actionType,
					usesResolve: 0,
				},
			];
		}
	});

	setList([...defaultList, ...tempList]);
}
