import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel0Spells() {
	const { characterID } = useParams();

	const [level0Array, setLevel0Array] = useState<SpellListTypes[]>(
		getValue(`Level0Spells${characterID}`)
	);

	const [currentCharacterIDS0, setCurrentCharacterIDS0] = useState(characterID);

	useEffect(() => {
		setLevel0Array(getValue(`Level0Spells${characterID}`));
		setCurrentCharacterIDS0(characterID);
	}, [characterID]);

	const updateLevel0SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel0Array(newSpellArray);
			setValue(`Level0Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level0Array, updateLevel0SpellArray, currentCharacterIDS0 };
}
