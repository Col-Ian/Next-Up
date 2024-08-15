import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useArmor() {
	const { characterID } = useParams();

	const [armorArray, setArmorArray] = useState<ArmorType[]>(
		getValue(`Armor${characterID}`)
	);

	useEffect(() => {
		setArmorArray(getValue(`Armor${characterID}`));
	}, [characterID]);

	const updateArmorArray = useCallback(
		(newArray: ArmorType[]) => {
			setArmorArray(newArray);
			setValue(`Armor${characterID}`, newArray);
		},
		[characterID]
	);

	function handleAddArmor() {
		updateArmorArray([
			...armorArray,
			{
				armorName: '',
				armorType: '',
				armorProficiency: '',
				armorLevel: 0,
				armorEAC: 0,
				armorKAC: 0,
				maxDexBonus: 0,
				isEquipped: false,
			},
		]);
	}

	function handleDeleteArmor(index: number) {
		const filteredArray = armorArray.filter(
			(armor) => armorArray.indexOf(armor) != index
		);
		if (filteredArray.length > 0) {
			updateArmorArray(filteredArray);
		} else {
			updateArmorArray([
				{
					armorName: '',
					armorType: '',
					armorProficiency: '',
					armorLevel: 0,
					armorEAC: 0,
					armorKAC: 0,
					maxDexBonus: 0,
					isEquipped: false,
				},
			]);
		}
	}

	return { armorArray, updateArmorArray, handleAddArmor, handleDeleteArmor };
}
