import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './CombatOptions.module.css';
import { useCurrentID } from '../../../../hooks/useCurrentID';
import { getValue } from '../../../../utils/getValue';
import { MoveActionList } from '../../../../data/general-actions/MoveActionList';
import { StandardActionList } from '../../../../data/general-actions/StandardActionList';
import { SwiftActionList } from '../../../../data/general-actions/SwiftActionList';
import { FullActionList } from '../../../../data/general-actions/FullActionList';
import { ReactionList } from '../../../../data/general-actions/ReactionList';
import { OtherActionlist } from '../../../../data/general-actions/OtherActionList';
import StandardActionComponent from '../StandardActionComponent';
import MoveActionComponent from '../MoveActionComponent';
import SwiftActionComponent from '../SwiftActionComponent';
import FullActionComponent from '../FullActionComponent';
import ReactionComponent from '../ReactionComponent';
import OtherActionComponent from '../OtherActionComponent';
import { setActionList } from '../functions/setActionList';

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

	// Create a list of all the spells the character may have.
	const allSpellsArray = useRef<SpellListTypes[]>([
		...getValue(`Level0Spells${currentID}`),
		...getValue(`Level1Spells${currentID}`),
		...getValue(`Level2Spells${currentID}`),
		...getValue(`Level3Spells${currentID}`),
		...getValue(`Level4Spells${currentID}`),
		...getValue(`Level5Spells${currentID}`),
		...getValue(`Level6Spells${currentID}`),
	]);

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

	// A list to hold all Other Actions
	const [otherList, setOtherList] =
		useState<AbilityListTypes[]>(OtherActionlist);

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

	const [swiftAction, setSwiftAction] = useState<actionSavedType>({
		action: '',
		index: 0,
	});
	const [swiftAvailable, setSwiftAvailable] = useState<boolean>(true);

	const [fullAction, setFullAction] = useState<actionSavedType>({
		action: '',
		index: 0,
	});
	const [fullAvailable, setFullAvailable] = useState<boolean>(true);

	const [reactionActions, setReactionActions] = useState<actionSavedType[]>([]);

	const [otherActions, setOtherActions] = useState<actionSavedType[]>([]);

	const [show, setShow] = useState<boolean>(false);

	// Mouseover to show descriptions of items
	const [isHover, setIsHover] = useState<string>('');

	function handleMouseOverEvent(actionID: string) {
		setIsHover(actionID);
	}

	// Reset all values on character swap.
	useEffect(() => {
		abilitiesArray.current = getValue(`Abilities${currentID}`);
		allSpellsArray.current = [
			...getValue(`Level0Spells${currentID}`),
			...getValue(`Level1Spells${currentID}`),
			...getValue(`Level2Spells${currentID}`),
			...getValue(`Level3Spells${currentID}`),
			...getValue(`Level4Spells${currentID}`),
			...getValue(`Level5Spells${currentID}`),
			...getValue(`Level6Spells${currentID}`),
		];
		if (show) expandCombat(show, setShow);

		setActionList(
			0,
			abilitiesArray.current,
			allSpellsArray.current,
			StandardActionList,
			setStandardList
		);

		setActionList(
			1,
			abilitiesArray.current,
			allSpellsArray.current,
			MoveActionList,
			setMoveList
		);
		setActionList(
			2,
			abilitiesArray.current,
			allSpellsArray.current,
			SwiftActionList,
			setSwiftList
		);
		setActionList(
			3,
			abilitiesArray.current,
			allSpellsArray.current,
			FullActionList,
			setFullList
		);
		setActionList(
			4,
			abilitiesArray.current,
			allSpellsArray.current,
			ReactionList,
			setReactionsList
		);
		setActionList(
			5,
			abilitiesArray.current,
			allSpellsArray.current,
			OtherActionlist,
			setOtherList
		);
	}, [currentID]);

	function resetAllSelectedOptions() {
		setStandardAction({ action: '', index: 0 });
		setStandardAvailable(true);

		setMoveAction({ action: '', index: 0 });
		setMoveAvailable(true);

		setFullAction({ action: '', index: 0 });
		setFullAvailable(true);

		setSwiftAction({ action: '', index: 0 });
		setSwiftAvailable(true);

		setReactionActions([]);
		setOtherActions([]);
	}

	function syncAbilitiesList() {
		abilitiesArray.current = getValue(`Abilities${currentID}`);

		setActionList(
			0,
			abilitiesArray.current,
			allSpellsArray.current,
			StandardActionList,
			setStandardList
		);
		setActionList(
			1,
			abilitiesArray.current,
			allSpellsArray.current,
			MoveActionList,
			setMoveList
		);
		setActionList(
			2,
			abilitiesArray.current,
			allSpellsArray.current,
			SwiftActionList,
			setSwiftList
		);
		setActionList(
			3,
			abilitiesArray.current,
			allSpellsArray.current,
			FullActionList,
			setFullList
		);
		setActionList(
			4,
			abilitiesArray.current,
			allSpellsArray.current,
			ReactionList,
			setReactionsList
		);
		setActionList(
			5,
			abilitiesArray.current,
			allSpellsArray.current,
			OtherActionlist,
			setOtherList
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
						<StandardActionComponent
							standardList={standardList}
							standardAvailable={standardAvailable}
							standardAction={standardAction}
							setStandardAction={setStandardAction}
							setFullAvailable={setFullAvailable}
							moveAction={moveAction}
							swiftAction={swiftAction}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>
						<MoveActionComponent
							moveList={moveList}
							moveAvailable={moveAvailable}
							moveAction={moveAction}
							setMoveAction={setMoveAction}
							setFullAvailable={setFullAvailable}
							standardAction={standardAction}
							swiftAction={swiftAction}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>
						<SwiftActionComponent
							swiftList={swiftList}
							swiftAvailable={swiftAvailable}
							swiftAction={swiftAction}
							setSwiftAction={setSwiftAction}
							setFullAvailable={setFullAvailable}
							standardAction={standardAction}
							moveAction={moveAction}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>

						<FullActionComponent
							fullList={fullList}
							fullAvailable={fullAvailable}
							fullAction={fullAction}
							setFullAction={setFullAction}
							setStandardAvailable={setStandardAvailable}
							setMoveAvailable={setMoveAvailable}
							setSwiftAvailable={setSwiftAvailable}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>
						<ReactionComponent
							reactionsList={reactionsList}
							reactionActions={reactionActions}
							setReactionActions={setReactionActions}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>

						<OtherActionComponent
							otherList={otherList}
							otherActions={otherActions}
							setOtherActions={setOtherActions}
							handleMouseOverEvent={handleMouseOverEvent}
							isHover={isHover}
						/>
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
									moveAvailable
										? styles.selectedOptionTypeAvailable
										: styles.selectedOptionTypeUnavailable
								}
							>
								Swift Action
							</div>
							<div className={styles.selectedOption}>{swiftAction.action}</div>
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
						<div className={styles.selectedOptionsWrapper}>
							<div className={styles.selectedOptionTypeAvailable}>
								Other Actions
							</div>
							<div className={styles.selectedSwiftActions}>
								{otherActions.map((action, id) => {
									return (
										<div
											className={styles.selectedOption}
											key={`OtherAction${id}`}
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
