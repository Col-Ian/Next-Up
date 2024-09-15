type actionSavedType = {
	action: string;
	index: number;
};

export function isInActionsArray(
	action: string,
	index: number,
	actionsArrayList: actionSavedType[]
) {
	let isAction: boolean = false;

	actionsArrayList.forEach((swiftAction) => {
		if (swiftAction.action === action && swiftAction.index === index) {
			isAction = true;
		}
	});

	return isAction;
}
