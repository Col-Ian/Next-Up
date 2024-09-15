import { Dispatch, SetStateAction } from 'react';

type actionSavedType = {
	action: string;
	index: number;
};

export function setActionOption(
	newAction: string,
	newIndex: number,
	rpUsage: number,
	currentAction: string,
	setActionFunction: Dispatch<SetStateAction<actionSavedType>>,
	setUnavailable: Dispatch<SetStateAction<boolean>>,
	firstAdditionalActionType: string,
	secondAdditionalActionType: string
) {
	if (currentAction != newAction) {
		rpUsage > 0
			? setActionFunction({
					action: `${newAction} (${rpUsage.toString()} RP)`,
					index: newIndex,
			  })
			: setActionFunction({ action: newAction, index: newIndex });
		setUnavailable(false);
	} else {
		setActionFunction({ action: '', index: 0 });
		if (firstAdditionalActionType != '' || secondAdditionalActionType != '') {
			setUnavailable(false);
		} else {
			setUnavailable(true);
		}
	}
}
