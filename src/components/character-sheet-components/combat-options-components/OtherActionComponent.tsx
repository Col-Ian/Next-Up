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

type OtherActionComponentProps = {
	otherList: AbilityListTypes[];
	otherActions: actionSavedType[];
	setOtherActions: Dispatch<SetStateAction<actionSavedType[]>>;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function OtherActionComponent({
	otherList,
	otherActions,
	setOtherActions,
	handleMouseOverEvent,
	isHover,
}: OtherActionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.otherActionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Other Actions' />
			<div className={styles.otherActionContent}>
				{visible ? (
					<div className={styles.actionsWrap}>
						{otherList.map((action, index) => {
							return (
								<div
									className={styles.action}
									id={`otherAction${index}`}
									key={`otherAction${index}`}
									onClick={() =>
										handleActionArrayOnClick(otherActions, setOtherActions, {
											action: action.abilityName,
											index,
										})
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
												otherActions
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
												id={`other${index}`}
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

export default OtherActionComponent;
