import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './CombatOptions..module.css';
import { useCurrentID } from '../../../../hooks/useCurrentID';
import { getValue } from '../../../../utils/getValue';
import { MoveActionList } from '../../../../data/general-actions/MoveActionList';
import { StandardActionList } from '../../../../data/general-actions/StandardActionList';
import { SwiftActionList } from '../../../../data/general-actions/SwiftActionList';
import { FullActionList } from '../../../../data/general-actions/FullActionList';
import { ReactionList } from '../../../../data/general-actions/ReactionList';
import SheetLabel from '../../labels/BlueLabel/SheetLabel';
import ExpandComponent from '../../ExpandComponent/ExpandComponent';
import SplitIntoParagraphs from '../../../../utils/SplitIntoParagraphs';

type actionSavedType = {
	action: string;
	index: number;
};

function CombatOptions() {
	const { currentID } = useCurrentID();

	// Create a new array of abilities to display.
	const abilitiesArray = useRef<AbilityListTypes[]>(
		getValue(`Abilities${currentID}`)
	);

	// A list to hold all the Standard Actions.
	const [standardList, setStandardList] =
		useState<AbilityListTypes[]>(StandardActionList);

	//  A list to hold all the Move Actions.
	const [moveList, setMoveList] = useState<AbilityListTypes[]>(MoveActionList);

	// A list to hold all the Swift Actions
	const [swiftList, setSwiftList] =
		useState<AbilityListTypes[]>(SwiftActionList);

	//  A list to hold all the Full Actions.
	const [fullList, setFullList] = useState<AbilityListTypes[]>(FullActionList);

	// A list to hold all the Reactions.
	const [reactionsList, setReactionsList] =
		useState<AbilityListTypes[]>(ReactionList);

	/*
	The selected options to be shown.
		Store the values seperately to track which actions have been taken.
		Reaction will not be saved yet, since there's no turn order.
		Any number of swift actions can be used, so that may be an array.
	*/
	const [standardAction, setStandardAction] = useState<actionSavedType>({
		action: '',
		index: 0,
	});
	const [standardAvailable, setStandardAvailable] = useState<boolean>(true);

	const [moveAction, setMoveAction] = useState<actionSavedType>({
		action: '',
		index: 0,
	});
	const [moveAvailable, setMoveAvailable] = useState<boolean>(true);

	const [fullAction, setFullAction] = useState<actionSavedType>({
		action: '',
		index: 0,
	});
	const [fullAvailable, setFullAvailable] = useState<boolean>(true);

	const [swiftActions, setSwiftActions] = useState<actionSavedType[]>([]);

	const [reactionActions, setReactionActions] = useState<actionSavedType[]>([]);

	const [show, setShow] = useState<boolean>(false);

	// For the ExpandComponent for each list.

	const [showStandard, setShowStandard] = useState<boolean>(false);
	const [showMove, setShowMove] = useState<boolean>(false);
	const [showFull, setShowFull] = useState<boolean>(false);
	const [showSwift, setShowSwift] = useState<boolean>(false);
	const [showReaction, setShowReaction] = useState<boolean>(false);

	// Mouseover to show descriptions of items
	const [isHover, setIsHover] = useState<string>('');

	function handleMouseOverEvent(actionID: string) {
		setIsHover(actionID);
	}

	// Reset all values on character swap.
	useEffect(() => {
		abilitiesArray.current = getValue(`Abilities${currentID}`);
		if (show)
			expandCombat(
				show,
				setShow,
				setShowStandard,
				setShowMove,
				setShowFull,
				setShowSwift,
				setShowReaction
			);

		setActionList(
			'Standard Action',
			abilitiesArray.current,
			StandardActionList,
			setStandardList
		);
		setActionList(
			'Move Action',
			abilitiesArray.current,
			MoveActionList,
			setMoveList
		);
		setActionList(
			'Full Action',
			abilitiesArray.current,
			FullActionList,
			setFullList
		);
		setActionList(
			'Swift Action',
			abilitiesArray.current,
			SwiftActionList,
			setSwiftList
		);
		setActionList(
			'Reaction',
			abilitiesArray.current,
			ReactionList,
			setReactionsList
		);
	}, [currentID]);

	function resetAllSelectedOptions() {
		setStandardAction({ action: '', index: 0 });
		setStandardAvailable(true);

		setMoveAction({ action: '', index: 0 });
		setMoveAvailable(true);

		setFullAction({ action: '', index: 0 });
		setFullAvailable(true);

		setSwiftActions([]);
		setReactionActions([]);
	}

	function syncAbilitiesList() {
		abilitiesArray.current = getValue(`Abilities${currentID}`);

		setActionList(
			'Standard Action',
			abilitiesArray.current,
			StandardActionList,
			setStandardList
		);
		setActionList(
			'Move Action',
			abilitiesArray.current,
			MoveActionList,
			setMoveList
		);
		setActionList(
			'Full Action',
			abilitiesArray.current,
			FullActionList,
			setFullList
		);
		setActionList(
			'Swift Action',
			abilitiesArray.current,
			SwiftActionList,
			setSwiftList
		);
		setActionList(
			'Reaction',
			abilitiesArray.current,
			ReactionList,
			setReactionsList
		);
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.combatOptionsWrapper}>
				<div
					className={styles.combatOptionsContentWrap}
					id={styles.combatOptionsContentWrap}
				>
					<div className={styles.combatOptionsLeftWrap}>
						<div className={styles.actionWrap}>
							<SheetLabel sheetLabelText='Standard Actions' />
							<div className={styles.standardActionContent}>
								{showStandard ? (
									<div className={styles.actionsWrap}>
										{standardList.map((action, index) => {
											return (
												<div
													className={styles.action}
													id={`standardAction${index}`}
													key={`standardAction${index}`}
													onClick={() =>
														standardAvailable
															? setActionOption(
																	action.abilityName,
																	index,
																	action.usesResolve,
																	standardAction.action,
																	setStandardAction,
																	setFullAvailable,
																	moveAction.action
															  )
															: {}
													}
													onMouseOver={() =>
														handleMouseOverEvent(index.toString())
													}
													onMouseOut={() => handleMouseOverEvent('')}
												>
													<div className={styles.actionUpper}>
														<input
															type='checkbox'
															checked={
																standardAction.action === action.abilityName &&
																standardAction.index === index
																	? true
																	: false
															}
															readOnly
														/>
														<div className={styles.actionLabel}>
															{action.abilityName}
															{action.usesResolve > 0
																? ` (${action.usesResolve.toString()} RP)`
																: null}
														</div>
													</div>
													{isHover === index.toString() ? (
														<div className={styles.actionLower}>
															<SplitIntoParagraphs
																text={action.abilityDescription}
																id={`standard${index}`}
															/>
														</div>
													) : null}
												</div>
											);
										})}
									</div>
								) : null}
								<div
									className={styles.dropDownWrapper}
									onClick={() => setShowStandard(!showStandard)}
								>
									<ExpandComponent expanded={showStandard} />
								</div>
							</div>
						</div>
						<div className={styles.moveActionWrap}>
							<SheetLabel sheetLabelText='Move Actions' />
							<div className={styles.moveActionContent}>
								{showMove ? (
									<div className={styles.actionsWrap}>
										{moveList.map((action, index) => {
											return (
												<div
													className={styles.action}
													id={`moveAction${index}`}
													key={`moveAction${index}`}
													onClick={() =>
														moveAvailable
															? setActionOption(
																	action.abilityName,
																	index,
																	action.usesResolve,
																	moveAction.action,
																	setMoveAction,
																	setFullAvailable,
																	standardAction.action
															  )
															: {}
													}
													onMouseOver={() =>
														handleMouseOverEvent(index.toString())
													}
													onMouseOut={() => handleMouseOverEvent('')}
												>
													<div className={styles.actionUpper}>
														<input
															type='checkbox'
															checked={
																moveAction.action === action.abilityName &&
																moveAction.index === index
																	? true
																	: false
															}
															readOnly
														/>
														<div className={styles.actionLabel}>
															{action.abilityName}
															{action.usesResolve > 0
																? ` (${action.usesResolve.toString()} RP)`
																: null}
														</div>
													</div>
													{isHover === index.toString() ? (
														<div className={styles.actionLower}>
															<SplitIntoParagraphs
																text={action.abilityDescription}
																id={`move${index}`}
															/>
														</div>
													) : null}
												</div>
											);
										})}
									</div>
								) : null}
								<div
									className={styles.dropDownWrapper}
									onClick={() => setShowMove(!showMove)}
								>
									<ExpandComponent expanded={showMove} />
								</div>
							</div>
						</div>
						<div className={styles.fullActionWrap}>
							<SheetLabel sheetLabelText='Full Actions' />
							<div className={styles.fullActionContent}>
								{showFull ? (
									<div className={styles.actionsWrap}>
										{fullList.map((action, index) => {
											return (
												<div
													className={styles.action}
													id={`fullAction${index}`}
													key={`fullAction${index}`}
													onClick={() =>
														fullAvailable
															? setFullActionOption(
																	action.abilityName,
																	index,
																	action.usesResolve,
																	fullAction.action,
																	setFullAction,
																	setStandardAvailable,
																	setMoveAvailable
															  )
															: {}
													}
													onMouseOver={() =>
														handleMouseOverEvent(index.toString())
													}
													onMouseOut={() => handleMouseOverEvent('')}
												>
													<div className={styles.actionUpper}>
														<input
															type='checkbox'
															checked={
																fullAction.action === action.abilityName &&
																fullAction.index === index
																	? true
																	: false
															}
															readOnly
														/>
														<div className={styles.actionLabel}>
															{action.abilityName}
															{action.usesResolve > 0
																? ` (${action.usesResolve.toString()} RP)`
																: null}
														</div>
													</div>
													{isHover === index.toString() ? (
														<div className={styles.actionLower}>
															<SplitIntoParagraphs
																text={action.abilityDescription}
																id={`full${index}`}
															/>
														</div>
													) : null}
												</div>
											);
										})}
									</div>
								) : null}
								<div
									className={styles.dropDownWrapper}
									onClick={() => setShowFull(!showFull)}
								>
									<ExpandComponent expanded={showFull} />
								</div>
							</div>
						</div>
						<div className={styles.swiftActionWrap}>
							<SheetLabel sheetLabelText='Swift Actions' />
							<div className={styles.swiftActionContent}>
								{showSwift ? (
									<div className={styles.actionsWrap}>
										{swiftList.map((action, index) => {
											return (
												<div
													className={styles.action}
													id={`swiftAction${index}`}
													key={`swiftAction${index}`}
													onClick={() =>
														handleActionArrayOnClick(
															swiftActions,
															setSwiftActions,
															{ action: action.abilityName, index }
														)
													}
													onMouseOver={() =>
														handleMouseOverEvent(index.toString())
													}
													onMouseOut={() => handleMouseOverEvent('')}
												>
													<div className={styles.actionUpper}>
														<input
															type='checkbox'
															checked={isInActionsArray(
																action.abilityName,
																index,
																swiftActions
															)}
															readOnly
														/>
														<div className={styles.actionLabel}>
															{action.abilityName}
															{action.usesResolve > 0
																? ` (${action.usesResolve.toString()} RP)`
																: null}
														</div>
													</div>
													{isHover === index.toString() ? (
														<div className={styles.actionLower}>
															<SplitIntoParagraphs
																text={action.abilityDescription}
																id={`swift${index}`}
															/>
														</div>
													) : null}
												</div>
											);
										})}
									</div>
								) : null}
								<div
									className={styles.dropDownWrapper}
									onClick={() => setShowSwift(!showSwift)}
								>
									<ExpandComponent expanded={showSwift} />
								</div>
							</div>
						</div>
						<div className={styles.reactionWrap}>
							<SheetLabel sheetLabelText='Reactions' />
							<div className={styles.rectionContent}>
								{showReaction ? (
									<div className={styles.actionsWrap}>
										{reactionsList.map((action, index) => {
											return (
												<div
													className={styles.action}
													id={`reactionAction${index}`}
													key={`reactionAction${index}`}
													onClick={() =>
														handleActionArrayOnClick(
															reactionActions,
															setReactionActions,
															{ action: action.abilityName, index }
														)
													}
													onMouseOver={() =>
														handleMouseOverEvent(index.toString())
													}
													onMouseOut={() => handleMouseOverEvent('')}
												>
													<div className={styles.actionUpper}>
														<input
															type='checkbox'
															checked={isInActionsArray(
																action.abilityName,
																index,
																reactionActions
															)}
															readOnly
														/>
														<div className={styles.actionLabel}>
															{action.abilityName}
															{action.usesResolve > 0
																? ` (${action.usesResolve.toString()} RP)`
																: null}
														</div>
													</div>
													{isHover === index.toString() ? (
														<div className={styles.actionLower}>
															<SplitIntoParagraphs
																text={action.abilityDescription}
																id={`reactions${index}`}
															/>
														</div>
													) : null}
												</div>
											);
										})}
									</div>
								) : null}
								<div
									className={styles.dropDownWrapper}
									onClick={() => setShowReaction(!showReaction)}
								>
									<ExpandComponent expanded={showReaction} />
								</div>
							</div>
						</div>
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
							<div className={styles.selectedOption}>
								{standardAction.action}
							</div>
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
							<div className={styles.selectedOption}>{moveAction.action}</div>
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
							<div className={styles.selectedOption}>{fullAction.action}</div>
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
											{action.action}
										</div>
									);
								})}
							</div>
						</div>
						<div className={styles.selectedOptionsWrapper}>
							<div className={styles.selectedOptionTypeAvailable}>
								Reactions
							</div>
							<div className={styles.selectedSwiftActions}>
								{reactionActions.map((action, id) => {
									return (
										<div
											className={styles.selectedOption}
											key={`SwiftAction${id}`}
										>
											{action.action}
										</div>
									);
								})}
							</div>
						</div>
						<div className={styles.buttonsDiv}>
							<div
								className={styles.resetResyncButtons}
								onClick={resetAllSelectedOptions}
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
						onClick={() =>
							expandCombat(
								show,
								setShow,
								setShowStandard,
								setShowMove,
								setShowFull,
								setShowSwift,
								setShowReaction
							)
						}
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
	setShow: Dispatch<SetStateAction<boolean>>,
	setStandard: Dispatch<SetStateAction<boolean>>,
	setMove: Dispatch<SetStateAction<boolean>>,
	setFull: Dispatch<SetStateAction<boolean>>,
	setSwift: Dispatch<SetStateAction<boolean>>,
	setReaction: Dispatch<SetStateAction<boolean>>
) {
	setShow(!show);

	setStandard(false);
	setMove(false);
	setFull(false);
	setSwift(false);
	setReaction(false);

	const toggleButton: HTMLElement = document.getElementById(
		styles.showCombatOptionsButton
	) as HTMLDivElement;

	const toggleOptions: HTMLElement = document.getElementById(
		styles.combatOptionsContentWrap
	) as HTMLDivElement;

	toggleButton.classList.toggle(styles.showCombatOptionsButtonShow);

	toggleOptions.classList.toggle(styles.show);
}

