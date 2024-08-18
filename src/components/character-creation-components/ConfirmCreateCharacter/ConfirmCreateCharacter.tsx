import { useContext, useEffect, useState } from 'react';
import BackButton from '../../../utils/BackButton/BackButton.tsx';
import styles from './ConfirmCreateCharacter.module.css';
import stylesGeneral from '../../../states/CreateCharacter/CreateCharacter.module.css';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter.tsx';
import AddCharacterButton from '../AddCharacterButton/AddCharacterButton.tsx';
import { getValue } from '../../../utils/getValue.ts';
import RedLabel from '../../labels/RedLabel/RedLabel.tsx';

function ConfirmCreateCharacter() {
	const { componentArrayPosition, setComponentArrayPosition } = useContext(
		CharacterCreationContext
	);

	const [
		{
			inputName,
			race,
			chClass,
			keyAbilityScoreSelected,
			theme,
			themeOptionOne,
			themeOptionTwo,
			themeOptionThree,
			raceOptionOne,
			raceOptionTwo,
			raceOptionThree,
		},
		setTempCharacterInfo,
	] = useState(getValue('tempCharacterInfo'));

	useEffect(() => {
		setTempCharacterInfo(getValue('tempCharacterInfo'));
	}, []);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.confirmName}>Create {inputName}?</div>
			<div className={styles.confirmInfoDiv}>
				<RedLabel redLabelText='RACE' />
				<div className={stylesGeneral.descriptionDiv}>
					{race}
					{raceOptionOne != '' && (
						<>
							<div className={styles.confirmOptionsHead}>Selected:</div>
							<div className={styles.confirmOptions}>{raceOptionOne}</div>
							{raceOptionTwo != '' && (
								<div className={styles.confirmOptions}>{raceOptionTwo}</div>
							)}
							{raceOptionThree != '' && (
								<div className={styles.confirmOptions}>{raceOptionThree}</div>
							)}
						</>
					)}
				</div>
			</div>
			<div className={styles.confirmInfoDiv}>
				<RedLabel redLabelText='CLASS' />
				<div className={stylesGeneral.descriptionDiv}>{chClass}</div>
				<RedLabel redLabelText='KEY ABILITY SCORE' />
				<div className={stylesGeneral.descriptionDiv}>
					{keyAbilityScoreSelected}
				</div>
			</div>
			<div className={styles.confirmInfoDiv}>
				<RedLabel redLabelText='THEME' />
				<div className={stylesGeneral.descriptionDiv}>
					{theme}
					{themeOptionOne != '' && (
						<>
							<div className={styles.confirmOptionsHead}>Selected:</div>
							<div className={styles.confirmOptions}>{themeOptionOne}</div>
							{themeOptionTwo != '' && (
								<div className={styles.confirmOptions}>{themeOptionTwo}</div>
							)}
							{themeOptionThree != '' && (
								<div className={styles.confirmOptions}>{themeOptionThree}</div>
							)}
						</>
					)}
				</div>
			</div>

			<div className={stylesGeneral.backNextDiv}>
				<BackButton
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
				/>
				<AddCharacterButton />
			</div>
		</div>
	);
}

export default ConfirmCreateCharacter;
