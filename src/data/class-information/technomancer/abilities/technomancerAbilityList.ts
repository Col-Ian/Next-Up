/*

			'': {
				abilityName: '',
				abilityDescription:
					"",
				abilitySource: 'Technomancer',
				actionType: [false, false, false, false, false, false],
				usesResolve: 0,
			},
*/

import TechloreBonus from '../functions/TechloreBonus';
import { magicHackList } from './magicHackList';
import { technomaticTalentList } from './technomaticTaletList';

export const technomancerAbilityList: { [key: string]: ClassAbilityListTypes } =
	{
		1: {
			hasOptions: false,
			optionDescription: [],
			options: [],
			additionalInfo: [],
			hasFunction: false,
			functionToRun: () => {},
			abilities: {
				Spells: {
					abilityName: 'Spells',
					abilityDescription:
						"You cast spells drawn from the technomancer spell list (see page 338 of the Core Rulebook). To learn or cast a spell, you must have an Intelligence score equal to at least 10 + the spell's level. The Difficulty Class for a saving throw against your spell is 10 + the spell's level + your Intelligence modifier.\nYou can cast only a certain number of spells of each spell level per day. Your number of spells per day is given on Table 4-10: Technomancer (Core Rulebook page 119). In addition, you receive bonus spells per day if you have an Intelligence modifier of +1 or higher, as shown on Table 4-11: Technomancer Bonus Spells (Core Rulebook page 120)—note that you only receive these bonus spells once you can cast spells of that level normally. You can also cast 0-level spells. These spells are cast like any other spell, but there is no limit to how many 0-level spells you can cast each day.\nYour selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new technomancer level, you learn one or more new spells, as indicated on Table 4-12: Technomancer Spells Known (Core Rulebook page 120). Unlike spells per day, the number of spells you know isn't affected by your Intelligence modifier.\nEvery time you gain a level, you can swap out one spell you already know and learn a single new spell of the same level in its place. In effect, you lose the old spell in exchange for the new one. You must choose whether or not to swap the spell at the same time you gain new spells known for the level.\nYou can cast any technomancer spell you know at any time, assuming you have not yet used up your allotment of spells per day for the spell's level. You can also cast a spell using a higher-level spell slot. For instance, if you want to cast a 1st-level spell but have used up all your 1st-level spells for the day, you can use a spell from a 2nd-level slot instead if you have one.\nYou can also decipher magical inscriptions that would otherwise be unintelligible or, as a full action, identify any spells encoded in a spell gem. This does not normally invoke the magic contained within, although it may do so in the case of a cursed or trapped spell gem.",
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},
				'Spell Cache (Su)': {
					abilityName: 'Spell Cache (Su)',
					abilityDescription:
						"As the culmination of your early study of the fundamental forces of the galaxy, you have created a spell cache that allows you to store and access spells. Your spell cache could be a device such as a handheld computer or technological implant; an item such as a ring or staff; or a symbol such as a brand, tattoo, or other permanent modification to your body. While you don't need your spell cache to cast your spells, once per day, you can activate your spell cache to cast any one spell you know and are capable of casting, even if you've expended all your spell slots for that spell's level.\nIf your spell cache is damaged, it is restored to full Hit Points the next time you regain your daily allotment of spell slots. If the spell cache is lost or destroyed, you can replace it after 1 week with a special ritual that takes 8 hours to complete.",
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},
				'Technomantic Talent': {
					abilityName: 'Technomantic Talent',
					abilityDescription:
						"As you practice weaving spellcode, you can affect not only your own spellcasting, but others' as well. At 1st level, pick a school of magic and gain the listed effect. Unless otherwise noted, you can use each effect twice per day as a reaction when you, an ally, or an enemy within 60 feet casts a spell in that school, applying the effect to that triggering spell. At 4th level and every three levels thereafter, you can invest in your technomantic talents, either increasing the effect of a school you've already chosen or choosing a new school.",
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},
			},
		},
		2: {
			hasOptions: true,
			optionDescription: [
				'You have carefully studied the forces that define magic and can manipulate them. You learn your first magic hack at 2nd level, and you learn an additional magic hack every 3 levels thereafter. When casting a spell, you can apply no more than one magic hack that affects the attributes of a spell (such as distant spell or extended spell). If a magic hack allows a saving throw to resist its effects, the DC is equal to 10 + half your technomancer level + your Intelligence modifier. Select your first Magic Hack from the list below.',
			],
			options: [{ ...magicHackList['2'] }],
			additionalInfo: [],
			hasFunction: false,
			functionToRun: () => {},
			abilities: {
				Deconstructivist: {
					abilityName: 'Deconstructivist',
					abilityDescription:
						'Your insights into the intersection of technology and magic make you especially formidable to technomagical beings. The DCs of your spells are 2 higher for constructs with the technological subtype, and 1 higher for non-construct creatures with the technological subtype. This stacks with increases to your DCs from the Spell Focus feat but not any other sources; if you have two different DCs available, use the highest.',
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},
			},
		},
		3: {
			hasOptions: false,
			optionDescription: [],
			options: [],
			additionalInfo: [],
			hasFunction: false,
			functionToRun: (keyID) => {
				TechloreBonus(keyID);
			},
			abilities: {
				'Spell Focus': {
					abilityName: 'Spell Focus',
					abilityDescription:
						'You gain Spell Focus as a bonus feat.\nThe DC of spells you cast increases by 1. At 11th level, the DC of your spells instead increases by 2, and at 17th level, the DC of spells you cast instead increases by 3. This bonus does not apply to spell-like abilities.',
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},

				'Techlore (Ex)': {
					abilityName: 'Techlore (Ex)',
					abilityDescription:
						'You rewire your mind to give you greater insight into the nature of magic and technology. You gain a +1 insight bonus to Computers and Mysticism checks. This bonus increases by 1 at 6th level and every 3 levels thereafter.',
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},

				'Weapon Specialization (Ex)': {
					abilityName: 'Weapon Specialization (Ex)',
					abilityDescription:
						'You gain the Weapon Specialization feat as a bonus feat for each weapon type this class grants you proficiency with.',
					abilitySource: 'Technomancer',
					actionType: [false, false, false, false, false, false],
					usesResolve: 0,
				},
			},
		},
		4: {
			hasOptions: true,
			optionDescription: [
				'You get to to choose a technomantic talent at level 4. If you select one previously selected, take note of the changes that you should implement where needed.',
			],
			options: [{ ...technomaticTalentList }],
			additionalInfo: [],
			hasFunction: false,
			functionToRun: () => {},
			abilities: {},
		},
		5: {
			hasOptions: false,
			optionDescription: [],
			options: [],
			additionalInfo: [],
			hasFunction: false,
			functionToRun: () => {},
			abilities: {},
		},
		6: {
			hasOptions: false,
			optionDescription: [],
			options: [],
			additionalInfo: [],
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
			additionalInfo: [],
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
			additionalInfo: [],
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
			additionalInfo: [],
			hasFunction: false,
			functionToRun: () => {},
			abilities: {},
		},
		19: {
			hasOptions: false,
			optionDescription: [],
			options: [],
			additionalInfo: [],
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
