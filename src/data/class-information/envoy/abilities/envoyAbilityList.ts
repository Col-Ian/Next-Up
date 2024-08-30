/*

	1: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
            '': {
				abilityName: '',
				abilityDescription:
					'',
				abilitySource: '',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
        },
	},
			
*/

import { envoyImpoveisationList } from './envoyImprovisationList';
import { expertiseTalentList } from './expertiseTalentList';

export const envoyAbilityList: { [key: string]: ClassAbilityListTypes } = {
	1: {
		hasOptions: false,
		optionDescription: [''],
		options: [],
		additionalInfo: [''],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			Expertise: {
				abilityName: 'Expertise',
				abilityDescription:
					'You are an expert at dealing with challenges that test your skills, be the challenges social or otherwise. At 1st level, when attempting a Sense Motive check, you can roll 1d6 (your expertise die) and add the result of the roll to your check as an insight bonus. You can use this and other expertise abilities as long as you have at least 1 Resolve Point remaining. At 5th level, anytime you roll your expertise die, you gain a +1 bonus to the result. At 9th, 17th, and 20th levels, this bonus increases by 1. At 13th level, you roll 1d8 as your expertise die instead of 1d6.\nBeginning at 9th level, you have even greater expertise with skills to which you can add your expertise die that you have also selected with the Skill Focus feat. For each such skill, once per day when rolling your expertise die to add to that skill, you may roll the expertise die twice and take the better of the two results.',
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'Skill Expertise': {
				abilityName: 'Skill Expertise',
				abilityDescription:
					'At 1st level and every 4 levels thereafter, you can use expertise with one additional class skill. You must have at least 1 rank in a skill to select it, and it must come from the following list: Bluff (Cha), Computers (Int), Culture (Int), Diplomacy (Cha), Disguise (Cha), Engineering (Int), Intimidate (Cha), and Medicine (Int).',
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'Envoy Improvisation': {
				abilityName: 'Envoy Improvisation',
				abilityDescription:
					'As you gain experience, you learn envoy improvisations—little tricks that bolster allies, confound enemies, or change the ebb and flow of battle using guile, inspiration, or luck. You learn your first envoy improvisation at 1st level, and you learn an additional improvisation at 2nd level and every 2 levels thereafter.\nIf an improvisation allows you to grant an effect to an ally, you cannot grant yourself that effect unless the improvisation states otherwise. If an envoy improvisation allows a saving throw to resist its effects, the DC is equal to 10 + half your envoy level + your Charisma modifier.\nSome envoy improvisations are language-dependent, mind-affecting, sense-dependent, or some combination of any or all of these.',
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	2: {
		hasOptions: true,
		optionDescription: [
			'You gain another Improvisation at level 2. Please select one from the list below.',
			"Signature Support requires you select one of the following Improvisations. Please select one you don't already have.",
		],
		options: [
			{ ...envoyImpoveisationList['1'] },
			{
				'CLEVER FEINT (EX)': {
					abilityName: 'CLEVER FEINT (EX)',
					abilityDescription:
						"As a standard action, you can fake out an enemy within 60 feet, making that enemy open to your attacks. Attempt a Bluff check with the same DC as a check to feint against that enemy (though this isn't a standard check to feint, so Improved Feint and Greater Feint don't apply). Even if you fail, that enemy is flat-footed against your attacks (see page 276) until the end of your next turn. If you succeed, the enemy is also flat-footed against your allies' attacks until the end of your next turn. You can't use clever feint against a creature that lacks an Intelligence score.NAt 6th level, you can spend 1 Resolve Point to treat a failed Bluff check for clever feint as if it were a success. Also at 6th level, due to Signature Support, you can use the chosen improvisation as though you had spent 1 Resolve Point without having to spend a Resolve Point. You can do this once per day for every 6 envoy levels you have.",
					abilitySource: 'Envoy (Signature Support)',
					actionType: [true, false, false, false, false, false],
					usesResolve: 0,
				},
				'DISPIRITING TAUNT (EX)': {
					abilityName: 'DISPIRITING TAUNT (EX)',
					abilityDescription:
						"As a standard action, you can taunt an enemy within 60 feet. Attempt an Intimidate check with the same DC as a check to demoralize that enemy (though this isn't a check to demoralize, so you can't use abilities that would apply to a demoralization attempt, like the rattling presence expertise talent). If you fail, that enemy is off-target (see page 276) until the end of your next turn. If you succeed, that enemy is instead shaken (see page 277 of the Core Rulebook) until the end of your next turn. This is an emotion and fear effect.NAt 6th level, you can spend 1 Resolve Point to treat a failed Intimidate check for dispiriting taunt as if it were a success. Also at 6th level, due to Signature Support, you can use the chosen improvisation as though you had spent 1 Resolve Point without having to spend a Resolve Point. You can do this once per day for every 6 envoy levels you have.",
					abilitySource: 'Envoy (Signature Support)',
					actionType: [true, false, false, false, false, false],
					usesResolve: 0,
				},
				"GET 'EM (EX)": {
					abilityName: "GET 'EM (EX)",
					abilityDescription:
						"As a move action, you can choose one enemy within 60 feet. Until the start of your next turn, you and your allies gain a +1 morale bonus to attack rolls made against that enemy. The bonus persists even if the enemy moves beyond 60 feet or out of line of sight or hearing.\nAt 6th level, you can spend 1 Resolve Point to grant this bonus to attack rolls and damage rolls against all enemies who are within 60 feet.\nIf you also spend 1 Resolve Point when using improved get 'em, you grant +2 morale bonus to attack and damage rolls against all enemies who are within 60 feet. Also at 6th level, due to Signature Support, you can use the chosen improvisation as though you had spent 1 Resolve Point without having to spend a Resolve Point. You can do this once per day for every 6 envoy levels you have.",
					abilitySource: 'Envoy (Signature Support)',
					actionType: [false, true, false, false, false, false],
					usesResolve: 0,
				},
				'INSPIRING BOOST (EX)': {
					abilityName: 'INSPIRING BOOST (EX)',
					abilityDescription:
						"As a standard action, you can signal an ally within 30 feet who has taken damage from any attack made by a significant enemy (see page 242 of the Core Rulebook) at any point after your last turn ended. That ally regains a number of Stamina Points (up to his maximum) equal to twice your envoy level + your Charisma modifier; at 15th level, this increases to three times your envoy level + your Charisma modifier. Once an ally has benefited from your inspiring boost, that ally can't gain the benefits of your inspiring boost again until he takes a 10-minute rest to recover Stamina Points.NAt 6th level, you can spend 1 Resolve Point to add your envoy level to the number of Stamina Points regained. Also at 6th level, due to Signature Support, you can use the chosen improvisation as though you had spent 1 Resolve Point without having to spend a Resolve Point. You can do this once per day for every 6 envoy levels you have.",
					abilitySource: 'Envoy (Signature Support)',
					actionType: [true, false, false, false, false, false],
					usesResolve: 0,
				},
			},
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Inspiring Combo ( Ex)': {
				abilityName: 'Inspiring Combo ( Ex)',
				abilityDescription:
					"You have learned to synergize your combat actions with acts that inspire your allies or adapt to the current tactical situation. As a full action, you can both make a single attack and use one envoy improvisation you know. The improvisation must be one you can use as a standard action, move action, or swift action. You choose in which order to resolve these actions. Once you use this ability, roll 1d10 and subtract your Charisma modifier; you cannot use this ability again for a number of rounds equal to the result (minimum 1 round).\nAt 10th level, as a full action, you can instead make either two attacks and use an envoy improvisation, or one attack and use two different envoy improvisations. You take a -4 penalty to your attack rolls until the end of the turn, and you treat your envoy level as 4 lower for the purpose of resolving the improvisations' effects. If you use an improvisation that also allows you to make an attack, you increase the penalty to attack rolls to -6.\nAt 19th level, you reduce the penalty for making multiple attacks with this ability by 2, and you treat your envoy level as only 2 lower for the purpose of resolving the improvisations' effects.",
				abilitySource: 'Envoy',
				actionType: [false, false, false, true, false, false],
				usesResolve: 0,
			},

			'Signature Support ( Ex)': {
				abilityName: 'Signature Support ( Ex)',
				abilityDescription:
					"You've developed a knack for giving a specific type of mid-combat encouragement. At 2nd level, choose one of the following envoy improvisations: clever feint, dispiriting taunt, get 'em, or inspiring boost. If you do not have that improvisation already, you gain it. If you do have it, you can instead gain a different improvisation for which you qualify.\nAt 6th level, you can use the chosen improvisation as though you had spent 1 Resolve Point without having to spend a Resolve Point. You can do this once per day for every 6 envoy levels you have.",
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	3: {
		hasOptions: true,
		optionDescription: ['Select your epertise talent from the list below.'],
		options: [{ ...expertiseTalentList }],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {
			'Expertise Talent': {
				abilityName: 'Expertise Talent',
				abilityDescription:
					'At 3rd level and every 4 levels thereafter, you choose an expertise talent, which gives you an extra option when using a skill with which you have expertise.',
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
			'Weapon Specialization': {
				abilityName: 'Weapon Specialization',
				abilityDescription:
					'You gain the Weapon Specialization feat as a bonus feat for each weapon type with which this class grants you proficiency.',
				abilitySource: 'Envoy',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
		},
	},
	4: {
		hasOptions: true,
		optionDescription: [
			'You gain another Improvisation at level 4, as well as access to the level 4 Improvisations. Please select one from the list below.',
		],
		options: [
			{ ...envoyImpoveisationList['1'], ...envoyImpoveisationList['4'] },
		],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	5: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			'Your expertise die is now 1d6+1',
			'You can select a new skill for Skill Expertise. Please see the ability in your list for more information',
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	6: {
		hasOptions: false,
		optionDescription: [
			'You gain another Improvisation at level 4, as well as access to the level 6 Improvisations. Please select one from the list below.',
		],
		options: [
			{
				...envoyImpoveisationList['1'],
				...envoyImpoveisationList['4'],
				...envoyImpoveisationList['6'],
			},
		],
		additionalInfo: [
			'Once per day, you can use the chosen improvisation from Signature Support as though you had spent 1 Resolve Point without having to spend a Resolve Point.',
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	7: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	8: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	9: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	10: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Inspiring Combo now instead allows you to make either two attacks and use an envoy improvisation, or one attack and use two different envoy improvisations. You take a -4 penalty to your attack rolls until the end of the turn, and you treat your envoy level as 4 lower for the purpose of resolving the improvisations' effects. If you use an improvisation that also allows you to make an attack, you increase the penalty to attack rolls to -6.",
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	11: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	12: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			'Twice per day, you can use the chosen improvisation from Signature Support as though you had spent 1 Resolve Point without having to spend a Resolve Point.',
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	13: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	14: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	15: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	16: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	17: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	18: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			'Three times per day, you can use the chosen improvisation from Signature Support as though you had spent 1 Resolve Point without having to spend a Resolve Point.',
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	19: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [
			"Your Inspiring Combo reduces the penalty for making multiple attacks with it by 2, and you treat your envoy level as only 2 lower for the purpose of resolving the improvisations' effects.",
		],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
	20: {
		hasOptions: false,
		optionDescription: [],
		options: [],
		additionalInfo: [],
		hasFunction: false,
		functionToRun: () => {},
		abilities: {},
	},
};
