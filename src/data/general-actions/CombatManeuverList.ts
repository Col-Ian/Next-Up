export const CombatManeuverList: AbilityListTypes[] = [
	{
		abilityName: 'Bull Rush',
		abilityDescription:
			"You knock the target back 5 feet, plus 5 additional feet for every 5 by which the result of your attack roll exceeds the target's KAC + 8. If an obstacle is in the way, the target stops at the obstacle instead.",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Dirty Trick',
		abilityDescription:
			"You make an unorthodox attack to briefly hinder the target. A dirty trick could be throwing sand in the target's eyes, jamming a rock into their actuators, or any other improvised action designed to put your opponent at a disadvantage. Your target is blinded, deafened, entangled, off-target, shaken, or sickened (your choice) for 1 round, plus 1 additional round for every 5 by which the result of your attack roll exceeds the target's KAC + 8 (see Conditions beginning on page 273 for information on these conditions). The target can remove the condition as a move action. A dirty trick is normally a melee attack, but a GM can allow certain actions to count as dirty tricks at range, in which case you take a '2 penalty to your attack roll for every 5 feet between you and the target.",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Disarm',
		abilityDescription:
			"You knock an item the target is holding out of the target's hands and onto the ground. If you have a hand free, you can automatically grab the item with your hand before it falls.",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Grapple',
		abilityDescription:
			"You hold the target in place. You must have at least one hand free to perform a grapple combat maneuver. Your target has the grappled condition, meaning they can't move from their current space and takes further penalties until they either uses a standard action to attempt a grapple combat maneuver to grapple you (giving you the grappled condition) or uses the escape task of the Acrobatics skill to break free. If the result of your attack roll equals or exceeds the target's KAC + 13, the target is instead pinned for the same duration, and they can't take any actions that involve moving her limbs other than to attempt to escape.\nThe grappled or pinned condition lasts until the end of your next turn, unless you renew it on your next turn with another grapple combat maneuver. The condition ends immediately if you move away. As long as you have one target grappled or pinned, you cannot attempt to grapple another. The grappled and pinned conditions are further detailed in Conditions on pages 276-277 of the CRB.\nWhen you renew a grapple, you can remove one item from the target's body that can be easily accessed, including most weapons and equipment (but not worn armor). Doing so immediately ends the grapple.",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Reposition',
		abilityDescription:
			"You change the target's position to a different location still within your reach and within 5 feet of its original placement. You can move the target 5 additional feet for every 5 by which the result of your attack roll exceeds the target's KAC + 8, but all movement must remain within your reach. You cannot move the target past an obstacle.",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Reposition (Full Action)',
		abilityDescription:
			'If you reposition a creature as a full action, you can move a distance equal to the distance you repositioned your target (up to your move speed), dragging the target along with you.',
		abilitySource: '',
		actionType: ['Full Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Sunder',
		abilityDescription:
			"You deal damage to one object held in the target's hand or accessible on its body. The object must be something that could be drawn easily by the target as a move action (see Draw or Sheathe a Weapon on page 247). The damage is reduced by an amount equal to the object's hardness (see Smashing an Object page 409 of the Core Rulebook).",
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
	{
		abilityName: 'Trip',
		abilityDescription:
			'You knock the target prone if it is on the ground. A target in the air instead descends 10 feet, falling prone if this causes it to fall to the ground. A target in zero gravity is instead knocked offkilter. The prone and off-kilter conditions are further detailed on pages 276-277.',
		abilitySource: '',
		actionType: ['Standard Action'],
		usesResolve: 0,
	},
];
