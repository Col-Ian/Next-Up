import DropDownList from '../../DropDownList/DropDownList.tsx';
import styles from './ShowOptions.module.css';

type ShowOptionsTypes = {
	optionsToMap: string[];
	optionArray: string[][];
	optionsSelectedArray: {
		optionSet: Function;
		optionValue: string;
	}[];
	keyString: string;
};
function ShowOptions({
	optionsToMap,
	optionArray,
	optionsSelectedArray,
	keyString,
}: ShowOptionsTypes) {
	return (
		<div className={styles.optionsWrapper}>
			{optionsToMap.map((option: string, index: number) => {
				return (
					<div key={`${keyString}${index}`} className={styles.individualOption}>
						<div className={styles.raceOptions}>
							<div>
								{/* Display the description of the option. */}
								{option}
							</div>

							<DropDownList
								optionsArray={optionArray[index]}
								optionSelection={optionsSelectedArray[index].optionSet}
								optionType='Option'
								selectedOption={optionsSelectedArray[index].optionValue}
								above={true}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ShowOptions;
