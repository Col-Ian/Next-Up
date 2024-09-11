import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { useAbilityScores } from '../../hooks/useAbilityScores.ts';
import { useSkills } from '../../hooks/useSkills.ts';
import { useStaminaHealthResolve } from '../../hooks/useStaminaHealthResolve.ts';
import { FormProvider, useForm } from 'react-hook-form';
import { setValue } from '../../utils/setValue.ts';
import { useInitiativeScore } from '../../hooks/useInitiativeScore.ts';
import { useCurrentID } from '../../hooks/useCurrentID.ts';
import { GetModifier } from '../../utils/GetModifier.ts';
import UnderSide from '../../components/character-sheet-components/under-side-components/UnderSide/UnderSide.tsx';
import { useArmorClassBlock } from '../../hooks/useArmorClassBlock.ts';
import { useSavingThrows } from '../../hooks/useSavingThrows.ts';
import { useExperience } from '../../hooks/useExperience.ts';
import { useAttackBonuses } from '../../hooks/useAttackBonuses.ts';
import CombatOptions from '../../components/character-sheet-components/combat-options-components/CombatOptions/CombatOptions.tsx';
import { useAbilities } from '../../hooks/useAbilities.ts';
import { useCharacterInfoDynamicObject } from '../../hooks/useCharacterInfoDynamicObject.ts';
import DeleteCharacter from '../../components/character-sheet-components/DeleteCharacter/DeleteCharacter.tsx';

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		updateState: (newValue: SkillListType) => void;
	};
};

export const CharacterSheetContext = createContext<{
	strengthAbility: AbilityScoreType;
	updateStrength: (newStrength: AbilityScoreType) => void;
	dexterityAbility: AbilityScoreType;
	updateDexterity: (newDexterity: AbilityScoreType) => void;
	constitutionAbility: AbilityScoreType;
	updateConstitution: (newConstitution: AbilityScoreType) => void;
	intelligenceAbility: AbilityScoreType;
	updateIntelligence: (newIntelligence: AbilityScoreType) => void;
	wisdomAbility: AbilityScoreType;
	updateWisdom: (newWisdom: AbilityScoreType) => void;
	charismaAbility: AbilityScoreType;
	updateCharisma: (newCharisma: AbilityScoreType) => void;

	initMisc: number;

	currentSP: number;
	currentHP: number;
	currentRP: number;
	tempSP: number;
	tempHP: number;
	tempRP: number;

	SkillBlockStatesList: SkillBlockStatesListType;

	characterInfoObject: CharacterInfoObjectType;
	characterInfoDynamicObject: CharacterBasicInfoDynamicType;

	armorEquipped: ArmorType;
	updateArmorEquipped: (newArmorEquipped: ArmorType) => void;
	armorMiscMods: {
		energy: number;
		kenetic: number;
	};
	savingThrowMisc: {
		fortitude: number;
		reflex: number;
		will: number;
	};
	attackBonuses: {
		melee: number;
		ranged: number;
		thrown: number;
	};
	armorArray: ArmorType[];
	updateArmorArray: (newArray: ArmorType[]) => void;
	currentCharacterIDAC: string | undefined;

	abilitiesArray: AbilityListTypes[];
	updateAbilityArray: (newAbilityArray: AbilityListTypes[]) => void;
	currentCharacterIDAB: string | undefined;

	setShow: Dispatch<SetStateAction<boolean>>;
}>({} as any);

