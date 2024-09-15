import { Dispatch, SetStateAction } from 'react';
import { useDismissHandler } from '../../../hooks/useDismissHandler';
import SplitIntoParagraphs from '../../../utils/SplitIntoParagraphs';
import ExpandComponent from '../ExpandComponent/ExpandComponent';
import SheetLabel from '../labels/BlueLabel/SheetLabel';
import styles from './CombatOptions/CombatOptions.module.css';
import { handleActionArrayOnClick } from './functions/handleActionArrayOnClick';
import { isInActionsArray } from './functions/isInActionsArray';

type actionSavedType = {
	action: string;
	index: number;
};

type ReactionComponentProps = {
	reactionsList: AbilityListTypes[];
	reactionActions: actionSavedType[];
	setReactionActions: Dispatch<SetStateAction<actionSavedType[]>>;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function ReactionComponent({
	reactionsList,
	reactionActions,
	setReactionActions,
	handleMouseOverEvent,
	isHover,
}: ReactionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.reactionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Reactions' />
			<div className={styles.rectionContent}>
				{visible ? (
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
									onMouseOver={() => handleMouseOverEvent(index.toString())}
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
					onClick={() => toggleDropDown()}
				>
					<ExpandComponent expanded={visible} />
				</div>
			</div>
		</div>
	);
}

export default ReactionComponent;
