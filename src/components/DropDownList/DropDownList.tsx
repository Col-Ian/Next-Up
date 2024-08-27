import styles from './DropDownList.module.css';
import { useDismissHandler } from '../../hooks/useDismissHandler';

type DropDownProps = {
	optionType: string;
	optionsArray: string[];
	optionSelection: Function;
	selectedOption: string;
	index?: number;
};

// Dylan: I still have to get the position fixed to prevent out of bounds. I'll work on this when everything else is working as expected.

const DropDownList: React.FC<DropDownProps> = ({
	optionType,
	optionsArray,
	optionSelection,
	selectedOption,
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
					{selectedOption != '' && selectedOption != undefined
						? `${optionType}: ${selectedOption}`
						: `${optionType}...`}
				</div>
			</button>
			<div className={styles.dropDownOptions}>
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
