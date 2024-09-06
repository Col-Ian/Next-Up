import styles from './DropDownList.module.css';
import { useDismissHandler } from '../../hooks/useDismissHandler';

type DropDownProps = {
	optionType: string;
	optionsArray: string[];
	optionSelection: Function;
	selectedOption: string;
	above: boolean;
};

// Dylan: I still have to get the position fixed to prevent out of bounds. I'll work on this when everything else is working as expected.

const DropDownList: React.FC<DropDownProps> = ({
	optionType,
	optionsArray,
	optionSelection,
	selectedOption,
	above,
}: DropDownProps): JSX.Element => {
	const { visible, setVisible, ref } = useDismissHandler(false);

	const toggleDropDown = () => {
		setVisible(!visible);
	};

	function handleSelection(option: string) {
		toggleDropDown();
		optionSelection(option);
	}

	return (
		<div className={styles.parentDiv}>
			<button
				className={styles.dropDownButton}
				onClick={() => toggleDropDown()}
			>
				<div>
					{selectedOption != '' && selectedOption != undefined ? (
						<div className={styles.dropDownText}>
							{optionType}: {selectedOption}{' '}
							{above ? (
								<span
									className={
										visible
											? styles.caret
											: [styles.caret, styles.caretRotate].join(' ')
									}
								/>
							) : (
								<span
									className={
										visible
											? [styles.caret, styles.caretRotate].join(' ')
											: styles.caret
									}
								/>
							)}
						</div>
					) : (
						<div className={styles.dropDownText}>
							{optionType}
							{above ? (
								<span
									className={
										visible
											? styles.caret
											: [styles.caret, styles.caretRotate].join(' ')
									}
								/>
							) : (
								<span
									className={
										visible
											? [styles.caret, styles.caretRotate].join(' ')
											: styles.caret
									}
								/>
							)}
						</div>
					)}
				</div>
			</button>
			<div
				className={
					above ? styles.dropDownOptionsAbove : styles.dropDownOptionsBelow
				}
			>
				{visible ? (
					<div className={styles.dropDown} id='dropDownDiv' ref={ref}>
						{optionsArray.map((option: string, index: number) => {
							return (
								<div
									key={`${index}${option}`}
									onClick={() => {
										handleSelection(option);
									}}
									className={styles.individualOption}
								>
									<p>{option}</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default DropDownList;
