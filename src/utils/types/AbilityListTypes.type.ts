type AbilityListTypes = {
	abilityName: string;
	abilityDescription: string;
	abilitySource: string;
	actionType: [boolean, boolean, boolean, boolean, boolean, boolean];
	usesResolve: number;
};

/*
	React-Hook-Form copies the values for actionType as a boolean since it's a checkbox.

	actionType: boolean[] =
		standard action,
		move action,
		swift action,
		full action,
		reaction,
		other action
*/
