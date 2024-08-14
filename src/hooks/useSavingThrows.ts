import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useSavingThrows() {
	const { characterID } = useParams();

	const [savingThrowMisc, setSavingThrowMisc] = useState<{
		fortitude: number;
		reflex: number;
		will: number;
	}>(getValue(`SavingThrowMiscMods${characterID}`));

	useEffect(() => {
		setSavingThrowMisc(getValue(`SavingThrowMiscMods${characterID}`));
	}, [characterID]);

	const updateSavingThrowMisc = useCallback(
		(newMiscMods: { fortitude: number; reflex: number; will: number }) => {
			setSavingThrowMisc(newMiscMods);
			setValue(`SavingThrowMiscMods${characterID}`, newMiscMods);
		},
		[characterID]
	);

	return { savingThrowMisc, updateSavingThrowMisc };
}
