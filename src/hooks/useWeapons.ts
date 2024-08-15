import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useWeapons() {
	const { characterID } = useParams();

	const [weaponsArray, setWeaponsArray] = useState<WeaponType[]>(
		getValue(`Weapons${characterID}`)
	);

	useEffect(() => {
		setWeaponsArray(getValue(`Weapons${characterID}`));
	}, [characterID]);

	const updateWeaponsArray = useCallback(
		(newArray: WeaponType[]) => {
			setWeaponsArray(newArray);
			setValue(`Weapons${characterID}`, newArray);
		},
		[characterID]
	);

	function handleAddWeapon() {
		updateWeaponsArray([
			...weaponsArray,
			{
				weaponName: '',
				weaponType: '',
				weaponRange: '',
				weaponCritical: '',
				weaponAmmoTotal: 0,
				weaponAmmoUsage: 0,
				weaponProficiency: '',
				weaponLevel: 0,
				weaponToHit: 0,
				weaponDamageType: '',
				weaponDamageRoll: '',
			},
		]);
	}

	function handleDeleteWeapon(index: number) {
		const filteredArray = weaponsArray.filter(
			(weapon) => weaponsArray.indexOf(weapon) != index
		);
		if (filteredArray.length > 0) {
			updateWeaponsArray(filteredArray);
		} else {
			updateWeaponsArray([
				{
					weaponName: '',
					weaponType: '',
					weaponRange: '',
					weaponCritical: '',
					weaponAmmoTotal: 0,
					weaponAmmoUsage: 0,
					weaponProficiency: '',
					weaponLevel: 0,
					weaponToHit: 0,
					weaponDamageType: '',
					weaponDamageRoll: '',
				},
			]);
		}
	}

	return {
		weaponsArray,
		updateWeaponsArray,
		handleAddWeapon,
		handleDeleteWeapon,
	};
}
