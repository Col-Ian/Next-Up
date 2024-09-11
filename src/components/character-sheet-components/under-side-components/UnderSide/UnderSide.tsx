import { useLevel0Spells } from '../../../../hooks/useLevel0Spells';
import { useLevel1Spells } from '../../../../hooks/useLevel1Spells';
import { useLevel2Spells } from '../../../../hooks/useLevel2Spells';
import { useLevel3Spells } from '../../../../hooks/useLevel3Spells';
import { useLevel4Spells } from '../../../../hooks/useLevel4Spells';
import { useLevel5Spells } from '../../../../hooks/useLevel5Spells';
import { useLevel6Spells } from '../../../../hooks/useLevel6Spells';
import AbilitiesBlock from '../AbilitiesBlock/AbilitiesBlock';
import SpellBlocks from '../SpellBlocks/SpellBlocks';
import styles from './UnderSide.module.css';

function UnderSide() {
	const { level0Array, updateLevel0SpellArray, currentCharacterIDS0 } =
		useLevel0Spells();

	const { level1Array, updateLevel1SpellArray, currentCharacterIDS1 } =
		useLevel1Spells();

	const { level2Array, updateLevel2SpellArray, currentCharacterIDS2 } =
		useLevel2Spells();

	const { level3Array, updateLevel3SpellArray, currentCharacterIDS3 } =
		useLevel3Spells();

	const { level4Array, updateLevel4SpellArray, currentCharacterIDS4 } =
		useLevel4Spells();

	const { level5Array, updateLevel5SpellArray, currentCharacterIDS5 } =
		useLevel5Spells();

	const { level6Array, updateLevel6SpellArray, currentCharacterIDS6 } =
		useLevel6Spells();

	return (
		<div className={styles.parentDiv}>
			<AbilitiesBlock />
			<SpellBlocks
				spellLevel='0'
				spellArray={level0Array}
				updateSpellArray={updateLevel0SpellArray}
				currentCharacterID={currentCharacterIDS0}
			/>
			<SpellBlocks
				spellLevel='1'
				spellArray={level1Array}
				updateSpellArray={updateLevel1SpellArray}
				currentCharacterID={currentCharacterIDS1}
			/>
			<SpellBlocks
				spellLevel='2'
				spellArray={level2Array}
				updateSpellArray={updateLevel2SpellArray}
				currentCharacterID={currentCharacterIDS2}
			/>
			<SpellBlocks
				spellLevel='3'
				spellArray={level3Array}
				updateSpellArray={updateLevel3SpellArray}
				currentCharacterID={currentCharacterIDS3}
			/>
			<SpellBlocks
				spellLevel='4'
				spellArray={level4Array}
				updateSpellArray={updateLevel4SpellArray}
				currentCharacterID={currentCharacterIDS4}
			/>
			<SpellBlocks
				spellLevel='5'
				spellArray={level5Array}
				updateSpellArray={updateLevel5SpellArray}
				currentCharacterID={currentCharacterIDS5}
			/>
			<SpellBlocks
				spellLevel='6'
				spellArray={level6Array}
				updateSpellArray={updateLevel6SpellArray}
				currentCharacterID={currentCharacterIDS6}
			/>
		</div>
	);
}

export default UnderSide;
