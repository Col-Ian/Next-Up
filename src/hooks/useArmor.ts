import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useArmor() {
	const { characterID } = useParams();

	const [armorArray, setArmorArray] = useState<ArmorType[]>(
		getValue(`Armor${characterID}`)
	);

	const [currentCharacterID, setCurrentCharacterID] = useState(characterID);

	useEffect(() => {
		setArmorArray(getValue(`Armor${characterID}`));
		setCurrentCharacterID(characterID);
	}, [characterID]);

	const updateArmorArray = useCallback(
		(newArray: ArmorType[]) => {
			setArmorArray(newArray);
			setValue(`Armor${characterID}`, newArray);
		},
		[characterID]
	);

	return { armorArray, updateArmorArray, currentCharacterID };
}
