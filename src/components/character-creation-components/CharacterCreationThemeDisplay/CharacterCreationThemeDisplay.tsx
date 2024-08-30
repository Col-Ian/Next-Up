import { useContext, useEffect, useState } from 'react';
import styles from './CharacterCreationThemeDisplay.module.css';
import stylesGeneral from '../../../states/CreateCharacter/CreateCharacter.module.css';
import { themeList } from '../../../data/theme-information/themeList.ts';
import DropDownList from '../../DropDownList/DropDownList.tsx';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter.tsx';
import BackButton from '../../../utils/BackButton/BackButton.tsx';
import NextButtonValidation from '../../../utils/NextButtonValidation.ts';
import NextButton from '../../../utils/NextButton/NextButton.tsx';
import ShowOptions from '../ShowOptions/ShowOptions.tsx';
import RedLabel from '../../labels/RedLabel/RedLabel.tsx';
import SplitIntoParagraphs from '../../../utils/SplitIntoParagraphs.tsx';

function CharacterCreationThemeDisplay() {
	const {
		theme,
		setTheme,
		themeOptionsSelected,
		componentArrayPosition,
		setComponentArrayPosition,
		componentArray,
		addTempValuesHandler,
	} = useContext(CharacterCreationContext);

	const themeArray: string[] = Object.keys(themeList).map((key: string) => {
		return key;
	});

	const [
		{
			themeScoreModifiers,
			themeDescription,
			themeAbilityTitle,
			themeAbilityDescription,
			hasOptions,
			optionDescription,
			optionArray,
		},
		setSelectedThemeObject,
	] = useState<ThemeListTypes>({
		themeName: '',
		themeScoreModifiers: '',
		themeDescription: '',
		themeFunction: () => null,
		themeAbilityTitle: [],
		themeAbilityDescription: [],
		hasOptions: false,
		optionDescription: [],
		optionArray: [[]],
	});

	useEffect(() => {
		// Set the theme object to display as user selects their theme.
		if (themeList[theme]) {
			setSelectedThemeObject(themeList[theme]);
		}
		// Reset the options when race changes.
		themeOptionsSelected.forEach((i) => {
			i.optionSet('');
		});
	}, [theme]);

	// Validation for the next button
	const [moveOn, setMoveOn] = useState<boolean>(false);

	useEffect(() => {
		NextButtonValidation({
			optionType: theme,
			hasOptions: hasOptions,
			forEachOption: optionDescription,
			individualOptions: themeOptionsSelected,
			setMoveOn: setMoveOn,
		});
	}, [theme, hasOptions, themeOptionsSelected]);

	return (
		<div className={styles.parentDiv}>
			<div className={stylesGeneral.backNextDiv}>
				<BackButton
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
				/>
				<NextButton
					message='Next'
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
					arrayToCycle={componentArray}
					condition={moveOn}
					functionToRun={addTempValuesHandler}
				/>
			</div>
			<DropDownList
				optionType={'Theme'}
				optionsArray={themeArray}
				optionSelection={setTheme}
				selectedOption={theme}
				above={false}
			/>
			{theme != '' && (
				<div className={styles.themeInformationDiv}>
					<div className={styles.descriptionDiv}>
						<RedLabel redLabelText={themeScoreModifiers} />
						<div className={styles.themeDescription}>
							<SplitIntoParagraphs
								text={themeDescription}
								id='themeDescription'
							/>
						</div>
					</div>
					<ThemeAbilityArray
						themeAbilityTitle={themeAbilityTitle}
						themeAbilityDescription={themeAbilityDescription}
					/>
					{hasOptions &&
						ShowOptions({
							optionsToMap: optionDescription,
							optionArray: optionArray,
							optionsSelectedArray: themeOptionsSelected,
							keyString: 'themeOptions',
						})}
				</div>
			)}
		</div>
	);
}

type ThemeAbilityArrayProps = {
	themeAbilityTitle: string[];
	themeAbilityDescription: string[];
};

function ThemeAbilityArray({
	themeAbilityTitle,
	themeAbilityDescription,
}: ThemeAbilityArrayProps) {
	return themeAbilityTitle.map((header: string, index: number) => {
		return (
			<div className={styles.abilityDiv} key={`${header}${index}`}>
				<RedLabel redLabelText={header} />
				<div className={stylesGeneral.descriptionDiv}>
					<SplitIntoParagraphs
						text={themeAbilityDescription[index]}
						id={`abilityDescription${index}`}
					/>
				</div>
			</div>
		);
	});
}

export default CharacterCreationThemeDisplay;
