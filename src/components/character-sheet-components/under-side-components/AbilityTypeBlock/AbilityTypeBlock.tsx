import { useState } from 'react';
import styles from './AbilityTypeBlock.module.css';

type AbilityTypeBlockProps = {
	abilitiesArray: AbilityListTypes[];
	updateAbilityArray: (newAbilityArray: AbilityListTypes[]) => void;
	index: number;
};

function AbilityTypeBlock({
	abilitiesArray,
	updateAbilityArray,
	index,
}: AbilityTypeBlockProps) {
	const [show, setShow] = useState<boolean>(false);

	function handleShow() {
		setShow(!show);
	}

	const arrayOfActionTypes: string[] = [
		'Standard Action',
		'Move Action',
		'Full Action',
		'Swift Action',
		'Reaction',
	];

	return (
		<div className={styles.parentDiv}>
			<div className={styles.typeDivLabel} onClick={handleShow}>
				Action Type
			</div>
			{show ? (
				<div className={styles.actionTypeDropDown}>
					{arrayOfActionTypes.map((actionType) => {
						return (
							<div
								className={styles.actionRow}
								onClick={() =>
									handleCheckBox(
										actionType,
										abilitiesArray,
										updateAbilityArray,
										index
									)
								}
							>
								<input
									type='checkbox'
									checked={hasAction(
										abilitiesArray[index].actionType,
										actionType
									)}
									readOnly
								/>
								<div className={styles.actionLabel}>{actionType}</div>
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

function hasAction(typeArray: string[], typeToSearch: string) {
	let isInArray = false;

	if (typeArray.includes(typeToSearch)) {
		isInArray = true;
	}

	return isInArray;
}

function handleCheckBox(
	typeString: string,
	abilitiesArray: AbilityListTypes[],
	updateAbilityArray: (newAbilityArray: AbilityListTypes[]) => void,
	index: number
) {
	let isInList: boolean = false;

	let tempAbilitiesArray: AbilityListTypes[] = abilitiesArray;

	tempAbilitiesArray[index].actionType.forEach((action, index) => {
		if (action === typeString) {
			console.log('removing');
			isInList = true;
			tempAbilitiesArray[index].actionType.splice(index, 1);
		}
	});

	if (!isInList) {
		console.log('adding');
		tempAbilitiesArray[index].actionType.push(typeString);
	}

	updateAbilityArray(tempAbilitiesArray);
}

export default AbilityTypeBlock;
