import { ChangeEvent, useContext, useEffect, useState } from 'react';
import BackButton from '../../../utils/BackButton/BackButton.tsx';
import NextButton from '../../../utils/NextButton/NextButton.tsx';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter.tsx';
import styles from './CharacterCreationName.module.css';
import stylesGeneral from '../../../states/CreateCharacter/CreateCharacter.module.css';

type CharacterCreationNameProps = {
	setInputName: React.Dispatch<React.SetStateAction<string>>;
	inputName: string;
};

function CharacterCreationName({
	setInputName,
	inputName,
}: CharacterCreationNameProps) {
	const { componentArrayPosition, setComponentArrayPosition, componentArray } =
		useContext(CharacterCreationContext);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputName(e.target.value);
	};

	// Validation for the next button
	const [moveOn, setMoveOn] = useState<boolean>(false);

	useEffect(() => {
		if (inputName === '') {
			setMoveOn(false);
		} else {
			setMoveOn(true);
		}
	}, [inputName]);

	return (
		<div className={styles.parentDiv}>
			<div className={stylesGeneral.backNextDiv}>
				<BackButton
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
				/>
				<NextButton
					message='Race'
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
					arrayToCycle={componentArray}
					condition={moveOn}
				/>
			</div>

			<div className={styles.nameDescriptionDiv}>
				<p>
					This guide will help you create your character, step by step. When all
					the steps are completed, you will have the option to confirm your
					choices.
				</p>
			</div>
			<div className={styles.characterNameInputWrap}>
				<div>The first step will be to give your character a name:</div>
				<div className={styles.inputDiv}>
					<input type='text' onChange={handleNameChange} value={inputName} />
				</div>
			</div>
		</div>
	);
}

export default CharacterCreationName;
