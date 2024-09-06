export const envoyImpoveisationList: {
	[key: string]: {
		[key: string]: AbilityListTypes;
	};
} = {
	1: {
		'BRACE YOURSELVES (EX)': {
			abilityName: 'Brace Yourselves (Ex)',
			abilityDescription:
				'As a move action, you can choose one enemy within 60 feet. Until the start of your next turn, you and your allies gain a +1 morale bonus to AC if adjacent to at least one other ally, as you all position yourselves so that your armor protects you better. The bonus persists even if the enemy moves beyond 60 feet or out of line of sight or hearing.\nAt 6th level, you can spend 1 Resolve Point to grant this bonus to AC against attacks made by all enemies within 60 feet.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'CLEVER FEINT (EX)': {
			abilityName: 'CLEVER FEINT (EX)',
			abilityDescription:
				"As a standard action, you can fake out an enemy within 60 feet, making that enemy open to your attacks. Attempt a Bluff check with the same DC as a check to feint against that enemy (though this isn't a standard check to feint, so Improved Feint and Greater Feint don't apply). Even if you fail, that enemy is flat-footed against your attacks (see page 276) until the end of your next turn. If you succeed, the enemy is also flat-footed against your allies' attacks until the end of your next turn. You can't use clever feint against a creature that lacks an Intelligence score.NAt 6th level, you can spend 1 Resolve Point to treat a failed Bluff check for clever feint as if it were a success.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'COORDINATED RELOAD (EX)': {
			abilityName: 'COORDINATED RELOAD (EX)',
			abilityDescription:
				'As a move action, you can grant a single move action to an ally within 60 feet. The ally can use that move action during her next turn to reload or draw a weapon. As part of the move action to activate this ability, you can also reload or draw a weapon. If the ally is adjacent to you, she can draw weapons and use ammunition you are carrying as though she were carrying them herself. The ally can use her extra move action in between her other actions, as well as before or after a full action. A character can use no more than one bonus action from coordinated reload or similar abilities (such as the quick quaff and hurry envoy improvisations) in a single round.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'DISPIRITING TAUNT (EX)': {
			abilityName: 'DISPIRITING TAUNT (EX)',
			abilityDescription:
				"As a standard action, you can taunt an enemy within 60 feet. Attempt an Intimidate check with the same DC as a check to demoralize that enemy (though this isn't a check to demoralize, so you can't use abilities that would apply to a demoralization attempt, like the rattling presence expertise talent). If you fail, that enemy is off-target (see page 276) until the end of your next turn. If you succeed, that enemy is instead shaken (see page 277 of the Core Rulebook) until the end of your next turn. This is an emotion and fear effect.NAt 6th level, you can spend 1 Resolve Point to treat a failed Intimidate check for dispiriting taunt as if it were a success.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		"DON'T QUIT (EX)": {
			abilityName: "DON'T QUIT",
			abilityDescription:
				"As a standard action, you can signal a single ally within 60 feet. That ally ignores one condition (see page 273) of your choice until the start of your next turn, chosen from the following list: confused, fascinated, fatigued, shaken, sickened, and staggered.\nWhile your ally doesn't suffer the effects of the condition during that period, the condition is merely suppressed, not removed, and its effects resume at the start of your next turn. The condition can still be removed with spells, technology, and other effects as normal.\nAt 6th level, add the following conditions to the list: cowering, dazed, exhausted, frightened, nauseated, panicked, paralyzed, and stunned.\nAt 12th level, you can spend 1 Resolve Point to remove the condition with this ability instead of suppressing it. You can't remove a condition with a permanent duration (see page 271) in this way; if you attempt to do so, your attempt fails but you don't lose the Resolve Point.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'EXPANDED ATTUNEMENT (EX)': {
			abilityName: 'EXPANDED ATTUNEMENT (EX)',
			abilityDescription:
				"You can use beneficial mind-affecting envoy improvisations to aid allies who usually would not be able to gain benefits from mind-affecting effects, such as constructs, robots, and undead. If the improvisation grants a morale bonus, even allies who can't normally benefit from morale bonuses gain that bonus.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'EXPERT GUIDE (EX)': {
			abilityName: 'EXPERT GUIDE (EX)',
			abilityDescription:
				"As a move action, you can attempt a DC 15 Survival check to identify a clear path. If you succeed, select one 5-foot square of difficult terrain that you can perceive, plus one additional 5-foot square for every 5 points by which the result of your check exceeds the DC. Until the end of your next turn, you and your allies can move through the indicated spaces as though they weren't difficult terrain.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'FIRE SUPPORT (EX)': {
			abilityName: 'FIRE SUPPORT (EX)',
			abilityDescription:
				'When you take a standard action to provide harrying fire and hit the AC of 15 required to do so, you also provide covering fire for the next ally attacked by the target of your harrying fire attacks before your next turn.\nAdditionally, as a full action, you can make two ranged attack rolls against two different targets, taking a -4 penalty to each attack roll, to apply harrying fire to each target hit. For each target that you successfully apply harrying fire to, you also provide covering fire for the next ally that is attacked by either target before your next turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, true, false, false, false],
			usesResolve: 0,
		},
		'FRUSTRATING TARGET (EX)': {
			abilityName: 'FRUSTRATING TARGET (EX)',
			abilityDescription:
				'You duck and weave around an opponent in close combat, making it difficult for others to draw a bead on you. Once per turn as a move action, choose a significant enemy you are adjacent to. All other enemies take a -1 penalty to attack rolls against you until the beginning of your next turn, as long as you are still adjacent to the designated opponent.\nAt 6th level, you can spend 1 Resolve Point as a reaction when an enemy other than the designated opponent attacks you to make that enemy roll twice on a single attack and take the worse result, as a long as you are still adjacent to the designated opponent. Both of these rolls take the -1 penalty imparted by this ability.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		"GET 'EM (EX)": {
			abilityName: "GET 'EM (EX)",
			abilityDescription:
				"As a move action, you can choose one enemy within 60 feet. Until the start of your next turn, you and your allies gain a +1 morale bonus to attack rolls made against that enemy. The bonus persists even if the enemy moves beyond 60 feet or out of line of sight or hearing.\nAt 6th level, you can spend 1 Resolve Point to grant this bonus to attack rolls and damage rolls against all enemies who are within 60 feet.\nIf you also spend 1 Resolve Point when using improved get 'em, you grant +2 morale bonus to attack and damage rolls against all enemies who are within 60 feet.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'INSPIRING BOOST (EX)': {
			abilityName: 'INSPIRING BOOST (EX)',
			abilityDescription:
				"As a standard action, you can signal an ally within 30 feet who has taken damage from any attack made by a significant enemy (see page 242 of the Core Rulebook) at any point after your last turn ended. That ally regains a number of Stamina Points (up to his maximum) equal to twice your envoy level + your Charisma modifier; at 15th level, this increases to three times your envoy level + your Charisma modifier. Once an ally has benefited from your inspiring boost, that ally can't gain the benefits of your inspiring boost again until he takes a 10-minute rest to recover Stamina Points.NAt 6th level, you can spend 1 Resolve Point to add your envoy level to the number of Stamina Points regained.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'LOOK ALIVE (EX)': {
			abilityName: 'LOOK ALIVE (EX)',
			abilityDescription:
				'When you spend a Resolve Point to regain Stamina Points after a 10-minute rest, all allies who stay within 60 feet of you throughout the rest gain a +2 morale bonus to Perception and initiative checks for the next hour or until the next 10-minute rest to recover Stamina Points, whichever comes first.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'NOT IN THE FACE (EX)': {
			abilityName: 'NOT IN THE FACE (EX)',
			abilityDescription:
				'As a move action, you can choose one enemy within 60 feet. That enemy must succeed at a Will save or take a -4 penalty to all attacks it makes against you until the end of your next turn.\nAt 6th level, you can spend 1 Resolve Point to make the enemy take the penalty with no saving throw allowed.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'PHALANX FIGHTING (EX)': {
			abilityName: 'PHALANX FIGHTING (EX)',
			abilityDescription:
				'Whenever you or an ally within 10 feet of you is wielding a shield, as a move action you can grant yourself and all allies within 10 feet of that ally the benefits of that shield until the start of your next turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'QUICK QUAFF (EX)': {
			abilityName: 'QUICK QUAFF (EX)',
			abilityDescription:
				'As a standard action, you can grant a single standard action to an ally within 60 feet. The ally can use that action during her next turn to draw or drink a serum (Core Rulebook 225) or draw or inject a spell ampule. As part of the action to activate this ability, you can also draw a serum or spell ampule, or if you used a standard action, drink a serum or inject a spell ampule. If the ally is adjacent to you, they can draw serums and spell ampules that you are carrying as though they were carrying them themselves. The ally can use their extra action in between their other actions, as well as before or after a full action. A character can use no more than one extra action from quick quaff or similar abilities (such as the coordinated reload or hurry envoy improvisations) in a single round.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'SHOO (EX)': {
			abilityName: 'SHOO (EX)',
			abilityDescription:
				"As a standard action, you can attempt an Intimidate check to demoralize a creature with the animal or vermin creature type within 60 feet of you. If you succeed, the target must also succeed at a Will saving throw (DC = 10 + 1/2 your envoy level + your Charisma modifier) or become frightened for 1 round or until it takes an action to move away from you. Once a creature has been affected by this ability, it's immune for 24 hours.\nAt 6th level, you can spend 1 Resolve Point to target multiple creatures with the animal or vermin creature type with this ability, up to a maximum number of creatures equal to half your envoy level. Attempt one Intimidate check against all your selected targets. The DC of the check is equal to the highest DC to demoralize any one of the foes, plus 1 for each additional target beyond the first.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'SOW DISCONTENT (EX)': {
			abilityName: 'SOW DISCONTENT (EX)',
			abilityDescription:
				"As a move action, you can attempt to deceive an enemy within 30 feet who can hear you into suspecting its allies of treachery. Attempt a Bluff check with the same DC as a check to feint against that enemy (though this isn't a standard check to feint, so Improved Feint and Greater Feint don't apply). If you succeed, the target acts as though they have no allies and are not considered to be an ally to any other creature until the beginning of your next turn. An affected target can't move freely through former allies' spaces or flank creatures with them; the target can't give or receive benefits from the aid another action, any spells, or effects that affect only allies. In addition, if the target can make an attack of opportunity, they do so even against their former allies, but they also avoid actions that would provoke attacks of opportunities from their former allies (even if those creatures wouldn't make the attack of opportunity). This doesn't otherwise grant you influence over the affected target or make it more positively disposed toward you or your allies.\nA creature who tries to cast a spell that has a range of touch on the affected target must succeed at an attack roll to touch the target, even if the spell is harmless, though the affected target isnt forced to attempt saving throws against harmless effects.\nAt 6th level, you can spend 1 Resolve Point when you succeed at the Bluff check to have the effect last for a number of rounds equal to your Charisma modifier.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'SPECTACLE (EX)': {
			abilityName: 'SPECTACLE (EX)',
			abilityDescription:
				"As a standard action, you can distract an opponent within 60 feet. Attempt a Bluff check; the DC of this check is equal to either 10 + your opponent's total Sense Motive skill bonus or 15 + 1-1/2 x the opponents CR, whichever is greater. If you succeed, the targets attention is locked on you, giving it a -2 penalty to Perception checks other than those made against you as well as a -2 penalty to attack rolls for any attack that doesn't include you as a target. This effect lasts until the end of your next turn or until the target can no longer perceive you with a precise sense. As a move action, you can extend the effect's duration until the end of your following turn.\nAt 6th level, you can spend 1 Resolve Point to affect multiple creatures, up to a maximum of half your envoy level. Attempt one check against all of the targets. The DC of the check is equal to the DC to use spectacle against the creature with the highest CR of those you're attempting to affect, plus 1 for each target beyond the first. When you extend the effect, the duration increases for all targets. However, the effect ends for a target (though not necessarily for other targets) once that target can no longer perceive you with a precise sense.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, true, false, false, false, false],
			usesResolve: 0,
		},
		'SPELL GEM UNDERSTANDING (SU)': {
			abilityName: 'SPELL GEM UNDERSTANDING (SU)',
			abilityDescription:
				"You can use spell gems as if you were a spellcaster. For purposes of using spell gems, you treat all spells on the mystic, technomancer, and witchwarper spell lists as your class's spell list, and you use Charisma as your key ability score for your spellcasting. Your effective caster level for any spell gems you use is equal to your envoy level",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'SUPERIOR COVERING FIRE (EX)': {
			abilityName: 'SUPERIOR COVERING FIRE (EX)',
			abilityDescription:
				'When you take a standard action to provide covering fire and hit the AC 15 required, the target of your covering fire gains the circumstance bonus provided by your covering fire against all attacks attempted against them until the start of your next turn.\nAdditionally, as a full action you can make two ranged attack rolls to provide covering fire to two different allies, taking a -4 penalty to each attack roll. For each target that you successfully apply covering fire to, the circumstance bonus provided by your covering fire applies against all attacks attempted against that ally until the start of your next turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, true, false, false, false],
			usesResolve: 0,
		},
		'UNIVERSAL EXPRESSION (EX)': {
			abilityName: 'UNIVERSAL EXPRESSION (EX)',
			abilityDescription:
				'When using a language-dependent improvisation that affects an enemy, you can use the improvisation against that enemy even if the two of you do not share a language.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'Vexing Style (Ex)': {
			abilityName: 'Vexing Style (Ex)',
			abilityDescription:
				"You're an expert at infuriating wordplay that trips up enemies. You can activate this improvisation as a swift action, and you can end it without spending an action at the beginning of your turn. The improvisation's effects end automatically when combat ends or when you can no longer communicate effectively (such as by becoming inaudible, paralyzed, or unconscious). Enemies within 60 feet of you take a -1 penalty to attacks against you, and you gain a +2 bonus to Bluff checks to feint those creatures. In turn, they gain a bonus to weapon damage against you equal to half the creature's CR (minimum 1, rounded down). When an affected creature scores a critical hit against you, they can choose to become immune to your vexing style improvisation and to improvisations that use vexing style as a prerequisite for 1 hour.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, true, false, false, false],
			usesResolve: 0,
		},
		'WATCH YOUR STEP (EX)': {
			abilityName: 'WATCH YOUR STEP (EX)',
			abilityDescription:
				'When an ally within 60 feet must succeed at a Reflex save to avoid a harmful effect, as a reaction before your ally attempts the saving throw, you can grant the ally a +2 bonus to that saving throw.\nAt 6th level, you can spend 1 Resolve Point to have the ally roll twice on the saving throw and take the better result. Both of those rolls benefit from the +2 bonus provided by this ability.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
	},
	4: {
		'CLEVER ATTACK (EX)': {
			abilityName: 'CLEVER ATTACK (EX)',
			abilityDescription:
				'You can make an attack that throws your enemy off-balance. As a standard action, you can make a single attack against a target within 60 feet and gain the benefits of clever feint (attempting a Bluff check against the target as normal). Apply the effects of clever feint before resolving your attack. You must have the clever feint envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'DUCK UNDER (EX)': {
			abilityName: 'DUCK UNDER (EX)',
			abilityDescription:
				"You can duck under a foe's melee attack, causing it to overextend and move into a position more favorable to you. You must take the total defense action to use this ability. If, before the start of your next turn, a foe misses you with a melee attack, as a reaction you can attempt a reposition combat maneuver with a +8 bonus to your attack roll against that foe.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'EXACTLY AS I WOULD HAVE DONE (EX)': {
			abilityName: 'EXACTLY AS I WOULD HAVE DONE (EX)',
			abilityDescription:
				"Your keen tactical mind predicts when and where an ambush would be ideal so you aren't surprised when enemies exploit the same strategy. You aren't flat-footed during a surprise round.\nAt 8th level, you can spend 1 Resolve Point to share this benefit with one ally you could have reasonably warned of the attack at the last minute; this application of the improvisation is a language-dependent, mind-affecting, sense-dependent effect.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'FALSE FLANKING (EX)': {
			abilityName: 'FALSE FLANKING (EX)',
			abilityDescription:
				'You can trick a flanking enemy into hurting their ally. When a foe is flanking you and misses you with a melee attack, you can attempt a reposition combat maneuver against that foe as a reaction. If your combat maneuver succeeds, you switch places with that foe, and the foe rerolls the attack against the ally who was allowing them to flank you. This attack roll is made at the same bonus as the original attack and gains the benefits of flanking.\nAt 12th level, you can use this improvisation even if the attack would hit you by spending 1 Resolve Point; if your combat maneuver succeeds, you take the minimum amount of damage, and the foe still rerolls the attack against their ally.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'FOCUS (EX)': {
			abilityName: 'FOCUS (EX)',
			abilityDescription:
				'As a standard action, you can encourage a single ally within 60 feet to focus on the danger at hand. If that ally is flat-footed or off-target, you end that condition. If circumstances would cause the ally to immediately become flat-footed or off-target again, you instead suppress that condition for 1 round.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'HURRY (EX)': {
			abilityName: 'HURRY (EX)',
			abilityDescription:
				'As a standard action, you can grant a single move action to an ally within 60 feet. The ally can use that move action during their next turn to take a guarded step, move up to their speed, or draw or sheathe a weapon. The ally can use their extra move action in between their other actions, and they can even use it before or after a full action. A character can use no more than one extra action from hurry in a single round.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'INFURIATING TARGET (EX)': {
			abilityName: 'INFURIATING TARGET (EX)',
			abilityDescription:
				"You move with skill and grace in combat, using others as living shields. When you use frustrating target, you also gain a +2 circumstance bonus to Reflex saving throws against area effects as long as you are still adjacent to the designated opponent. If your designated opponent is also within the same area of effect, it takes a -2 penalty to their Reflex save. You must have the frustrating target improvisation to choose this improvisation.\nAt 8th level, you can spend 1 Resolve Point as a reaction whenever you attempt a Reflex save against an area effect to have that area expand to encompass your designated opponent, as long as you are adjacent to it. The opponent's Reflex save takes a -2 penalty.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'LONG-RANGE IMPROVISATION (EX)': {
			abilityName: 'LONG-RANGE IMPROVISATION (EX)',
			abilityDescription:
				'Double the range of your improvisations with ranges of at least 30 feet.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		"MARTYR'S IMPROVISATION (EX)": {
			abilityName: "MARTYR'S IMPROVISATION (EX)",
			abilityDescription:
				"Whenever you're reduced to 0 Hit Points, as a reaction before gaining the dying condition, you can immediately use any one of your envoy improvisations that can be used as a standard action, move action, or reaction. Once you have used this improvisation, you can't use this ability again until you have regained Stamina Points following a 10-minute rest.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'PERFECT INSULT (EX)': {
			abilityName: 'PERFECT INSULT (EX)',
			abilityDescription:
				"As a standard action, you study a creature to cultivate the perfect insult. Attempt a Culture check with a DC equal to 10 + your opponent's total Bluff skill bonus, or 15 + 1-1/2x the opponent's CR, whichever is greater. If you succeed, you gain a +2 circumstance bonus to Bluff and Intimidate checks against that opponent for 1 minute. If you spend 1 Resolve Point, allies within 60 feet also gain this bonus for the same duration. Once you've attempted to craft a perfect insult against a creature, you can't target that creature again with this ability for 24 hours.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'QUICK DISPIRITING TAUNT (EX)': {
			abilityName: 'QUICK DISPIRITING TAUNT (EX)',
			abilityDescription:
				'You can use dispiriting taunt as a move action instead of a standard action. You must have the dispiriting taunt envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'QUICK INSPIRING BOOST (EX)': {
			abilityName: 'QUICK INSPIRING BOOST (EX)',
			abilityDescription:
				'You can use inspiring boost as a move action instead of a standard action, though when you do so, the number of Stamina Points your ally recovers is reduced by your envoy level. You must have the inspiring boost envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'QUICK SHOO! (EX)': {
			abilityName: 'QUICK SHOO! (EX)',
			abilityDescription:
				'You can use shoo! as a move action instead of a standard action. You must have the shoo! envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'SUDDEN SHIFT (EX)': {
			abilityName: 'SUDDEN SHIFT (EX)',
			abilityDescription:
				'As a reaction, whenever you or an ally deal damage to an opponent within 60 feet of you, you and all allies within 60 feet of the opponent can take a guarded step as a reaction. All of the characters who took a guarded step using this improvisation have their speed reduced by 5 feet until the end of their next turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'TERRIFYING BLAST (EX)': {
			abilityName: 'TERRIFYING BLAST (EX)',
			abilityDescription:
				'When you throw a grenade, each creature within the radius of the explosion that fails its Reflex save against the grenade and takes damage from it must succeed at a Will save or gain the shaken condition for 1 round. This is a fear effect.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'WATCH OUT (EX)': {
			abilityName: 'WATCH OUT (EX)',
			abilityDescription:
				'As a reaction, when an enemy makes a ranged attack against an ally within 60 feet of you, you can warn that ally of the danger. You must spend your reaction when the enemy declares the attack but before it makes the attack roll. Your ally can spend a reaction to gain a +4 to AC against the triggering attack. Once the triggering attack is resolved, the ally falls prone.\nAt 8th level, you can spend 1 Resolve Point to prevent your ally from falling prone after the attack.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		"YOU'VE GOT THIS (EX)": {
			abilityName: "YOU'VE GOT THIS (EX)",
			abilityDescription:
				"When an ally within 60 feet fails an Acrobatics or Athletics check, as a reaction, you allow that ally to reroll the check, using your modifier for the skill if it's better than theirs. They must use the second result. A creature can't benefit from this ability again until they take a 10-minute rest to recover Stamina Points.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
	},
	6: {
		'Become the Robot (Ex)': {
			abilityName: 'Become the Robot (Ex)',
			abilityDescription:
				"As a standard action, you can adjust your stance and behavior to deceive nearby constructs into mistaking you for another construct that's authorized to be nearby. Affected constructs barely notice you, taking a -4 penalty to Perception checks to observe you and having a starting attitude of indifferent toward you. The first time a construct observes you, it can attempt a Will save to see through the disguise, becoming immune to its effect for 24 hours if it succeeds; a construct applies its Intelligence modifier to this Will save, making unintelligent constructs especially easy to fool. A construct can attempt an additional saving throw to become immune to the effect if it observes you performing prohibited actions, like trying to enter a highly restricted area or rigging explosives. A construct automatically succeeds at the saving throw if it observes blatantly hostile actions, like your attacking one of its allies. You can maintain this improvisation for up to 1 hour, after which you need to stretch and move normally for an equal amount of time before you can use the improvisation again.\nAt 10th level, you can spend 1 Resolve Point and use this ability as a full action to grant its effects to a number of allies equal to your Charisma modifier. The effect ends for an ally if they end their turn without line of sight to you.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'Bedside Manner (Ex)': {
			abilityName: 'Bedside Manner (Ex)',
			abilityDescription:
				"When you make a Medicine check to treat deadly wounds or successfully aid another for another creature's Medicine check to treat deadly wounds, if the Medicine check is successful you can add your Charisma bonus to the number of Hit Points recovered as a result of the skill check. Additionally, when you make a Medicine check to treat disease or treat drugs or poison, or successfully aid another for another creature's Medicine check to do so, if the Medicine check is successful, the saving throw bonus granted by the skill checks increases to +6. If the associated saving throw succeeds, it counts as two consecutive successes for the purposes of curing the intended affliction.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'Blocking Bodies (Ex)': {
			abilityName: 'Blocking Bodies (Ex)',
			abilityDescription:
				"Allies are your greatest asset, and sometimes your greatest armor. As a reaction when you are attacked and have soft cover granted by a creature against the attacker, you can increase your cover bonus to AC to +5. If the attack roll's result is a natural 1, you can choose for the attacker to reroll the attack against the creature closest to you who is granting you soft cover, as if they were the original target.\nAt 10th level, when you use this improvisation and the triggering attack fails to hit you by 5 or less, you can spend 1 Resolve Point. When you do, the attacker rerolls the attack against the creature granting you soft cover as though their original attack roll result had been a natural 1.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'Clever Improvisations (Ex)': {
			abilityName: 'Clever Improvisations (Ex)',
			abilityDescription:
				'The first time you would spend Resolve Points on one of your envoy improvisations, reduce the cost by 1 Resolve Point (minimum 0). This ability refreshes whenever you take a 10-minute rest to recover Stamina Points and after an 8-hour rest to recover Resolve Points, reducing the Resolve Point cost of your next envoy improvisation after the rest.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, true],
			usesResolve: 0,
		},
		'Coordinated Barrage (Ex)': {
			abilityName: 'Coordinated Barrage (Ex)',
			abilityDescription:
				'As a move action, choose one ally within 60 feet. That ally gains the benefit of the Coordinated Shot feat. If the chosen ally already has this feat, they do not grant foes cover against attacks made by you and your allies. The effects of this improvisation last until the start of your next turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'Coordinated Flankers (Ex)': {
			abilityName: 'Coordinated Flankers (Ex)',
			abilityDescription:
				'As a move action, you can coordinate your allies into effective flanking partners. Until the start of your next turn, you and your allies count as flanking any creature that at least two of you threaten, regardless of your position.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'Draw Fire (Ex)': {
			abilityName: 'Draw Fire (Ex)',
			abilityDescription:
				"As a standard action, you can spend 1 Resolve Point to make all enemies within 100 feet take a -4 penalty to all ranged attacks they make that don't target you until the end of your next turn. This penalty remains even if you and an enemy move more than 100 feet away from each other, and enemies that weren't within 100 feet when you used draw fire don't take the penalty if they later come within range.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'Fast Camouflage (Ex)': {
			abilityName: 'Fast Camouflage (Ex)',
			abilityDescription:
				"You can use a disguise kit for 1d3 rounds to apply basic camouflage to yourself suitable for a specific biome; without a disguise kit, it takes 1d3 minutes to scavenge suitable materials and apply the camouflage. While wearing this disguise in that biome, you can apply your expertise ability to your Stealth checks. The camouflage lasts for 1 hour.\nIf you spend 1 Resolve Point when using this ability, you can instead apply the camouflage to a willing adjacent creature, applying your expertise die to the creature's Stealth checks. Once any other creature has benefited from this improvisation, it can't gain the benefits again until it has taken a 10-minute rest to recover Stamina Points.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'Heads Up (Ex)': {
			abilityName: 'Heads Up (Ex)',
			abilityDescription:
				'When you succeed at a Perception check, as a reaction, you can signal a single ally within 60 feet. That ally can act as if he had also succeeded at the Perception check with the same result.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		"Improved Get 'Em (Ex)": {
			abilityName: "Improved Get 'Em (Ex)",
			abilityDescription:
				"Your morale bonus from get 'em increases to +2. As a standard action, you can make a single attack against a target within 60 feet. You and your allies within 60 feet gain the benefits of get 'em against that target (applying these effects before making the attack roll). If you spend 1 Resolve Point when using this ability, you grant a +2 morale bonus to attack and damage rolls against all enemies who are within 60 feet. You must have the get 'em envoy improvisation to choose this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, true, false, false, false, false],
			usesResolve: 0,
		},
		'Improved Vexation (Ex)': {
			abilityName: 'Improved Vexation (Ex)',
			abilityDescription:
				"Your blistering battle rapport adds an extra sting to your attacks. The first time each round that you succeed at a weapon attack against a creature affected by your vexing style, you can choose to add your Charisma modifier to the attack's damage instead of adding your Strength modifier. If the attack would not normally add your Strength modifier to its damage, you instead add half your Charisma modifier as a bonus to the damage. You cannot apply your Charisma modifier to damage in this way with weapons that affect an area, such as those with the explode or line special weapon properties.\nYou must have the vexing style improvisation to choose this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, true, false, false, false],
			usesResolve: 0,
		},
		'Inspiring Oration (Ex)': {
			abilityName: 'Inspiring Oration (Ex)',
			abilityDescription:
				"You can use inspiring boost as a full action. If you do, all allies within 60 feet of you regain a number of Stamina Points equal to twice your envoy level + your Charisma modifier (up to their maximum); at 15th level, this increases to three times your envoy level + your Charisma modifier. Once an ally has benefited from your inspiring boost or inspiring oration, that ally can't gain the benefits of either improvisation again until they recover Stamina Points following a 10-minute rest.\nAs with the inspiring boost envoy improvisation, you can spend 1 Resolve Point to add your envoy level to the number of Stamina Points regained. You must have the inspiring boost improvisation to select this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, true, false, false],
			usesResolve: 0,
		},
		'Kiss It Better (Ex)': {
			abilityName: 'Kiss It Better (Ex)',
			abilityDescription:
				"With only a token medical effort, you can convince allies that they've recovered from recent injuries. As a standard action, you can attempt a Bluff or Medicine check against an ally within your natural reach who has less than their maximum number of Hit Points or Stamina Points. The DC for this check is equal to either 5 + your ally's total Sense Motive bonus, 5 + your ally's total Medicine bonus, or 10 + 1-1/2 x the ally's level, whichever is greater. If your check succeeds, the ally gains temporary Hit Points equal to 2d8 + your Charisma Modifier, plus an additional 1d8 temporary Hit Points for every 4 envoy levels you have beyond 6th (maximum 5d8 + your Charisma modifier at 18th level). These temporary Hit Points last for 10 minutes. Each time you use kiss it better on a creature, the skill check DC to affect that creature with the improvisation increases by 5 for 1 day.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},
		'Natural Spectacle (Ex)': {
			abilityName: 'Natural Spectacle (Ex)',
			abilityDescription:
				"Once per minute, you can extend your spectacle ability's duration as a swift action rather than a move action. The effect of your spectacle ends for a creature only when the duration ends or when you end your turn where the creature can no longer perceive you with a precise sense. You must have the spectacle envoy improvisation to choose this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, true, false, false, false],
			usesResolve: 0,
		},
		'Quick Perfect Insult (Ex)': {
			abilityName: 'Quick Perfect Insult (Ex)',
			abilityDescription:
				'You can use perfect insult as a move action instead of a standard action. You must have the perfect insult envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'Shocking Weakness (Ex)': {
			abilityName: 'Shocking Weakness (Ex)',
			abilityDescription:
				"When you succeed at a check to identify a creature, as a move action you can audibly point out its weaknesses in a way that makes the creature self-conscious. The creature becomes flat-footed until the start of your next turn. If there's more than one creature of the same species present, this applies to all creatures of that species within 60 feet that can hear you. You can only use this ability once per species until you have taken a 10-minute rest to recover Stamina Points.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		"Take 'Em Alive (Ex)": {
			abilityName: "Take 'Em Alive (Ex)",
			abilityDescription:
				"You can urge your companions to avoid killing blows at the last second. To use this ability, you must be within 60 feet of both an ally and your ally's target, the latter which must have taken damage from a nonlethal attack within the last minute. If your ally would reduce the target to 0 HP—and the attack doesn't deal damage that equals or exceeds half the target's maximum Hit Points—then, as a reaction, you can have the target merely fall unconscious from the attack as though the attack had dealt nonlethal damage.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'Trust Your Gear (Ex)': {
			abilityName: 'Trust Your Gear (Ex)',
			abilityDescription:
				'As a move action, you can select an ally within 60 feet. Until the start of your next turn, that ally gains one of the following benefits: they can treat the armor check penalty of their armor as 4 lower than normal (to a minimum of 0); they can ignore the penalties for using armor or a weapon they are not proficient with; or they can ignore the broken condition of an item they are wearing or using.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'What Did We Learn? (Ex)': {
			abilityName: 'What Did We Learn? (Ex)',
			abilityDescription:
				'While resting, you coach your allies on how to turn past failures into future successes. When you spend 1 Resolve Point when resting for 10 minutes to recover Stamina Points, you can review tactics with up to 5 allies who also are spending Resolve Points to regain Stamina Points. Each affected ally learns a one-time lesson associated with their choice of attack rolls, saving throws, or skill checks. Before attempting a check of the chosen type, an affected ally can expend their lesson to apply a +2 morale bonus to the check. A lesson lasts for 8 hours, until expended, or until the ally is affected by this improvisation again, at which point any new lesson replaces the previous one.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
	},
	8: {
		'Changing Circumstances (Ex)': {
			abilityName: 'Changing Circumstances (Ex)',
			abilityDescription:
				"As a reaction, you can spend 1 Resolve Point to change the triggering condition for the readied action of an ally within 60 feet, but you don't change the readied action. Once a creature has been affected by this ability, they become immune to it for 24 hours.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Coordinated Maneuvers (Ex)': {
			abilityName: 'Coordinated Maneuvers (Ex)',
			abilityDescription:
				"Whenever an ally within 60 feet attempts to use a combat maneuver against an opponent, as a reaction you can signal weak points in the opponent's defenses. The ally gains a morale bonus to their attack roll for that combat maneuver equal to 1d4+1. Once you use this ability, you can't use it again until after you regain Stamina Points following a 10-minute rest.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Desperate Defense (Ex)': {
			abilityName: 'Desperate Defense (Ex)',
			abilityDescription:
				'As a move action, you can cause one ally adjacent to you to not be considered helpless for the purpose of actions that can be used only against helpless creatures (such as a coup de grace). This effect ends if the creature ceases to be adjacent to you or at the beginning of your next turn, whichever comes first.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Doooom! (Ex)': {
			abilityName: 'Doooom! (Ex)',
			abilityDescription:
				"When you use this ability, choose either a 120-foot line, a 60-foot cone, or a 20-foot radius burst within 60 feet of you. As a standard action, you fearsomely foretell the devastation that your next attack will inflict on creatures in the area, convincing them to scatter. Attempt a Bluff or Intimidate check, applying the result to each enemy in the area; the DC equals either 10 + the creature's total Sense Motive skill bonus, or 15 + 1-1/2 x the creature's CR, whichever is greater. Unless you are wielding a weapon-like object, using a supernatural ability with a fearsome appearance (like token spell or activating a solarian's stellar attunement), or leveraging some other obvious prop to make your threats, you take a -4 penalty to the skill check.\nEach creature against which your check succeeds must do one of the following on its next turn: fight defensively, use the full defense action, move out of the area, or move to an area that grants them cover against your attacks. Whether your check succeeds or not, you cannot affect that creature with this improvisation again for 24 hours. This is a fear effect.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Early Warning (Ex)': {
			abilityName: 'Early Warning (Ex)',
			abilityDescription:
				"You can use a reaction before the first time you act in a combat, but only to use an envoy improvisation. You can't use early warning during a surprise round.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Expert Attack (Ex)': {
			abilityName: 'Expert Attack (Ex)',
			abilityDescription:
				'As a move action, you can spend 2 Resolve Points to add your bonus from expertise to your next attack roll before the end of your turn.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 2,
		},

		'Hidden Agenda (Ex)': {
			abilityName: 'Hidden Agenda (Ex)',
			abilityDescription:
				"You're an expert at veiling your true thoughts and goals. Whenever a creature attempts a Sense Motive check to detect a deception of yours, the creature must roll twice and take the worse of the two results. When you attempt a saving throw against an effect or ability that would read your thoughts or reveal your motives, you can roll twice and take the better of the two results.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'I Said Now (Ex)': {
			abilityName: 'I Said Now (Ex)',
			abilityDescription:
				"As a swift action before the end of your first full turn during each encounter, you can motivate an ally who hasn't acted yet and is within 30 feet of you to act more quickly. That ally rerolls their initiative check, using the second result if it's higher. The second initiative check's result cannot exceed your own initiative count; if it would equal or exceed yours, the ally acts immediately after your turn in the initiative order. Once a creature has been affected by this ability, it's immune for 24 hours.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, true, false, false, false],
			usesResolve: 0,
		},

		'Improved Brace Yourselves (Ex)': {
			abilityName: 'Improved Brace Yourselves (Ex)',
			abilityDescription:
				'Your morale bonus from brace yourselves increases to +2. When you use this ability, each ally within 60 feet may also drop prone as a reaction. You must have the brace yourselves envoy improvisation to choose this improvisation.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Improved Hurry (Ex)': {
			abilityName: 'Improved Hurry (Ex)',
			abilityDescription:
				'You can use the hurry envoy improvisation as a move action instead of a standard action. You must have the hurry envoy improvisation to choose this improvisation.\nAt 12th level, you can use hurry as a standard action and spend 1 Resolve Point to grant a standard action instead of a move action.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Improved Terrifying Blast (Ex)': {
			abilityName: 'Improved Terrifying Blast (Ex)',
			abilityDescription:
				'When you use the terrifying blast envoy improvisation, the amount of rounds that creatures are shaken due to failing the Will save increases to 1d4+1 rounds. You must have the terrifying blast envoy improvisation to choose this improvisation. This is a fear effect.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Just Like That! (Ex)': {
			abilityName: 'Just Like That! (Ex)',
			abilityDescription:
				"When you or an ally scores a critical hit against a creature, as a reaction, you can encourage a number of allies equal to your Charisma modifier to continue fighting that creature. For 1 round, the encouraged allies can score a critical hit against the creature on a natural 19 or 20; this effect ends immediately after an encouraged ally scores a critical hit against the target. Once you use this ability, you can't use it again for 1 minute.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Quick Study (Ex)': {
			abilityName: 'Quick Study (Ex)',
			abilityDescription:
				"As a move action, you become proficient with a type of weapon with which another ally within 30 feet is proficient. If that ally has weapon specialization with that weapon type, you can also apply that ally's weapon specialization with that weapon type. This ability's effects last a number of rounds equal to half your envoy level, after which you can't use this ability again until after you regain Stamina Points following a 10-minute rest.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Reprimand Spell (Su)': {
			abilityName: 'Reprimand Spell (Su)',
			abilityDescription:
				"As a standard action, you spend 1 Resolve Point to scold a spell out of existence. This functions as dispel magic with a range of 30 feet, using your envoy level as your caster level.\nAt 12th level, you can instead spend 2 Resolve Points to cast dispel magic as a reaction, using its counter function against a spell that affects any target or creature within 30 feet of you. If your dispel check exceeds the DC by 10 or more, you convince the spell to follow your commands and can select a new target (or targets, as appropriate) for the spell within the spell's original range. The spellcaster loses the ability to dismiss the spell, and you gain that ability.\nYou must be 8th level and have the spell speaker alternate class ability to choose this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 1,
		},

		'Scapegoat (Ex)': {
			abilityName: 'Scapegoat (Ex)',
			abilityDescription:
				"Through a mix of complex manipulation and other cues, you focus enemies' fire on an ally. As a standard action, you can spend 1 Resolve Point and select a willing ally within 30 feet. Until the end of your next turn, enemies within 100 feet of that ally who can sense both you and that ally take a -4 penalty to all ranged attacks they make that don't target that ally. This ability otherwise acts as if that ally used the draw fire improvisation. You must have the draw fire improvisation to choose this improvisation.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 1,
		},

		'Seize the Advantage (Ex)': {
			abilityName: 'Seize the Advantage (Ex)',
			abilityDescription:
				"As a reaction, whenever you or one of your allies critically hits a creature, you can choose one ally within 60 feet of the target of the critical hit. The chosen ally can immediately attack the target creature with one weapon they're currently wielding as a reaction. If they do, the chosen ally takes a -4 penalty to their attack roll and is staggered until the end of their next turn. Characters who can't be staggered can't benefit from this improvisation. Once you use this ability, you can't use it again until after you regain Stamina Points following a 10-minute rest.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Situational Awareness (Ex)': {
			abilityName: 'Situational Awareness (Ex)',
			abilityDescription:
				'If you ready an action, once before the trigger you selected occurs, you can spend 1 Resolve Point to change both the trigger and the action you have ready. You must ready an action that takes the same kind of action as your originally readied action, or you must ready a lesser action. (For example, if you readied a standard action, you could switch to another standard action, a move action, or a swift action, and if you readied a move action, you could switch to another move action or a swift action.)',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, true],
			usesResolve: 1,
		},
		'Sustained Determination (Ex)': {
			abilityName: 'Sustained Determination (Ex)',
			abilityDescription:
				"As a move action, you can spend 2 Resolve Points to grant an ally within 60 feet 1 Resolve Point that they can spend to empower one of their abilities, even if they have spent all of their own Resolve Points. The ally must spend the Resolve Point before the start of your next turn; if they do not do so, they lose the Resolve Point and you still lose the Resolve Points you spent. You can't grant the same ally the benefits of this ability again until both you and your ally have recovered your Resolve Points after an 8-hour rest or its equivalent.",
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 2,
		},
	},
};
