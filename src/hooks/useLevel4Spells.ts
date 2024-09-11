import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useLevel4Spells() {
	const { characterID } = useParams();

	const [level4Array, setLevel4Array] = useState<SpellListTypes[]>(
		getValue(`Level4Spells${characterID}`)
	);

	const [currentCharacterIDS4, setCurrentCharacterIDS4] = useState(characterID);

	useEffect(() => {
		setLevel4Array(getValue(`Level4Spells${characterID}`));
		setCurrentCharacterIDS4(characterID);
	}, [characterID]);

	const updateLevel4SpellArray = useCallback(
		(newSpellArray: SpellListTypes[]) => {
			setLevel4Array(newSpellArray);
			setValue(`Level4Spells${characterID}`, newSpellArray);
		},
		[characterID]
	);

	return { level4Array, updateLevel4SpellArray, currentCharacterIDS4 };
}
