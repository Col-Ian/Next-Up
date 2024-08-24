// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './CombatOptions..module.css';
// import { useCurrentID } from '../../../../hooks/useCurrentID';
// import { getValue } from '../../../../utils/getValue';
// import { MoveActionList } from '../../../../data/general-actions/MoveActionList';
// import { StandardActionList } from '../../../../data/general-actions/StandardActionList';
// import { SwiftActionList } from '../../../../data/general-actions/SwiftActionList';

function CombatOptions() {
	// const { currentID } = useCurrentID();

	// // Create a new array of abilities to display.
	// const [abilitiesArray, setAbilitiesArray] = useState<AbilityListTypes[]>(
	// 	getValue(`Abilities${currentID}`)
	// );

	// // A list to hold all the Standard Actions.
	// const [standardList, setStandardList] =
	// 	useState<AbilityListTypes[]>(StandardActionList);

	// //  A list to hold all the Move Actions.
	// const [moveList, setMoveList] = useState<AbilityListTypes[]>(MoveActionList);

	// // A list to hold all the Swift Actions
	// const [swiftList, setSwiftList] =
	// 	useState<AbilityListTypes[]>(SwiftActionList);

	// //  A list to hold all the Full Actions.
	// const [fullList, setFullList] = useState<AbilityListTypes[]>();

	// const [show, setShow] = useState<boolean>(false);

	// // Reset all values on character swap.
	// useEffect(() => {
	// 	setAbilitiesArray(getValue(`Abilities${currentID}`));
	// 	if (show) expandCombat(show, setShow);
	// }, [currentID]);

	return (
		<div className={styles.parentDiv}>
			{/* <div className={styles.combatOptionsWrapper}>
				<div
					className={styles.combatOptionsContentWrap}
					id={styles.combatOptionsContentWrap}
				>
					<div className={styles.combatOptionsLeftWrap}>
						{standardList.map((ability) => {
							return <div>{ability.abilityName}</div>;
						})}
					</div>
					<div className={styles.combatOptionsRightWrap}>Test</div>
				</div>
				<div className={styles.showCombatOptions}>
					<div
						className={styles.showCombatOptionsButton}
						id={styles.showCombatOptionsButton}
						onClick={() => expandCombat(show, setShow)}
					>
						{show ? 'End' : 'Start'} Combat
					</div>
				</div>
			</div> */}
		</div>
	);
}

// Function to show/hide the component.
// function expandCombat(
// 	show: boolean,
// 	setShow: Dispatch<SetStateAction<boolean>>
// ) {
// 	setShow(!show);

// 	const toggleButton: HTMLElement = document.getElementById(
// 		styles.showCombatOptionsButton
// 	) as HTMLDivElement;

// 	const toggleOptions: HTMLElement = document.getElementById(
// 		styles.combatOptionsContentWrap
// 	) as HTMLDivElement;

// 	toggleButton.classList.toggle(styles.showCombatOptionsButtonShow);

// 	toggleOptions.classList.toggle(styles.show);
// }

export default CombatOptions;
