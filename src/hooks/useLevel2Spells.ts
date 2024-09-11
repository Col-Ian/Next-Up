import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel2Spells() {
	const { characterID } = useParams();

	const [level2Array, setLevel2Array] = useState<SpellListTypes[]>(
		getValue(`Level2Spells${characterID}`)
	);

	const [currentCharacterIDS2, setCurrentCharacterIDS2] = useState(characterID);

	useEffect(() => {
		setLevel2Array(getValue(`Level2Spells${characterID}`));
		setCurrentCharacterIDS2(characterID);
	}, [characterID]);

	const updateLevel2SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel2Array(newSpellArray);
			setValue(`Level2Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level2Array, updateLevel2SpellArray, currentCharacterIDS2 };
}
