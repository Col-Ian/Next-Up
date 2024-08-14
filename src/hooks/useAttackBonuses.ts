import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useAttackBonuses() {
	const { characterID } = useParams();

	const [attackBonuses, setAttackBonuses] = useState<{
		melee: number;
		ranged: number;
		thrown: number;
	}>(getValue(`AttackBonusesMiscMods${characterID}`));

	useEffect(() => {
		setAttackBonuses(getValue(`AttackBonusesMiscMods${characterID}`));
	}, [characterID]);

	const updateAttackBonuses = useCallback(
		(newBonuses: { melee: number; ranged: number; thrown: number }) => {
			setAttackBonuses(newBonuses);
			setValue(`AttackBonusesMiscMods${characterID}`, newBonuses);
		},
		[characterID]
	);

	return { attackBonuses, updateAttackBonuses };
}
