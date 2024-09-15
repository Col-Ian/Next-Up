import { Dispatch, SetStateAction } from 'react';
import { useDismissHandler } from '../../../hooks/useDismissHandler';
import SplitIntoParagraphs from '../../../utils/SplitIntoParagraphs';
import ExpandComponent from '../ExpandComponent/ExpandComponent';
import SheetLabel from '../labels/BlueLabel/SheetLabel';
import styles from './CombatOptions/CombatOptions.module.css';
import { setActionOption } from './functions/setActionOption';

type actionSavedType = {
	action: string;
	index: number;
};

type MoveActionComponentProps = {
	moveList: AbilityListTypes[];
	moveAvailable: boolean;
	moveAction: actionSavedType;
	setMoveAction: Dispatch<SetStateAction<actionSavedType>>;
	setFullAvailable: Dispatch<SetStateAction<boolean>>;
	standardAction: actionSavedType;
	swiftAction: actionSavedType;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function MoveActionComponent({
	moveList,
	moveAvailable,
	moveAction,
	setMoveAction,
	setFullAvailable,
	standardAction,
	swiftAction,
	handleMouseOverEvent,
	isHover,
}: MoveActionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.moveActionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Move Actions' />
			<div className={styles.moveActionContent}>
				{visible ? (
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
													standardAction.action,
													swiftAction.action
											  )
											: {}
									}
									onMouseOver={() => handleMouseOverEvent(index.toString())}
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
					onClick={() => toggleDropDown()}
				>
					<ExpandComponent expanded={visible} />
				</div>
			</div>
		</div>
	);
}

export default MoveActionComponent;