function CharacterSheet() {
	const { characterID } = useParams();

	// This is needed to not overwrite the data in the previously selected character. Form will write data before the characterID from useParams would update.
	const { currentID } = useCurrentID();

	// React-hook-form methods.
	const methods = useForm();
	const { reset, watch } = methods;

	// Custom hook states.

	const { characterInfoDynamicObject, updateCharacterInfoDynamicObject } =
		useCharacterInfoDynamicObject();

	const {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
		updateCharisma,
		updateConstitution,
		updateDexterity,
		updateIntelligence,
		updateStrength,
		updateWisdom,
	} = useAbilityScores();

	const { initMisc, updateInitMisc } = useInitiativeScore();

	const {
		currentSP,
		updateCurrentSP,
		currentHP,
		updateCurrentHP,
		currentRP,
		updateCurrentRP,
		tempSP,
		updateTempSP,
		tempHP,
		updateTempHP,
		tempRP,
		updateTempRP,
	} = useStaminaHealthResolve();

	const { SkillBlockStatesList, setSkill } = useSkills();

	const {
		armorEquipped,
		updateArmorEquipped,
		armorMiscMods,
		updateArmorMiscMods,
		armorArray,
		updateArmorArray,
		currentCharacterIDAC,
	} = useArmorClassBlock();

	const { savingThrowMisc, updateSavingThrowMisc } = useSavingThrows();

	const { attackBonuses, updateAttackBonuses } = useAttackBonuses();

	const { experience, updateExperience } = useExperience();

	// To be passed onto AbilitiesBlock and CombatOptions
	const { abilitiesArray, updateAbilityArray, currentCharacterIDAB } =
		useAbilities();

	// To use for showing the delete text.
	const [show, setShow] = useState<boolean>(false);

	// useEffect for all changes related to swapping characters
	useEffect(() => {
		// Set the values for the skills correctly on load if they changed before being set here..
		Object.keys(SkillBlockStatesList).forEach((skill) => {
			// If it's a Specialization Skill, don't add the rank. It's not supposed to count to the total ranks per level, and always equal to the level of the character.
			if (SkillBlockStatesList[skill].skillState.operativeSpecializationSkill) {
				setSkill(
					0,
					GetModifier(
						getValue(
							`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
						)
					),
					skill
				);
			} else {
				setSkill(
					SkillBlockStatesList[skill].skillState.ranks,
					GetModifier(
						getValue(
							`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
						)
					),
					skill
				);
			}
		});

		// Set default values based on character selected.
		let defaultValues = {
			// CharacterInfo registers

			characterAlignment: characterInfoDynamicObject.characterAlignment,
			characterDiety: characterInfoDynamicObject.characterDiety,
			characterGender: characterInfoDynamicObject.characterGender,
			characterHomeWorld: characterInfoDynamicObject.characterHomeWorld,
			characterName: characterInfoDynamicObject.characterName,
			characterSize: characterInfoDynamicObject.characterSize,
			characterSpeed: characterInfoDynamicObject.characterSpeed,
			playerName: characterInfoDynamicObject.playerName,

			// DescriptionBlock registers

			descriptionBlock: getValue(`Description${characterID}`),

			// AbilityScoreBlock registers

			bonusStr: strengthAbility.asBonus,
			bonusDex: dexterityAbility.asBonus,
			bonusCon: constitutionAbility.asBonus,
			bonusInt: intelligenceAbility.asBonus,
			bonusWis: wisdomAbility.asBonus,
			bonusCha: charismaAbility.asBonus,

			penaltyStr: strengthAbility.asPenalty,
			penaltyDex: dexterityAbility.asPenalty,
			penaltyCon: constitutionAbility.asPenalty,
			penaltyInt: intelligenceAbility.asPenalty,
			penaltyWis: wisdomAbility.asPenalty,
			penaltyCha: charismaAbility.asPenalty,

			// InitiativeBlock registers
			InitiativeMiscModifier: initMisc,

			// HealthAndResolveBlock registers
			currentSP: currentSP,
			currentHP: currentHP,
			currentRP: currentRP,
			tempSP: tempSP,
			tempHP: tempHP,
			tempRP: tempRP,

			// SkillsBlock registers (Individual skills registered in SkillsBlock.tsx)
			ProfessionName: getValue(`ProfessionName${characterID}`),

			// SkillNotesBlock registers
			skillNotes: getValue(`SkillNotes${characterID}`),

			// ArmorClassBlock registers
			bonusEAC: armorEquipped.armorEAC,
			miscModEAC: armorMiscMods.energy,
			bonusKAC: armorEquipped.armorKAC,
			miscModKAC: armorMiscMods.kenetic,
			damageReduction: getValue(`DR${characterID}`),
			resistances: getValue(`Resistances${characterID}`),

			// SavingThrowsBlock registers
			miscFortitude: savingThrowMisc.fortitude,
			miscReflex: savingThrowMisc.reflex,
			miscWill: savingThrowMisc.will,

			// AttackBonusesBlock registers

			// Weapon/Armor Proficiencies Block registers
			weaponProficiencies: getValue(`WeaponProficiencies${characterID}`),
			armorProficiencies: getValue(`ArmorProficiencies${characterID}`),

			// LanguagesBlock registers
			languages: getValue(`Languages${characterID}`),

			// AttackBonusesBlock registers
			meleeMisc: attackBonuses.melee,
			rangedMisc: attackBonuses.ranged,
			thrownMisc: attackBonuses.thrown,

			// ExperienceBlock registers
			xpEarned: experience.earned,
			nextLevel: experience.needed,

			// AbilitiesBlock, WeaponsBlock, and ArmorBlock registers will be done in their components since they use add and delete dynamically.
		};

		// Reset the defaultValues.
		reset({ ...defaultValues });

		setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
	}, [
		currentID,
		strengthAbility,
		constitutionAbility,
		dexterityAbility,
		wisdomAbility,
		intelligenceAbility,
		charismaAbility,
		initMisc,
		currentSP,
		currentHP,
		currentRP,
		tempSP,
		tempHP,
		tempRP,
	]);

	// useEffect to save data to local storage.
	useEffect(() => {
		const subscription = watch((data) => {
			// CharacterInfo registers
			updateCharacterInfoDynamicObject({
				characterAlignment: data.characterAlignment,
				characterDiety: data.characterDiety,
				characterGender: data.characterGender,
				characterHomeWorld: data.characterHomeWorld,
				characterName: data.characterName,
				characterSize: data.characterSize,
				characterSpeed: data.characterSpeed,
				playerName: data.playerName,
			});

			// DescriptionBlock registers.
			setValue(`Description${characterID}`, data.descriptionBlock);

			// AbilityScoreBlock registers.

			updateStrength({
				aSName: 'Strength',
				asBonus: Number(data.bonusStr),
				asPenalty: Number(data.penaltyStr),
				value: Number(strengthAbility.value),
			});

			updateDexterity({
				aSName: 'Dexterity',
				asBonus: Number(data.bonusDex),
				asPenalty: Number(data.penaltyDex),
				value: Number(dexterityAbility.value),
			});

			updateConstitution({
				aSName: 'Constitution',
				asBonus: Number(data.bonusCon),
				asPenalty: Number(data.penaltyCon),
				value: Number(constitutionAbility.value),
			});

			updateIntelligence({
				aSName: 'Intelligence',
				asBonus: Number(data.bonusInt),
				asPenalty: Number(data.penaltyInt),
				value: Number(intelligenceAbility.value),
			});

			updateWisdom({
				aSName: 'Wisdom',
				asBonus: Number(data.bonusWis),
				asPenalty: Number(data.penaltyWis),
				value: Number(wisdomAbility.value),
			});

			updateCharisma({
				aSName: 'Charisma',
				asBonus: Number(data.bonusCha),
				asPenalty: Number(data.penaltyCha),
				value: Number(charismaAbility.value),
			});

			// InitiativeBlock registers.
			updateInitMisc(Number(data.InitiativeMiscModifier));

			// HealthAndResolveBlock registers.
			updateCurrentSP(Number(data.currentSP));
			updateCurrentHP(Number(data.currentHP));
			updateCurrentRP(Number(data.currentRP));
			updateTempSP(Number(data.tempSP));
			updateTempHP(Number(data.tempHP));
			updateTempRP(Number(data.tempRP));

			// SkillsBlock registers.
			setValue(`ProfessionName${characterID}`, data.ProfessionName);

			// SkillNotesBlock registers.
			setValue(`SkillNotes${characterID}`, data.skillNotes);

			Object.keys(SkillBlockStatesList).forEach((skill) => {
				// If it's a Specialization Skill, don't add the rank. It's not supposed to count to the total ranks per level, and always equal to the level of the character.
				if (
					SkillBlockStatesList[skill].skillState.operativeSpecializationSkill
				) {
					setSkill(
						0,
						GetModifier(
							getValue(
								`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
							)
						),
						skill
					);
				} else {
					setSkill(
						Number(data[`${skill}Ranks`]),
						GetModifier(
							getValue(
								`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
							)
						),
						skill
					);
				}
			});

			Object.keys(SkillBlockStatesList).forEach((skill) => {
				SkillBlockStatesList[skill].updateState(
					getValue(`${skill}${currentID}`)
				);
			});

			// ArmorClassBlock registers
			setValue(`DR${characterID}`, data.damageReduction);
			setValue(`Resistances${characterID}`, data.resistances);
			updateArmorMiscMods({
				energy: data.miscModEAC,
				kenetic: data.miscModKAC,
			});

			// SavingThrowsBlock registers
			updateSavingThrowMisc({
				fortitude: data.miscFortitude,
				reflex: data.miscReflex,
				will: data.miscWill,
			});

			// AttackBonusesBlock register
			updateAttackBonuses({
				melee: data.meleeMisc,
				ranged: data.rangedMisc,
				thrown: data.thrownMisc,
			});

			// Weapon/Armor Proficiencies Block registers
			setValue(`WeaponProficiencies${characterID}`, data.weaponProficiencies);
			setValue(`ArmorProficiencies${characterID}`, data.armorProficiencies);

			// LanguagesBlock registers
			setValue(`Languages${characterID}`, data.languages);

			// ExperienceBlock registers
			updateExperience({ earned: data.xpEarned, needed: data.nextLevel });
		});
		return () => subscription.unsubscribe();
	}, [
		currentID,
		watch,
		updateCharisma,
		updateConstitution,
		updateStrength,
		updateDexterity,
		updateIntelligence,
		updateWisdom,
		strengthAbility,
		wisdomAbility,
		charismaAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		updateInitMisc,
		initMisc,
		currentSP,
		updateCurrentSP,
		currentHP,
		updateCurrentHP,
		currentRP,
		updateCurrentRP,
		tempSP,
		updateTempSP,
		tempHP,
		updateTempHP,
		tempRP,
		updateTempRP,
		armorEquipped,
		updateArmorEquipped,
		SkillBlockStatesList,
	]);

	const [characterInfoObject, setCharacterInfoObject] =
		useState<CharacterInfoObjectType>(
			getValue(`characterBasicInfo${characterID}`)
		);

	/*
    Static States to be passed to children.*****************************************************************
    */

	// Character Level

	const characterLevel = getValue(`Level${characterID}`);

	const Component = levelUpList[characterInfoObject.chClass]?.componentForClass;

	return (
		<CharacterSheetContext.Provider
			value={{
				strengthAbility: strengthAbility,
				updateStrength: updateStrength,
				dexterityAbility: dexterityAbility,
				updateDexterity: updateDexterity,
				constitutionAbility: constitutionAbility,
				updateConstitution: updateConstitution,
				intelligenceAbility: intelligenceAbility,
				updateIntelligence: updateIntelligence,
				wisdomAbility: wisdomAbility,
				updateWisdom: updateWisdom,
				charismaAbility: charismaAbility,
				updateCharisma: updateCharisma,

				initMisc: initMisc,

				currentSP: currentSP,
				currentHP: currentHP,
				currentRP: currentRP,
				tempSP: tempSP,
				tempHP: tempHP,
				tempRP: tempRP,

				SkillBlockStatesList: SkillBlockStatesList,

				characterInfoObject: characterInfoObject,
				characterInfoDynamicObject: characterInfoDynamicObject,

				armorEquipped: armorEquipped,
				updateArmorEquipped: updateArmorEquipped,
				armorMiscMods: armorMiscMods,
				armorArray: armorArray,
				updateArmorArray: updateArmorArray,
				currentCharacterIDAC: currentCharacterIDAC,

				savingThrowMisc: savingThrowMisc,

				attackBonuses: attackBonuses,

				abilitiesArray: abilitiesArray,
				updateAbilityArray: updateAbilityArray,
				currentCharacterIDAB: currentCharacterIDAB,

				setShow: setShow,
			}}
		>
			<FormProvider {...methods}>
				{characterLevel === 0 && characterID ? (
					// Confirm all first level selections based on class, which need to be handled uniquely.
					<div className={styles.firstLevelMessageParentDiv}>
						<div className={styles.firstLevelMessageWrapper}>
							<FirstLevelMessage />
							<div>{Component ? <Component keyID={characterID} /> : null}</div>
						</div>
					</div>
				) : (
					// Once character has confirmed choices, move on to sheet.
					<div className={styles.parentDiv}>
						<CombatOptions />

						<div className={styles.characterSheetMainDiv}>
							<div className={styles.characterSheetWrapper}>
								<div className={styles.characterInfoDescriptionBlock}>
									<div className={styles.characterInfoBlock}>
										<CharacterInfo />
									</div>

									<div className={styles.characterDescriptionBlock}>
										<DescriptionBlock />
									</div>
								</div>
								<div className={styles.statArea}>
									<div className={styles.leftSide}>
										<LeftSide />
									</div>

									<div className={styles.rightSide}>
										<RightSide />
									</div>
								</div>
								<div className={styles.underWrapper}>
									<div className={styles.underSide}>
										<UnderSide />
									</div>
								</div>
							</div>
							<div className={styles.bottomSheetButtons}>
								<div
									className={styles.deleteButton}
									onClick={() => setShow(!show)}
								>
									DELETE
								</div>
								<div
									className={
										characterLevel < 20
											? styles.levelUpButtonDiv
											: styles.levelUpBeyondButton
									}
								>
									<Link to={`/Next-Up/level-up/${currentID}`}>LEVEL UP</Link>
								</div>
							</div>
							<div className={styles.deleteCharacterPopUp}>
								{show ? <DeleteCharacter /> : null}
							</div>
						</div>
					</div>
				)}
			</FormProvider>
		</CharacterSheetContext.Provider>
	);
}

export default CharacterSheet;
