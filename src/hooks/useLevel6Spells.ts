import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel6Spells() {
	const { characterID } = useParams();

	const [level6Array, setLevel6Array] = useState<SpellListTypes[]>(
		getValue(`Level6Spells${characterID}`)
	);

	const [currentCharacterIDS6, setCurrentCharacterIDS6] = useState(characterID);

	useEffect(() => {
		setLevel6Array(getValue(`Level6Spells${characterID}`));
		setCurrentCharacterIDS6(characterID);
	}, [characterID]);

	const updateLevel6SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel6Array(newSpellArray);
			setValue(`Level6Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level6Array, updateLevel6SpellArray, currentCharacterIDS6 };
}
