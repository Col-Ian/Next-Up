export const technomaticTalentList: { [key: string]: AbilityListTypes } = {
	Abjuration: {
		abilityName: 'Abjuration',
		abilityDescription:
			"You increase (or decrease) either the duration or caster level check of an abjuration spell as though the caster level of its caster were 2 levels higher (or lower). Each subsequent time you choose this as a technomantic talent, you can increase (or decrease) either duration as though its caster level were an additional 2 higher (or lower). This effect can't cause a spell's duration to last longer than 24 hours or be reduced to less than 1 round.",
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Conjuration: {
		abilityName: 'Conjuration',
		abilityDescription:
			"You increase or decrease the damage or healing done by a conjuration spell by one die (of the same size as the original spell). Each subsequent time you choose this as a technomantic talent, add 1/3 your level to the amount of damage or healing added or reduced. This effect can't reduce damage or healing to less than 1.",
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Divination: {
		abilityName: 'Divination',
		abilityDescription:
			"You increase (or decrease) the range or duration of a divination spell as though its caster level were 2 levels higher (or lower). Each subsequent time you choose this as a technomantic talent, you can increase (or decrease) either the range or duration as though its caster level were an additional 2 higher (or lower). This effect can't cause a spell's duration to last longer than 24 hours or be reduced to less than 1 round.",
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Enchantment: {
		abilityName: 'Enchantment',
		abilityDescription:
			'You increase (or decrease) the DCs of an enchantment spell by 1. Each subsequent time you choose this as a technomantic talent, you increase (or decrease) the DC by 1, to a maximum amount of +/-3. This does not stack with increases to DCs from other sources; you use the highest available.',
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Evocation: {
		abilityName: 'Evocation',
		abilityDescription:
			'Instead of rolling damage dice normally for an evocation spell, you can first set one die to its maximum (or minimum) value. Each subsequent time you choose this as a technomantic talent, you can set another die to its maximum (or minimum) value, up to a maximum of 4 dice.',
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Illusion: {
		abilityName: 'Illusion',
		abilityDescription:
			'As a constant effect, you automatically gain a saving throw to recognize illusions within 60 feet. The first two times you encounter an illusion per day, reduce the DC of the saving throw to disbelieve it by 2. Each subsequent time you choose this as a technomantic talent, reduce those DCs by an additional 2.',
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Necromancy: {
		abilityName: 'Necromancy',
		abilityDescription:
			'Twice per day when a d20 is rolled for a necromancy spell (such as a saving throw or attack roll), you can reroll that d20 as a reaction. Each subsequent time you choose this as a technomantic talent, you gain an additional use of this ability, up to a maximum of 4 times per day.',
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
	Transmutation: {
		abilityName: 'Transmutation',
		abilityDescription:
			"You increase (or decrease) the duration of a transmutation spell or its caster level to bypass spell resistance as though its caster level were 2 levels higher (or lower). Each subsequent time you choose this as a technomantic talent, you can increase (or decrease) the duration as though its caster level were an additional 3 higher (or lower). This effect can't cause a spell's duration to last longer than 24 hours or be reduced to less than 1 round.",
		abilitySource: 'Technomancer (Technomantic Talent)',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
};
