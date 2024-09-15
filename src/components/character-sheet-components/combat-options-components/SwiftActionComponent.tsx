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

type SwiftActionComponentProps = {
	swiftList: AbilityListTypes[];
	swiftAvailable: boolean;
	swiftAction: actionSavedType;
	setSwiftAction: Dispatch<SetStateAction<actionSavedType>>;
	setFullAvailable: Dispatch<SetStateAction<boolean>>;
	standardAction: actionSavedType;
	moveAction: actionSavedType;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function SwiftActionComponent({
	swiftList,
	swiftAvailable,
	swiftAction,
	setSwiftAction,
	setFullAvailable,
	standardAction,
	moveAction,
	handleMouseOverEvent,
	isHover,
}: SwiftActionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.swiftActionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Swift Actions' />
			<div className={styles.swiftActionContent}>
				{visible ? (
					<div className={styles.actionsWrap}>
						{swiftList.map((action, index) => {
							return (
								<div
									className={styles.action}
									id={`swiftAction${index}`}
									key={`swiftAction${index}`}
									onClick={() =>
										swiftAvailable
											? setActionOption(
													action.abilityName,
													index,
													action.usesResolve,
													swiftAction.action,
													setSwiftAction,
													setFullAvailable,
													standardAction.action,
													moveAction.action
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
												swiftAction.action === action.abilityName &&
												swiftAction.index === index
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
					onClick={() => toggleDropDown()}
				>
					<ExpandComponent expanded={visible} />
				</div>
			</div>
		</div>
	);
}

export default SwiftActionComponent;
