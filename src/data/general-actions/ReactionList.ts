export const ReactionList: AbilityListTypes[] = [
	{
		abilityName: 'Attack of Opportunity',
		abilityDescription:
			"An attack of opportunity is a special melee attack you can make against a target you threaten (usually an adjacent opponent), even if it is not your turn. See Reach and Threatened Squares on page 255 of the CRB for more details on threatening. You can use your reaction to make an attack of opportunity against an opponent in any of these three cases:\n\nWhen you threaten a space and the opponent moves or is moved out of that space in any way other than a guarded step or withdraw action, you can use your reaction to make a melee attack against the opponent.\n\nWhen the opponent in a space you threaten makes a ranged attack, you can use your reaction to make a melee attack against the opponent.\n\nWhen the opponent in a space you threaten casts a spell or uses a spell-like ability, you can use your reaction to make a melee attack against the opponent. However, some spells or spell-like abilities state in their descriptions that they don't provoke attacks of opportunity, so be sure to confirm that the enemy has provoked your reaction before you take it.\n\nAttacks of opportunity are always resolved before the action that triggers them. You don't take a penalty to the attack roll when making an attack of opportunity in the same round you took a full attack, but you do take any other attack penalties that would normally apply to your attacks. Making an attack of opportunity does not affect your ability to make attacks normally when it is your turn.",
		abilitySource: '',
		actionType: [false, false, false, false, true, false],
		usesResolve: 0,
	},
];
