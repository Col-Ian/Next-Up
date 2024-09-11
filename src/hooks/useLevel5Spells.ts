import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel5Spells() {
	const { characterID } = useParams();

	const [level5Array, setLevel5Array] = useState<SpellListTypes[]>(
		getValue(`Level5Spells${characterID}`)
	);

	const [currentCharacterIDS5, setCurrentCharacterIDS5] = useState(characterID);

	useEffect(() => {
		setLevel5Array(getValue(`Level5Spells${characterID}`));
		setCurrentCharacterIDS5(characterID);
	}, [characterID]);

	const updateLevel5SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel5Array(newSpellArray);
			setValue(`Level5Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level5Array, updateLevel5SpellArray, currentCharacterIDS5 };
}
