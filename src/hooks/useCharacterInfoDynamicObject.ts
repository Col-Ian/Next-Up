import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useCharacterInfoDynamicObject() {
	const { characterID } = useParams();

	const [characterInfoDynamicObject, setCharacterInfoDynamicObject] =
		useState<CharacterBasicInfoDynamicType>(
			getValue(`characterBasicInfoDynamic${characterID}`)
		);

	useEffect(() => {
		setCharacterInfoDynamicObject(
			getValue(`characterBasicInfoDynamic${characterID}`)
		);
	}, [characterID]);

	const updateCharacterInfoDynamicObject = useCallback(
		(newObject: CharacterBasicInfoDynamicType) => {
			setCharacterInfoDynamicObject(newObject);
			setValue(`characterBasicInfoDynamic${characterID}`, newObject);
		},
		[characterID]
	);

	return {
		characterInfoDynamicObject,
		updateCharacterInfoDynamicObject,
	};
}
