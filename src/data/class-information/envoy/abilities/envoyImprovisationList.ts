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
		'WATCH YOUR STEP (EX)': {
			abilityName: 'WATCH YOUR STEP (EX)',
			abilityDescription:
				'When an ally within 60 feet must succeed at a Reflex save to avoid a harmful effect, as a reaction before your ally attempts the saving throw, you can grant the ally a +2 bonus to that saving throw.\nAt 6th level, you can spend 1 Resolve Point to have the ally roll twice on the saving throw and take the better result. Both of those rolls benefit from the +2 bonus provided by this ability.',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
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
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Envoy (Improvisation)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
	},
};
