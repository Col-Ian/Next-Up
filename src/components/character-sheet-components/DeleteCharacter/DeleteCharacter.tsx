import { useContext } from 'react';
import styles from './DeleteCharacter.module.css';
import { CharacterSheetContext } from '../../../states/CharacterSheet/CharacterSheet';
import { Link } from 'react-router-dom';
import { deleteCharacterFunction } from './deleteCharacterFunction';

function DeleteCharacter() {
	const { characterInfoDynamicObject, currentCharacterIDAB, setShow } =
		useContext(CharacterSheetContext);
	return (
		<div className={styles.parentDiv}>
			<div className={styles.deleteText}>
				Are you sure you want to delete{' '}
				{characterInfoDynamicObject.characterName}?
			</div>
			<div className={styles.buttonsDiv}>
				<div className={styles.deleteCancel} onClick={() => setShow(false)}>
					CANCEL
				</div>
				<div className={styles.deleteConfirm}>
					<Link
						to={'/Next-Up/'}
						onClick={() => deleteCharacterFunction(currentCharacterIDAB)}
					>
						DELETE
					</Link>
				</div>
			</div>
		</div>
	);
}

export default DeleteCharacter;
