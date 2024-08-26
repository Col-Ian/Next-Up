import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './CombatOptions..module.css';
import { useCurrentID } from '../../../../hooks/useCurrentID';
import { getValue } from '../../../../utils/getValue';
// import { MoveActionList } from '../../../../data/general-actions/MoveActionList';
// import { StandardActionList } from '../../../../data/general-actions/StandardActionList';
// import { SwiftActionList } from '../../../../data/general-actions/SwiftActionList';
// import { FullActionList } from '../../../../data/general-actions/FullActionList';
// import { ReactionList } from '../../../../data/general-actions/ReactionList';

function CombatOptions() {
	const { currentID } = useCurrentID();

	// Create a new array of abilities to display.
	const [abilitiesArray, setAbilitiesArray] = useState<AbilityListTypes[]>(
		getValue(`Abilities${currentID}`)
	);

	// A list to hold all the Standard Actions.
	// const [standardList, setStandardList] =
	// 	useState<AbilityListTypes[]>(StandardActionList);

	//  A list to hold all the Move Actions.
	// const [moveList, setMoveList] = useState<AbilityListTypes[]>(MoveActionList);

	// A list to hold all the Swift Actions
	// const [swiftList, setSwiftList] =
	// 	useState<AbilityListTypes[]>(SwiftActionList);

	//  A list to hold all the Full Actions.
	// const [fullList, setFullList] = useState<AbilityListTypes[]>(FullActionList);

	// A list to hold all the Reactions.
	// const [reactionList, setReaction] =
	// 	useState<AbilityListTypes[]>(ReactionList);

	/*
	The selected options to be shown.
		Store the values seperately to track which actions have been taken.
		Reaction will not be saved yet, since there's no turn order.
		Any number of swift actions can be used, so that may be an array.
	*/
	const [standardAction, setStandardAction] = useState<string>('Test');
	const [standardAvailable, setStandardAvailable] = useState<boolean>(true);

	const [moveAction, setMoveAction] = useState<string>('Test');
	const [moveAvailable, setMoveAvailable] = useState<boolean>(true);

	const [fullAction, setFullAction] = useState<string>('Test');
	const [fullAvailable, setFullAvailable] = useState<boolean>(true);

	const [swiftActions, setSwiftActions] = useState<string[]>([
		'this',
		'is',
		'a',
		'test',
	]);

	const [show, setShow] = useState<boolean>(false);

	// Reset all values on character swap.
	useEffect(() => {
		setAbilitiesArray(getValue(`Abilities${currentID}`));
		if (show) expandCombat(show, setShow);
	}, [currentID]);

	function resetSelectedOptions() {
		setStandardAction('');
		setStandardAvailable(true);

		setMoveAction('');
		setMoveAvailable(true);

		setFullAction('');
		setFullAvailable(true);

		setSwiftActions([]);
	}

	function syncAbilitiesList() {
		setAbilitiesArray(getValue(`Abilities${currentID}`));
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.combatOptionsWrapper}>
				<div
					className={styles.combatOptionsContentWrap}
					id={styles.combatOptionsContentWrap}
				>
					<div className={styles.combatOptionsLeftWrap}>
						{abilitiesArray.map((ability) => {
							return <div>{ability.abilityName}</div>;
						})}

						<div className={styles.buttonsDiv}>
							<div
								className={styles.resetResyncButtons}
								onClick={syncAbilitiesList}
							>
								Sync Abilities
							</div>
						</div>
					</div>
					<div className={styles.combatOptionsRightWrap}>
						<div className={styles.selectedOptionsWrapper}>
							<div
								className={
									standardAvailable
										? styles.selectedOptionTypeAvailable
										: styles.selectedOptionTypeUnavailable
								}
							>
								Standard Action
							</div>
							<div className={styles.selectedOption}>{standardAction}</div>
						</div>
						<div className={styles.selectedOptionsWrapper}>
							<div
								className={
									moveAvailable
										? styles.selectedOptionTypeAvailable
										: styles.selectedOptionTypeUnavailable
								}
							>
								Move Action
							</div>
							<div className={styles.selectedOption}>{moveAction}</div>
						</div>
						<div className={styles.selectedOptionsWrapper}>
							<div
								className={
									fullAvailable
										? styles.selectedOptionTypeAvailable
										: styles.selectedOptionTypeUnavailable
								}
							>
								Full Action
							</div>
							<div className={styles.selectedOption}>{fullAction}</div>
						</div>
						<div className={styles.selectedOptionsWrapper}>
							<div className={styles.selectedOptionTypeAvailable}>
								Swift Actions
							</div>
							<div className={styles.selectedSwiftActions}>
								{swiftActions.map((action, id) => {
									return (
										<div
											className={styles.selectedOption}
											key={`SwiftAction${id}`}
										>
											{action}
										</div>
									);
								})}
							</div>
						</div>
						<div className={styles.buttonsDiv}>
							<div
								className={styles.resetResyncButtons}
								onClick={resetSelectedOptions}
							>
								Reset Round
							</div>
						</div>
					</div>
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
			</div>
		</div>
	);
}

// Function to show/hide the component.
function expandCombat(
	show: boolean,
	setShow: Dispatch<SetStateAction<boolean>>
) {
	setShow(!show);

	const toggleButton: HTMLElement = document.getElementById(
		styles.showCombatOptionsButton
	) as HTMLDivElement;

	const toggleOptions: HTMLElement = document.getElementById(
		styles.combatOptionsContentWrap
	) as HTMLDivElement;

	toggleButton.classList.toggle(styles.showCombatOptionsButtonShow);

	toggleOptions.classList.toggle(styles.show);
}

export default CombatOptions;
