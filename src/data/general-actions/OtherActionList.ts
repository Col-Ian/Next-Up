export const OtherActionlist: AbilityListTypes[] = [
	{
		abilityName: 'Combat Banter',
		abilityDescription:
			"While actually trying to convince someone using a skill takes actions, banter and quips are a hallmark of science fantasy stories, and the game wouldn't flow naturally if you could only talk in initiative order. Thus, you can speak an amount that makes sense, at the GM's discretion, without spending any of your actions, even if it isn't your turn.",
		abilitySource: '',
		actionType: [false, false, false, false, false, true],
		usesResolve: 0,
	},
	{
		abilityName: 'Delay',
		abilityDescription:
			"If you aren't sure what to do when it's your turn, you can delay taking an action until other characters have taken their turns. You must declare that you are delaying before taking any actions on your turn (this does not require spending any of your actions). After any creature takes its turn in the initiative order, you can come out of delay and take your turn. This changes your initiative count to the current initiative count for the remainder of the combat. If you used a reaction on your previous turn and then chose to delay, you still regain your reaction at the beginning of your original turn, not when you take your delayed actions.",
		abilitySource: '',
		actionType: [false, false, false, false, false, true],
		usesResolve: 0,
	},
	{
		abilityName: 'Drop an Item',
		abilityDescription:
			"You can drop any item or items that you're holding into your square or into an adjacent square at any time without spending any actions.",
		abilitySource: '',
		actionType: [false, false, false, false, false, true],
		usesResolve: 0,
	},
];
