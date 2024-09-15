import { Dispatch, SetStateAction } from 'react';

type actionSavedType = {
	action: string;
	index: number;
};

export function handleActionArrayOnClick(
	actionsArray: actionSavedType[],
	setActionsArray: Dispatch<SetStateAction<actionSavedType[]>>,
	newAction: actionSavedType
) {
	let isInList: boolean = false;
	let tempList: actionSavedType[] = actionsArray;

	// If it's in the list, set the boolean to true and splice from temp list
	actionsArray.forEach((swiftAction, index) => {
		if (
			swiftAction.action === newAction.action &&
			swiftAction.index === newAction.index
		) {
			isInList = true;
			tempList.splice(index, 1);
		}
	});

	// If it's not in the list, add it.
	if (!isInList) {
		tempList.push(newAction);
	}

	tempList.sort((a, b) => a.index - b.index);

	setActionsArray(tempList);
}
