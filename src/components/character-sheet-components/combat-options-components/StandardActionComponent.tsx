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

type StandardActionComponentProps = {
	standardList: AbilityListTypes[];
	standardAvailable: boolean;
	standardAction: actionSavedType;
	setStandardAction: Dispatch<SetStateAction<actionSavedType>>;
	setFullAvailable: Dispatch<SetStateAction<boolean>>;
	moveAction: actionSavedType;
	swiftAction: actionSavedType;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function StandardActionComponent({
	standardList,
	standardAvailable,
	standardAction,
	setStandardAction,
	setFullAvailable,
	moveAction,
	swiftAction,
	handleMouseOverEvent,
	isHover,
}: StandardActionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.actionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Standard Actions' />
			<div className={styles.standardActionContent}>
				{visible ? (
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
													moveAction.action,
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
					onClick={() => toggleDropDown()}
				>
					<ExpandComponent expanded={visible} />
				</div>
			</div>
		</div>
	);
}

export default StandardActionComponent;
