import { exploitList } from './exploitsList';

// To be used to add the abilities to the character sheet's ability list.

/*
	0: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
*/

export const operativeAbilityList: {
	[key: string]: ClassAbilityListTypes;
} = {
	1: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			"OPERATIVE'S EDGE (EX)": {
				abilityName: "OPERATIVE'S EDGE (EX)",
				abilityDescription:
					'Your diverse training as an operative grants you a +1 insight bonus to initiative checks and to skill checks. This bonus increases by 1 at 3rd level and every 4 levels thereafter.',
				abilitySource: 'Operative',
				actionType: ['None'],
				usesResolve: 0,
			},
			SPECIALIZATION: {
				abilityName: 'SPECIALIZAION',
				abilityDescription:
					"Your specialization represents your primary area of expertise. Pick one specialisation upon taking your 1st level of the operative class. Once made, this choice cannot be changed. Descriptions of the specialiations appear on page 94 of the Core Rulebook. Your specialization grants you the Skill Focus feat (see page 161 of the Core Rulebook) in your specialization's associated skills, and you gain a free skill rank in each of those skills at each operative level (this does not allow you to exceed the maximum number of skill ranks in a single skill).",
				abilitySource: 'Operative',
				actionType: ['None'],
				usesResolve: 0,
			},
			'TRICK ATTACK [EX]': {
				abilityName: 'TRICK ATTACK (EX)',
				abilityDescription:
					"You can trick or startle a foe and then attack when they drop their guard. As a full action, you can move up to your speed. Whether or not you moved, you can then make an attack with a melee weapon with the operative special property or with any small arm. Just before making your attack, attempt a Bluff, Intimidate, or Stealth check (or a check associated with your specialization; see page 94 of the Core Rulebook) with a DC equal to 20 + your target's CR. If you succeed at the check, you deal 1d4 additional damage and the target is flat-footed against your attack. This damage increases to 1d8 at 3rd level, to 3d8 at 5th level, and by an additional 1d8 every 2 levels thereafter. You can't use this ability with a weapon that has the unwieldy special property or that requires a full action to make a single attack.",
				abilitySource: 'Operative',
				actionType: ['Full Action'],
				usesResolve: 0,
			},
		},
	},
	2: {
		hasOptions: true,
		optionDescription: [
			'As you gain experience, you learn special tricks called operative exploits. You learn your first operative exploit at 2nd level, and you learn an additional exploit every 2 levels thereafter. If an operative exploit allows a saving throw to resist its effects, the DC is equal to 10 + half your operative level + your Dexterity modifier. If it requires an enemy to attempt a skill check, the DC is equal to 10 + 1-1/2 x your operative level + your Dexterity modifier. You cannot learn the same exploit more than once unless it specially says otherwise. Select a Exploit from the list below.',
		],
		options: { ...exploitList['2'] },
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'EVASION [EX]': {
				abilityName: 'EVASION [EX]',
				abilityDescription:
					'If you succeed at a Reflex save against an effect that normally has a partial effect on a successful save, you instead suffer no effect. You gain this benefit only when unencumbered and wearing light armor or no armor, and you lose the benefit when you are helpless or otherwise unable to move.',
				abilitySource: 'Operative',
				actionType: ['None'],
				usesResolve: 0,
			},
		},
	},
	3: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	4: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	5: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	6: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	7: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	8: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	9: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	10: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	11: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	12: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	13: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	14: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	15: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	16: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	17: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	18: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	19: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
	20: {
		hasOptions: false,
		optionDescription: [],
		options: {},
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			ability: {
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [],
				usesResolve: 0,
			},
		},
	},
};