// Get the list of given action based on the default lists and the abilities from storage.
function setActionList(
	type: string,
	abilitiesArray: AbilityListTypes[],
	defaultList: AbilityListTypes[],
	setList: Dispatch<SetStateAction<AbilityListTypes[]>>
) {
	let tempList: AbilityListTypes[] = [];

	abilitiesArray.forEach((ability) => {
		if (ability.actionType.includes(type)) {
			tempList = [...tempList, ability];
		}
	});

	setList([...defaultList, ...tempList]);
}

function setActionOption(
	newAction: string,
	newIndex: number,
	rpUsage: number,
	currentAction: string,
	setActionFunction: Dispatch<SetStateAction<actionSavedType>>,
	setUnavailable: Dispatch<SetStateAction<boolean>>,
	additionalActionType?: string
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
		if (additionalActionType && additionalActionType != '') {
			setUnavailable(false);
		} else {
			setUnavailable(true);
		}
	}
}

function setFullActionOption(
	newAction: string,
	newIndex: number,
	rpUsage: number,
	currentAction: string,
	setFullActionFunction: Dispatch<SetStateAction<actionSavedType>>,
	setStandardUnavailable: Dispatch<SetStateAction<boolean>>,
	setMoveUnavailable: Dispatch<SetStateAction<boolean>>
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
	} else {
		setFullActionFunction({ action: '', index: 0 });
		setStandardUnavailable(true);
		setMoveUnavailable(true);
	}
}

function isInActionsArray(
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

function handleActionArrayOnClick(
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

export default CombatOptions;
