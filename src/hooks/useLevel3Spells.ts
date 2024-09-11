import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel3Spells() {
	const { characterID } = useParams();

	const [level3Array, setLevel3Array] = useState<SpellListTypes[]>(
		getValue(`Level3Spells${characterID}`)
	);

	const [currentCharacterIDS3, setCurrentCharacterIDS3] = useState(characterID);

	useEffect(() => {
		setLevel3Array(getValue(`Level3Spells${characterID}`));
		setCurrentCharacterIDS3(characterID);
	}, [characterID]);

	const updateLevel3SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel3Array(newSpellArray);
			setValue(`Level3Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level3Array, updateLevel3SpellArray, currentCharacterIDS3 };
}
