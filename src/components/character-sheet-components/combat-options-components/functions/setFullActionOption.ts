import { Dispatch, SetStateAction } from 'react';

type actionSavedType = {
	action: string;
	index: number;
};

export function setFullActionOption(
	newAction: string,
	newIndex: number,
	rpUsage: number,
	currentAction: string,
	setFullActionFunction: Dispatch<SetStateAction<actionSavedType>>,
	setStandardUnavailable: Dispatch<SetStateAction<boolean>>,
	setMoveUnavailable: Dispatch<SetStateAction<boolean>>,
	setSwiftAvailable: Dispatch<SetStateAction<boolean>>
) {
	if (currentAction != newAction) {
		rpUsage > 0
			? setFullActionFunction({
					action: `${newAction} (${rpUsage.toString()} RP)`,
					index: newIndex,
			  })
			: setFullActionFunction({ action: newAction, index: newIndex });
		setStandardUnavailable(false);
		setMoveUnavailable(false);
		setSwiftAvailable(false);
	} else {
		setFullActionFunction({ action: '', index: 0 });
		setStandardUnavailable(true);
		setMoveUnavailable(true);
		setSwiftAvailable(true);
	}
}
