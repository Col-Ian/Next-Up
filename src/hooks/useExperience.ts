import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useExperience() {
	const { characterID } = useParams();

	const [experience, setExperience] = useState<{
		earned: number;
		needed: number;
	}>(getValue(`Experience${characterID}`));

	useEffect(() => {
		setExperience(getValue(`Experience${characterID}`));
	}, [characterID]);

	const updateExperience = useCallback(
		(newEXP: { earned: number; needed: number }) => {
			setExperience(newEXP);
			setValue(`Experience${characterID}`, newEXP);
		},
		[characterID]
	);

	return { experience, updateExperience };
}
