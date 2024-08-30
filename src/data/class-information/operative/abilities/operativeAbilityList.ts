import { OperativeLevelThreeFunction } from '../functions/OperativeLevelThreeFunction';
import { OperativeLevelFiveFunction } from '../functions/OperativeLevelFiveFunction';
import { exploitList } from './exploitsList';
import { OperativeLevelSevenFunction } from '../functions/OperativeLevelSevenFunction';
import { OperativeLevelElevenFunction } from '../functions/OperativeLevelElevenFunction';
import { OperativeLevelFifteenFunction } from '../functions/OperativeLevelFifteenFunction';
import { OperativeLevelNineteenFunction } from '../functions/OperativeLevelNineteenFunction';

export const operativeAbilityList: {
	[key: string]: ClassAbilityListTypes;
} = {
	1: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			"OPERATIVE'S EDGE (EX)": {
				abilityName: "OPERATIVE'S EDGE (EX)",
				abilityDescription:
					'Your diverse training as an operative grants you a +1 insight bonus to initiative checks and to skill checks. This bonus increases by 1 at 3rd level and every 4 levels thereafter.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			SPECIALIZATION: {
				abilityName: 'SPECIALIZAION',
				abilityDescription:
					"Your specialization represents your primary area of expertise. Pick one specialisation upon taking your 1st level of the operative class. Once made, this choice cannot be changed. Descriptions of the specialiations appear on page 94 of the Core Rulebook. Your specialization grants you the Skill Focus feat (see page 161 of the Core Rulebook) in your specialization's associated skills, and you gain a free skill rank in each of those skills at each operative level (this does not allow you to exceed the maximum number of skill ranks in a single skill).",
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'TRICK ATTACK [EX]': {
				abilityName: 'TRICK ATTACK (EX)',
				abilityDescription:
					"You can trick or startle a foe and then attack when they drop their guard. As a full action, you can move up to your speed. Whether or not you moved, you can then make an attack with a melee weapon with the operative special property or with any small arm. Just before making your attack, attempt a Bluff, Intimidate, or Stealth check (or a check associated with your specialization; see page 94 of the Core Rulebook) with a DC equal to 20 + your target's CR. If you succeed at the check, you deal 1d4 additional damage and the target is flat-footed against your attack. This damage increases to 1d8 at 3rd level, to 3d8 at 5th level, and by an additional 1d8 every 2 levels thereafter. You can't use this ability with a weapon that has the unwieldy special property or that requires a full action to make a single attack.",
				abilitySource: 'Operative',
				actionType: [false, false, false, true, false, false],
				usesResolve: 0,
			},
		},
	},
	2: {
		hasOptions: true,
		optionDescription: [
			'As you gain experience, you learn special tricks called operative exploits. You learn your first operative exploit at 2nd level, and you learn an additional exploit every 2 levels thereafter. If an operative exploit allows a saving throw to resist its effects, the DC is equal to 10 + half your operative level + your Dexterity modifier. If it requires an enemy to attempt a skill check, the DC is equal to 10 + 1-1/2 x your operative level + your Dexterity modifier. You cannot learn the same exploit more than once unless it specially says otherwise. Select a Exploit from the list below.',
		],
		options: [{ ...exploitList['2'] }],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'EVASION [EX]': {
				abilityName: 'EVASION [EX]',
				abilityDescription:
					'If you succeed at a Reflex save against an effect that normally has a partial effect on a successful save, you instead suffer no effect. You gain this benefit only when unencumbered and wearing light armor or no armor, and you lose the benefit when you are helpless or otherwise unable to move.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	3: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Operative's Edge Bonus increases to +2. This will automatically be calculated.",
			'Your Trick Attack damage increases to 1d8',
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelThreeFunction(keyID);
		},
		abilities: {
			'Quick Movement (Ex)': {
				abilityName: 'Quick Movement (Ex)',
				abilityDescription:
					'As long as you are unencumbered and wearing light armor or no armor, your land speed increases by 10 feet. At 9th level, your land speed instead increases by 20 feet, and at 15th level, your land speed instead increases by 30 feet.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'Weapon Specialization (Ex)': {
				abilityName: 'Weapon Specialization (Ex)',
				abilityDescription:
					'You gain the Weapon Specialization feat as a bonus feat for each weapon type with which this class grants you proficiency.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	4: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any you may already have)',
		],
		options: [{ ...exploitList['2'] }],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Debilitating Trick (Ex)': {
				abilityName: 'Debilitating Trick (Ex)',
				abilityDescription:
					'When you succeed at both the skill check and attack roll of your trick attack, you can make the target flat-footed or off-target until the beginning of your next turn. You might learn exploits that grant you additional options for your debilitating trick, but you can select only one option each time you hit with a trick attack.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	5: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			'Your Trick Attack damage increases to 3d8',
			"You gain the Operative's Exploit given from your Specialization. It will automatically be added to your abilities list.",
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelFiveFunction(keyID);
		},
		abilities: {},
	},
	6: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. You have access to the level 6 exploits as well now. Please select one from the list below. (Keep in mind any you may already have)',
		],
		options: [{ ...exploitList['2'], ...exploitList['6'] }],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	7: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Operative's Edge Bonus increases to +3. This will automatically be calculated.",
			'Your Trick Attack damage increases to 4d8',
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelSevenFunction(keyID);
		},
		abilities: {
			'Specialization Skill Mastery': {
				abilityName: 'Specialization Skill Mastery',
				abilityDescription:
					'You become so confident in certain skills that you can use them reliably even under adverse conditions. When attempting a skill check with a skill in which you have the Skill Focus feat, you can take 10 even if stress or distractions would normally prevent you from doing so.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'Uncanny Agility': {
				abilityName: 'Uncanny Agility',
				abilityDescription:
					"You are immune to the flat-footed condition, and your opponent doesn't gain any bonuses to attack rolls against you from flanking you or attacking you when you're prone. Furthermore, covering fire and harrying fire don't provide any advantage against you.",
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	8: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any you may already have)',
		],
		options: [{ ...exploitList['2'], ...exploitList['6'] }],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Triple Attack (Ex)': {
				abilityName: 'Triple Attack (Ex)',
				abilityDescription:
					'When making a full attack using only melee weapons with the operative special property or small arms, you can make up to three attacks instead of two.',
				abilitySource: 'Operative',
				actionType: [false, false, false, true, false, false],
				usesResolve: 0,
			},
		},
	},
	9: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			'Your Quick Movement bonus increases to 20 ft.',
			'Your Trick Attack damage increases to 5d8',
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	10: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. You have access to the level 10 exploits as well now. Please select one from the list below. (Keep in mind any you may already have)',
		],
		options: [
			{ ...exploitList['2'], ...exploitList['6'], ...exploitList['10'] },
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	11: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Operative's Edge Bonus increases to +4. This will automatically be calculated.",
			'Your Trick Attack damage increases to 6d8',
			'You get your Specialization Power. It will be automatically added to your abilities list.',
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelElevenFunction(keyID);
		},
		abilities: {},
	},
	12: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any you may already have)',
		],
		options: [
			{ ...exploitList['2'], ...exploitList['6'], ...exploitList['10'] },
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	13: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: ['Your Trick Attack damage increases to 7d8'],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Quad Attack (Ex)': {
				abilityName: 'Quad Attack (Ex)',
				abilityDescription:
					'When making a full attack using only melee weapons with the operative special property or small arms, you can make up to four attacks instead of two.',
				abilitySource: 'Operative',
				actionType: [false, false, false, true, false, false],
				usesResolve: 0,
			},
		},
	},
	14: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. You have access to the level 14 exploits as well now. Please select one from the list below. (Keep in mind any in which you may already have)',
		],
		options: [
			{
				...exploitList['2'],
				...exploitList['6'],
				...exploitList['10'],
				...exploitList['14'],
			},
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	15: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Operative's Edge Bonus increases to +5. This will automatically be calculated.",
			'Your Quick Movement bonus increases to 30 ft.',
			'Your Trick Attack damage increases to 8d8',
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelFifteenFunction(keyID);
		},
		abilities: {},
	},
	16: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any in which you may already have)',
		],
		options: [
			{
				...exploitList['2'],
				...exploitList['6'],
				...exploitList['10'],
				...exploitList['14'],
			},
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	17: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: ['Your Trick Attack damage increases to 9d8'],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Double Debilitation (Ex)': {
				abilityName: 'Double Debilitation (Ex)',
				abilityDescription:
					'When you succeed at both the skill check and attack roll of your trick attack, you can apply two of your debilitating trick effects.',
				abilitySource: 'Operative',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	18: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any in which you may already have)',
		],
		options: [
			{
				...exploitList['2'],
				...exploitList['6'],
				...exploitList['10'],
				...exploitList['14'],
			},
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	19: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Operative's Edge Bonus increases to +5. This will automatically be calculated.",
			'Your Trick Attack damage increases to 10d8',
		],
		hasFunction: true,
		functionToRun: (keyID) => {
			OperativeLevelNineteenFunction(keyID);
		},
		abilities: {},
	},
	20: {
		hasOptions: true,
		optionDescription: [
			'You gain another Operative Exploit. Please select one from the list below. (Keep in mind any in which you may already have)',
		],
		options: [
			{
				...exploitList['2'],
				...exploitList['6'],
				...exploitList['10'],
				...exploitList['14'],
			},
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Supreme Operative (Ex)': {
				abilityName: 'Supreme Operative (Ex)',
				abilityDescription:
					"Whenever you attempt a skill check with your specialization's associated skills, you can roll twice and take the higher result. Once per day as a move action, you can temporarily trade out one of your operative exploits for another operative exploit requiring the same level or lower. This trade lasts 24 hours. If the exploit you trade away is a prerequisite for any of your other abilities, you lose all abilities that require it as a prerequisite for the duration.",
				abilitySource: 'Operative',
				actionType: [false, true, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
};
