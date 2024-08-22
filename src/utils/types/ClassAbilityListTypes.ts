type ClassAbilityListTypes = {
	hasOptions: boolean;
	optionDescription: string[];
	options: { [key: string]: AbilityListTypes };
	additionalInfo: string[];
	hasFunction: boolean;
	functionToRun: ({ keyID }: { keyID: string }) => void;
	abilities: {
		[key: string]: AbilityListTypes;
	};
};
