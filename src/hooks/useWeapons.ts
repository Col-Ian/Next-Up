import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useWeapons() {
	const { characterID } = useParams();

	const [weaponsArray, setWeaponsArray] = useState<WeaponType[]>(
		getValue(`Weapons${characterID}`)
	);

	const [currentCharacterID, setCurrentCharacterID] = useState(characterID);

	useEffect(() => {
		setWeaponsArray(getValue(`Weapons${characterID}`));
		setCurrentCharacterID(characterID);
	}, [characterID]);

	const updateWeaponsArray = useCallback(
		(newArray: WeaponType[]) => {
			setWeaponsArray(newArray);
			setValue(`Weapons${characterID}`, newArray);
		},
		[characterID]
	);

	return {
		weaponsArray,
		updateWeaponsArray,
		currentCharacterID,
	};
}
