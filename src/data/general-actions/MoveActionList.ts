export const MoveActionList: AbilityListTypes[] = [
	{
		abilityName: 'Crawl',
		abilityDescription:
			'You can crawl 5 feet as a move action. A crawling character is considered prone.',
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Draw or Sheathe a Weapon',
		abilityDescription:
			'Drawing a weapon so that you can use it in combat or putting it away so that you have a free hand requires a move action. This action includes activating or deactivating the weapon. This also applies to weapon-like objects that are easily accessible, such as remote controls and most tools or sensors you can carry and use with one hand. If your weapon or weapon-like object is stored in a pack or otherwise out of easy reach, you must instead retrieve it as a stored item before you can use it (see Manipulate an Item below).\nException: If you have a base attack bonus of +1 or higher, you can combine drawing or sheathing a weapon or weapon-like object with moving up to your speed as a single move',
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Guarded Step',
		abilityDescription:
			"You can carefully step 5 feet as a move action. This movement doesn't provoke attacks of opportunity (see page 248 of the CRB), even if you're in a threatened square (see page 255 of the CRB).",
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Manipulate an Item',
		abilityDescription:
			'Moving or manipulating an item is usually a move action. This includes retrieving or putting away a stored item, picking up an item, moving a heavy object, and opening a door.',
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Move Your Speed',
		abilityDescription:
			"The simplest move action is moving up to your speed (see Speed on page 255 of the CRB for more information). Many nonstandard modes of movement are also covered under this action, including burrowing (using your natural burrow speed, if you have one), climbing and swimming (using either the Athletics skill or your natural climb or swim speed, if you have one), or flying (using the Acrobatics skill if you have either access to flight or a natural fly speed). See Additional Movement Types on page 258 of the CRB for more details. Some full actions (such as the operative's trick attack) allow you to move as well, which act as moving up to your speed.",
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Reload',
		abilityDescription:
			"Unless stated otherwise, reloading is a move action that includes grabbing ammunition you have readily available. Some weapons require different actions to reload; see the weapon's description.",
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
	{
		abilityName: 'Stand Up',
		abilityDescription:
			'This special form of move action allows you to stand up from a prone position.',
		abilitySource: '',
		actionType: [false, true, false, false, false, false],
		usesResolve: 0,
	},
];
