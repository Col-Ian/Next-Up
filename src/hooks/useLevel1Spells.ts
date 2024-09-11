import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel1Spells() {
	const { characterID } = useParams();

	const [level1Array, setLevel1Array] = useState<SpellListTypes[]>(
		getValue(`Level1Spells${characterID}`)
	);

	const [currentCharacterIDS1, setCurrentCharacterIDS1] = useState(characterID);

	useEffect(() => {
		setLevel1Array(getValue(`Level1Spells${characterID}`));
		setCurrentCharacterIDS1(characterID);
	}, [characterID]);

	const updateLevel1SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel1Array(newSpellArray);
			setValue(`Level1Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level1Array, updateLevel1SpellArray, currentCharacterIDS1 };
}
