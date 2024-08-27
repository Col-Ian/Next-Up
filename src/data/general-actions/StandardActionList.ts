/*
{
		abilityName: '',
		abilityDescription: '',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
*/

export const StandardActionList: AbilityListTypes[] = [
	{
		abilityName: 'Activate an Item',
		abilityDescription:
			"Many technological and magic items, such as a cybernetic arm, don't need to be activated. Certain items, however, do need to be activated to have an effect. Unless otherwise noted, activating such an item is a standard action.",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Attack',
		abilityDescription: 'Making a single attack is a standard action.',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Concentrate to Maintain a Spell',
		abilityDescription:
			'Some spells require continued concentration to keep them going. Concentrating to maintain a spell is a standard action (see Duration on page 270 of the CRB for more information about concentration).',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Covering Fire',
		abilityDescription:
			'You can use your standard action to make a ranged attack that provides covering fire for an ally. Make a ranged attack roll against AC 15. If you hit, you deal no damage but the selected ally gains a +2 circumstance bonus to AC against the next attack from a creature in your line of effect (see page 271 of the CRB), so long as that attack occurs before your next turn.',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Dismiss a Spell',
		abilityDescription:
			'Dismissing an active spell is a standard action (see Duration on page 270 of the CRB for more information about dismissible spells).',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Feint',
		abilityDescription:
			"You can use your standard action to feint by attempting a Bluff check. The DC of this check is equal to either 10 + your opponent's Sense Motive total skill bonus or 15 + 1-1/2 x the opponent's CR, whichever is greater. You can't feint against a creature that lacks an Intelligence score, and you cannot take 10 or take 20 (see page 133 of the CRB) on a Bluff check to feint. When you successfully feint, you treat your opponent as flat-footed for your next attack against him before the end of your next turn.",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Fight Defensively',
		abilityDescription:
			'You can fight defensively when attacking as part of a standard action. If you do, you take a -4 penalty to attacks and gain a +2 bonus to AC until the start of your next turn.',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Harrying Fire',
		abilityDescription:
			'You can use your standard action to make a ranged attack that distracts a foe in your line of effect. Make an attack roll against AC 15. If you hit, you deal no damage, but the next ally to attack that foe gains a +2 circumstance bonus to their next attack roll, as long as that attack occurs before your next turn.',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Total Defense',
		abilityDescription:
			"You can defend yourself as a standard action. Starting at the beginning of this action, you get a +4 bonus to your Armor Class until the start of your next turn. You can't combine total defense with other actions that increase your AC, nor can you make attacks of opportunity while benefiting from total defense.",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Ready an Action',
		abilityDescription:
			"You can prepare to take an action when a certain trigger occurs by using a standard action. Decide on a standard, move, or swift action and a trigger. You can take the action you chose when the trigger happens. This changes your initiative count to the current initiative count for the remainder of the combat. If you used a reaction on your previous turn and then chose to ready an action, you still regain your reaction at the beginning of your original turn, not when you take your readied action.\nIf your readied action is purely defensive, such as choosing the total defense action if a foe you are facing shoots at you, it occurs just before the event that triggered it. If the readied action is not a purely defensive action, such as shooting a foe if he shoots at you, it takes place immediately after the triggering event. If you come to your next turn and have not yet performed your readied action, you don't get to take the readied action (though you can ready the same action again).",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
];
