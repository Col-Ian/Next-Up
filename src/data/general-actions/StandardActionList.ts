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
		abilityName: 'Bull Rush (Combat Maneuver)',
		abilityDescription:
			"You knock the target back 5 feet, plus 5 additional feet for every 5 by which the result of your attack roll exceeds the target's KAC + 8. If an obstacle is in the way, the target stops at the obstacle instead.",
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
		abilityName: 'Dirty Trick (Combat Maneuver)',
		abilityDescription:
			"You make an unorthodox attack to briefly hinder the target. A dirty trick could be throwing sand in the target's eyes, jamming a rock into their actuators, or any other improvised action designed to put your opponent at a disadvantage. Your target is blinded, deafened, entangled, off-target, shaken, or sickened (your choice) for 1 round, plus 1 additional round for every 5 by which the result of your attack roll exceeds the target's KAC + 8 (see Conditions beginning on page 273 for information on these conditions). The target can remove the condition as a move action. A dirty trick is normally a melee attack, but a GM can allow certain actions to count as dirty tricks at range, in which case you take a '2 penalty to your attack roll for every 5 feet between you and the target.",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Disarm (Combat Maneuver)',
		abilityDescription:
			"You knock an item the target is holding out of the target's hands and onto the ground. If you have a hand free, you can automatically grab the item with your hand before it falls.",
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
		abilityName: 'Grapple (Combat Maneuver)',
		abilityDescription:
			"You hold the target in place. You must have at least one hand free to perform a grapple combat maneuver. Your target has the grappled condition, meaning they can't move from their current space and takes further penalties until they either uses a standard action to attempt a grapple combat maneuver to grapple you (giving you the grappled condition) or uses the escape task of the Acrobatics skill to break free. If the result of your attack roll equals or exceeds the target's KAC + 13, the target is instead pinned for the same duration, and they can't take any actions that involve moving her limbs other than to attempt to escape.\nThe grappled or pinned condition lasts until the end of your next turn, unless you renew it on your next turn with another grapple combat maneuver. The condition ends immediately if you move away. As long as you have one target grappled or pinned, you cannot attempt to grapple another. The grappled and pinned conditions are further detailed in Conditions on pages 276-277 of the CRB.\nWhen you renew a grapple, you can remove one item from the target's body that can be easily accessed, including most weapons and equipment (but not worn armor). Doing so immediately ends the grapple.",
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
	{
		abilityName: 'Reposition (Combat Maneuver)',
		abilityDescription:
			"You change the target's position to a different location still within your reach and within 5 feet of its original placement. You can move the target 5 additional feet for every 5 by which the result of your attack roll exceeds the target's KAC + 8, but all movement must remain within your reach. You cannot move the target past an obstacle.",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Sunder (Combat Maneuver)',
		abilityDescription:
			"You deal damage to one object held in the target's hand or accessible on its body. The object must be something that could be drawn easily by the target as a move action (see Draw or Sheathe a Weapon on page 247). The damage is reduced by an amount equal to the object's hardness (see Smashing an Object page 409 of the Core Rulebook).",
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Trip (Combat Maneuver)',
		abilityDescription:
			'You knock the target prone if it is on the ground. A target in the air instead descends 10 feet, falling prone if this causes it to fall to the ground. A target in zero gravity is instead knocked offkilter. The prone and off-kilter conditions are further detailed on pages 276-277.',
		abilitySource: '',
		actionType: [true, false, false, false, false, false],
		usesResolve: 0,
	},
];
