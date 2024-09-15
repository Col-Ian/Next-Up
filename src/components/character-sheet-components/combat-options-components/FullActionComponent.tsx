import { Dispatch, SetStateAction } from 'react';
import { useDismissHandler } from '../../../hooks/useDismissHandler';
import SplitIntoParagraphs from '../../../utils/SplitIntoParagraphs';
import ExpandComponent from '../ExpandComponent/ExpandComponent';
import SheetLabel from '../labels/BlueLabel/SheetLabel';
import styles from './CombatOptions/CombatOptions.module.css';
import { setFullActionOption } from './functions/setFullActionOption';

type actionSavedType = {
	action: string;
	index: number;
};

type FullActionComponentProps = {
	fullList: AbilityListTypes[];
	fullAvailable: boolean;
	fullAction: actionSavedType;
	setFullAction: Dispatch<SetStateAction<actionSavedType>>;
	setStandardAvailable: Dispatch<SetStateAction<boolean>>;
	setMoveAvailable: Dispatch<SetStateAction<boolean>>;
	setSwiftAvailable: Dispatch<SetStateAction<boolean>>;
	handleMouseOverEvent(actionID: string): void;
	isHover: string;
};

function FullActionComponent({
	fullList,
	fullAvailable,
	fullAction,
	setFullAction,
	setStandardAvailable,
	setMoveAvailable,
	setSwiftAvailable,
	handleMouseOverEvent,
	isHover,
}: FullActionComponentProps) {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	return (
		<div className={styles.fullActionWrap} ref={ref}>
			<SheetLabel sheetLabelText='Full Actions' />
			<div className={styles.fullActionContent}>
				{visible ? (
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
													setMoveAvailable,
													setSwiftAvailable
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
					onClick={() => toggleDropDown()}
				>
					<ExpandComponent expanded={visible} />
				</div>
			</div>
		</div>
	);
}

export default FullActionComponent;
