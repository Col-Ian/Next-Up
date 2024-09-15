/*
		'': {
			abilityName: '',
			abilityDescription: '',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
*/

export const magicHackList: {
	[key: string]: {
		[key: string]: AbilityListTypes;
	};
} = {
	2: {
		'Advance Warning (Su)': {
			abilityName: 'Advance Warning (Su)',
			abilityDescription:
				'You gain a +1 insight bonus to initiative checks and to Perception checks to act in a surprise round. Additionally, you can cast augury once per day, adding your caster level to the percentage chance of the spell giving you meaningful information.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'All-Access Enchantment (Su)': {
			abilityName: 'All-Access Enchantment (Su)',
			abilityDescription:
				'As a standard action, you can expend an unused spell slot to erode the internal security of a computer system you can touch. You reduce the DC to hack the computer by an amount equal to the level of the spell expended for the duration of a single attempt to hack the computer. If you have used all-access enchantment on a computer and fail a Computers check to access it, you can spend 1 Resolve Point as a reaction to avoid activating a single countermeasure of your choice.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Augment Vehicle (Su)': {
			abilityName: 'Augment Vehicle (Su)',
			abilityDescription:
				"As a move action, you can expend an unused spell slot to magically reconfigure or enhance a vehicle you touch. All the vehicle's movement speeds increase by 10 feet, the vehicle gains a +1 enhancement bonus to EAC and KAC, and the vehicle deals an additional 1d4 damage with collision attacks. If you're piloting this vehicle, its Piloting modifier increases by 2. These effects last for a number of rounds equal to twice the expended spell's level.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Aura Reading (Su)': {
			abilityName: 'Aura Reading (Su)',
			abilityDescription:
				'As a standard action, you can scan the auras of creatures and objects within a 30-foot cone to learn about them. You must have line of sight to a target to scan it. By scanning the auras of creatures and items, you gain a +2 insight bonus to checks to identify them. If you successfully identify a creature or an item after scanning it, you learn one more useful piece of information than normal. If you scan an injured creature or damaged item, you gain a +2 insight bonus to your next Medicine or Engineering check to treat or repair it, provided you initiate the process that leads to the check within 10 minutes.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Calculate Trajectory (Ex)': {
			abilityName: 'Calculate Trajectory (Ex)',
			abilityDescription:
				"As a move action, you can predetermine all potential outcomes and variables before attacking a foe with a spell to consistently strike them at their most vulnerable spot, forcing the target to rely on its reflexes to avoid your attack. If you cast a spell that requires a melee attack or ranged touch attack to affect a target before the end of your next turn, you automatically hit your target, but your foe can attempt a Reflex save to negate your spell's effect (calculating your spell's save DC normally).",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Countertech (Su)': {
			abilityName: 'Countertech (Su)',
			abilityDescription:
				"As a reaction when you take damage from an attack by a technological weapon or source within medium range that specifically targets you, you can expend an unused spell slot to disrupt the attack. With a spell slot of 1st to 5th level, you can counter an attack from a technological weapon whose item level is equal to or less than the level of the expended spell slot x 3, to a maximum of your caster level. 6th-level spell slots can counter any weapon with a level equal to or less than your caster level. For example, at 2nd level, you could expend a 1st-level spell slot to counter an attack from a 1st- or 2nd-level weapon. To successfully counter the attack, you must roll a countertech check (1d20 + your caster level) with a DC equal to 11 + the weapon's level. If the countertech check succeeds, the attack deals half damage. If the countertech check fails, the attack deals normal damage. This magic hack only affects attacks that target you directly; you cannot use countertech against attacks that target an area or that target another person.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Degrade Handling (Ex)': {
			abilityName: 'Degrade Handling (Ex)',
			abilityDescription:
				"As a standard action, you can expend an unused spell slot to degrade the navigational machinery of a vehicle within 30 feet. You reduce the target's Piloting modifier by an amount equal to the expended spell level, and the effect lasts a number of rounds equal to your Intelligence modifier. Alternatively, you can instead target a starship with a range of 1 hex as a special crew action during the gunnery phase, reducing the target's Piloting modifier by an amount equal to the expended spell slot's level until the end of the next round.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Direct Denial of Shapechanging (Su)': {
			abilityName: 'Direct Denial of Shapechanging (Su)',
			abilityDescription:
				"When you cast a polymorph spell on a target with the shapechanger subtype and that target attempts to end your polymorph effect using its change shape ability, that foe must attempt a Will save. If the foe fails its Will save, it fails to transform into the form allowed by its change shape ability and can't attempt to do so again for the rest of your polymorph spell's duration.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Empowered Weapon (Su)': {
			abilityName: 'Empowered Weapon (Su)',
			abilityDescription:
				"As a move action, you can expend an unused spell slot to reconfigure and enhance a weapon you're wielding. Until the start of your next turn, your attacks with the enhanced weapon gain a bonus to attack rolls equal to the level of the spell slot you expended. In addition, your attacks with that weapon deal 1d6 additional damage per level of the expended spell slot. This damage is of the same type the weapon normally deals.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Energize Spell (Ex)': {
			abilityName: 'Energize Spell (Ex)',
			abilityDescription:
				"Once per day as a move action, you can use a battery or a weapon's power cell to power your spellcasting, enabling you to cast one spell you know without using a spell slot. This expends 20 charges per spell level from the battery or power cell and requires you to touch the battery, power cell, or weapon. You must cast the spell before the start of your next turn, or the charges are wasted with no effect.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},

		'Enhance Defense (Su)': {
			abilityName: 'Enhance Defense (Su)',
			abilityDescription:
				"As a reaction, when you or an ally is targeted with a ranged energy attack originating within 100 feet, you can spend 1 Resolve Point to grant a +1 circumstance bonus to the target's EAC against attacks from that source. This bonus lasts until the start of your next turn. Once you've enhanced a creature's defense with this ability, you can't use this ability on them again for 24 hours. At 8th level, the bonus increases to +2, and at 14th level, the bonus increases to +3.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, true, false],
			usesResolve: 1,
		},

		'Enhance Energy Save (Su)': {
			abilityName: 'Enhance Energy Save (Su)',
			abilityDescription:
				"As a reaction, when you or an ally within 30 feet is targeted with an area effect that requires a saving throw to prevent energy damage, you can grant a +2 bonus to the triggering saving throw. Once you've enhanced a creature's save with this ability, you can't use this ability on them again for 24 hours. At 8th level, the bonus increases to +3, and at 14th level, the bonus increases to +4.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},

		'Enhance Illumination (Su)': {
			abilityName: 'Enhance Illumination (Su)',
			abilityDescription:
				"As a standard action, you can funnel magical energy into a technological light source within 100 feet. The area that light source illuminates is doubled. At 8th level, you can also cause the light source to increase the light level in its illuminated area by an additional step. At 14th level, the area is quadrupled. This effect lasts for 1 hour, and the maximum number of devices you can affect at one time equals your Intelligence modifier; if you exceed this limit, your oldest use of the magic hack ends. You can't affect a specific light source with this magic hack more than once every 24 hours.\nAt 5th level, during the duration of this effect, you can spend 1 Resolve Point to cause an affected light source to pulse with extra light; each creature except for you within 30 feet of the light source must succeed at a Reflex save or be dazzled for 1d4 rounds. You can't do so again until you spend a Resolve Point to regain Stamina after a 10-minute rest.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Extend Protections (Su)': {
			abilityName: 'Extend Protections (Su)',
			abilityDescription:
				'As a full action, you can expend an unused spell slot to recharge the number of days a suit of armor you touch can sustain its environmental protections by one day per level of the spell slot expended.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, true, false, false],
			usesResolve: 0,
		},

		'Fabricate Tech (Sp)': {
			abilityName: 'Fabricate Tech (Sp)',
			abilityDescription:
				"As a full action, you can expend an unused spell slot to temporarily construct a piece of technological gear from raw magic. You can create any single technological item with a level equal to or less than the level of the expended spell slot x 3, to a maximum of your caster level. The item appears in your hands or in an adjacent square. You can use fuse spells with this magic hack. The size of the item cannot exceed 10 bulk or Medium size, and the quality of the item is average. Treat this as a spell of the same level as the expended spell slot. For example, at 4th level, you could expend a 1st-level spell slot to fabricate an item of up to 3rd level, or you could expend a 2nd-level spell slot to fabricate an item of up to 4th level. The item persists for a number of minutes equal to your technomancer level. At the end of this duration, the item disappears. You can't create armor, weapons, magic items, or items with limited uses or charges (such as batteries, drugs, or fuel) with this hack.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, true, false, false],
			usesResolve: 0,
		},

		'Gremlin Companion (Su)': {
			abilityName: 'Gremlin Companion (Su)',
			abilityDescription:
				'Your magic has attracted an adoring gremlin that helps you sabotage and control technology. This gremlin is a special creature companion that you immediately obtain and bond with, granting you the Creature Companion Adept feat. You can use Mysticism ranks in place of Survival ranks to qualify for the Creature Companion Expert, Creature Companion Master, and creature Companion Virtuoso feats. If your gremlin companion dies, you can conjure and bond with a new gremlin companion 24 hours later as part of a ritual that takes 8 hours to complete. Your companion has the following statistics.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Harmful Spells (Ex)': {
			abilityName: 'Harmful Spells (Ex)',
			abilityDescription:
				"When you cast an instantaneous spell that deals damage, you can increase the spell's damage by half your technomancer level. This increased damage applies to all creatures damaged by an area spell, but for spells that target multiple creatures with multiple rays or other attacks (such as magic missile), the increased damage applies only to a single ray or missile. This increased damage doesn't apply to ongoing damage from the spell (such as bleed or burn). This magic hack doesn't increase ability damage or other spell effects, only damage to Stamina Points or Hit Points.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Magic Trajectories (Su)': {
			abilityName: 'Magic Trajectories (Su)',
			abilityDescription:
				'As a move action, you can augment a technological powered weapon (either a ranged energy weapon or a melee weapon with the powered weapon special property) so its wielder can exclude a number of targets equal to your key ability modifier from any attacks made by the weapon for 5 rounds. You can do this to a weapon in your possession or one held by an ally that is within reach at the time you use this ability. Each time an attack is made with the weapon, the attacker can exclude targets they are aware of. This exclusion applies only to instant effects and critical hit effects, such as damage or bleed, not lingering secondary effects such as creating a cloud of smoke.\nAfter you use this ability, you cannot do so again until after you take a 10-minute rest to regain Stamina Points.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, true, false, false, false, false],
			usesResolve: 0,
		},
		'Psylore (Su)': {
			abilityName: 'Psylore (Su)',
			abilityDescription:
				'You attune yourself to the psychic energy of other beings, gaining the insight bonus from your techlore class feature to Sense Motive checks.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},
		'Quick Scan (Su)': {
			abilityName: 'Quick Scan (Su)',
			abilityDescription:
				"As a standard action, you can get a general sense of what information is stored on drives or other digital storage media. You must pass your hand in the air near the data source, but don't have to touch it or connect to it. The information you get is very general, such as “financial records,” “military records,” or “spells.” Getting detailed information requires interfacing with the data more directly. If you attempt a quick scan on a creature that stores its memories in a digital medium—to get a sense of the memories stored in a robot, for example—the target can attempt a Will save to negate the scan and prevent you from trying against it again for 24 hours.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Quiet Space (Su)': {
			abilityName: 'Quiet Space (Su)',
			abilityDescription:
				'As a standard action you can cause a 30-foot area centered on your location to become perfectly silent except for sounds that you generate. Sonic damage dealt in this area is reduced by an amount equal to twice your technomancer level. This area of silence lasts for 1d4 rounds or until you use this ability again.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Recode Gem (Su)': {
			abilityName: 'Recode Gem (Su)',
			abilityDescription:
				"You can alter the spell contained within the encoded lattices of a spell gem. This requires 1 minute of uninterrupted concentration. You hijack the power within the gem by inserting your own spellcode, replacing the spell originally encoded within the gem with one of your spells known of an equal or lower level. You can't insert a replacement spell with expensive material components or that requires the expenditure of Resolve Points unless the original spell required components of equal or greater value or the same amount of Resolve Points. If you use this ability on a compound spell gem, it affects only one spell contained within the gem, leaving the other spell or spells intact. Once you have used this ability, you cannot recode another spell gem until you rest for 10 minutes and expend 1 Resolve Point to regain Stamina Points.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Reroute Trap (Su)': {
			abilityName: 'Reroute Trap (Su)',
			abilityDescription:
				'As a standard action, you can expend an unused spell slot to rearrange the inner workings of a mechanical or technological device you touch. Reduce the DC of skill checks to disable the device by an amount equal to the level of the spell slot expended for 1 minute. If you fail a check to disable the device by 5 or more during this time, you can spend 1 Resolve Point as a reaction to avoid triggering the device.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Retrieve Data (Su)': {
			abilityName: 'Retrieve Data (Su)',
			abilityDescription:
				'As a standard action, you can retrieve recently deleted data from a technological device you have access to. You must succeed at a Computers check equal to 10 + 1.5 x the tier of the device from which you are attempting to retrieve the deleted data. Once you have attempted this magic hack on a specific device, the data becomes irrevocably irretrievable by future attempts, regardless of your success or failure on the attempt.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Robot Influence (Ex)': {
			abilityName: 'Robot Influence (Ex)',
			abilityDescription:
				"You can affect constructs, robots, and other creatures that have the technological subtype with your mind-affecting spells, even if they're mindless or normally immune to such effects. However, they receive a +2 bonus to their Will saves against your mind-affecting spells.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Scramble Communications (Ex)': {
			abilityName: 'Scramble Communications (Ex)',
			abilityDescription:
				"As a standard action, you scramble the signal of all technological communication devices in a 5-foot burst within 30 feet. For 1 minute, the devices can't connect to the infosphere and can't be used to send messages or communications. If you spend 1 Resolve Point as an additional cost to activate scramble communications, the duration increases to 1 hour. If the device is in a creature's possession, that creature can attempt a Will save to negate the effect. Once per minute as a full action, a creature adjacent to an affected device can attempt a Computers check (DC = 10 + your technomancer level + your Intelligence modifier + your insight bonus granted by techlore), ending this magic hack's effect on that device if successful. After you have attempted to scramble a device with this magic hack, that device becomes immune to scramble communications for 24 hours.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 1,
		},

		'Selective Targeting (Ex)': {
			abilityName: 'Selective Targeting (Ex)',
			abilityDescription:
				"When you cast an instantaneous spell with an area effect, you can shape the spell so it doesn't affect one of your allies. Choose one 5-foot square within the spell's area to be unaffected by the spell. At 5th level, you can spend 1 Resolve Point to exclude any number of squares with this ability.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Spell Countermeasures (Ex)': {
			abilityName: 'Spell Countermeasures (Ex)',
			abilityDescription:
				'You gain a +2 bonus to saving throws against spells and other magical effects.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Subtle Spells (Ex)': {
			abilityName: 'Subtle Spells (Ex)',
			abilityDescription:
				"You can disguise your spellcasting to confound onlookers. If you succeed at a Sleight of Hand check (DC = 10 + 5 x level of spell being cast) while casting a spell (this requires no extra action), choose a different spell of the same level and school as the one you are casting. An onlooker who succeeds at a Mysticism check to identify the spell you are casting believes the disguised spell to be the other spell you chose unless their result exceeds the DC by 10 or more. A spell with an obvious effect (such as explosive blast) will immediately disabuse of the onlooker of their false assumption. You can't actually eliminate all signs of spellcasting, so security footage may still reveal you as the source of dangerous magic.\nStarting at 5th level, you can spend 1 Resolve Point to automatically succeed on the Sleight of Hand check. When you do so, the onlooker takes a -2 penalty to a Mysticism check to identify your spell and the DC to counter your spell with dispel magic or greater dispel magic increases by 2.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, false, false],
			usesResolve: 0,
		},

		'Summon Cache (Su)': {
			abilityName: 'Summon Cache (Su)',
			abilityDescription:
				"As a standard action, you can teleport your spell cache to your hand, even if another creature is currently holding it. This ability functions across any distance, as long as your spell cache is on the same plane as you, though it can't teleport through effects that prevent teleportation. You can choose this magic hack only if your spell cache is an item.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 0,
		},

		'Technomantic Proficiency (Ex)': {
			abilityName: 'Technomantic Proficiency (Ex)',
			abilityDescription:
				"As a standard action, you can spend 1 Resolve Point to temporarily learn how to use a weapon in combat. Choose a single weapon; you gain proficiency with it (and any identical weapon) for a number of minutes equal to your class level. Each round you use the weapon reduces this magic hack's duration by 1 minute. For example, at 4th level, you could gain proficiency with corona laser rifles for 4 minutes. If you fire such a weapon for 2 rounds, you remain proficient with it for 2 more minutes.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 1,
		},

		'Technomantic Shield': {
			abilityName: 'Technomantic Shield',
			abilityDescription:
				'As a standard action, you can spend 1 Resolve Point to draw a shield and gain proficiency with that type of shield for 1 minute.',
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [true, false, false, false, false, false],
			usesResolve: 1,
		},

		'Vital Conversion (Su)': {
			abilityName: 'Vital Conversion (Su)',
			abilityDescription:
				"As a reaction when you use a spell to deal damage to a creature within 10 feet of you, you can convert some of that creature's vital energies into electrical power. One battery in your possession regains a number of charges equal to the half the damage dealt or twice the spell's level, whichever is less.",
			abilitySource: 'Technomancer (Magic Hack)',
			actionType: [false, false, false, false, true, false],
			usesResolve: 0,
		},
	},
};
