import { useContext, useEffect, useState } from 'react';
import { raceList } from '../../../data/race-information/raceList.ts';
import styles from './CharacterCreationRaceDisplay.module.css';
import stylesGeneral from '../../../states/CreateCharacter/CreateCharacter.module.css';
import DropDownList from '../../DropDownList/DropDownList.tsx';
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter.tsx';
import BackButton from '../../../utils/BackButton/BackButton.tsx';
import NextButton from '../../../utils/NextButton/NextButton.tsx';
import NextButtonValidation from '../../../utils/NextButtonValidation.ts';
import ShowOptions from '../ShowOptions/ShowOptions.tsx';
import RedLabel from '../../labels/RedLabel/RedLabel.tsx';
import { BlueRedBlueHeadingLabel } from '../../labels/BlueRedBlueHeadingLabel/BlueRedBlueHeadingLabel.tsx';
import SplitIntoParagraphs from '../../../utils/SplitIntoParagraphs.tsx';

function CharacterCreationRaceDisplay() {
	const {
		race,
		setRace,
		raceOptionsSelected,
		componentArrayPosition,
		setComponentArrayPosition,
		componentArray,
	} = useContext(CharacterCreationContext);

	const raceArray: string[] = Object.keys(raceList).map((key: string) => {
		return key;
	});

	const [
		{
			raceScoreModifiers,
			raceDescription,
			raceSizeAndType,
			raceHP,
			raceAbilityName,
			raceAbilityDescription,
			hasOptions,
			optionDescription,
			optionArray,
		},
		setSelectedRaceObject,
	] = useState<RaceListTypes>({
		raceSource: '',
		raceName: '',
		raceScoreModifiers: '',
		raceDescription: '',
		raceSizeAndType: '',
		raceHP: 0,
		raceSize: '',
		raceAbilityName: [''],
		raceAbilityDescription: [''],
		hasOptions: false,
		optionDescription: [''],
		optionArray: [['']],
		raceFunction: () => null,
	});

	useEffect(() => {
		// Set the Race object to display as user selects their race.
		if (raceList[race] != undefined) {
			setSelectedRaceObject(raceList[race]);
		}
		// Reset the options if you change the race selected.
		raceOptionsSelected.forEach((i) => {
			i.optionSet('');
		});
	}, [race]);

	// Validation for the next button
	const [moveOn, setMoveOn] = useState<boolean>(false);

	useEffect(() => {
		NextButtonValidation({
			optionType: race,
			hasOptions: hasOptions,
			forEachOption: optionDescription,
			individualOptions: raceOptionsSelected,
			setMoveOn: setMoveOn,
		});
		// Don't allow same option to be chosen twice
		raceOptionsSelected.forEach((initial) => {
			raceOptionsSelected.forEach((compare) => {
				if (
					// If the values are the same, and not in the same position, and not empty, don't allow moving on.
					initial.optionValue === compare.optionValue &&
					raceOptionsSelected.indexOf(initial) !=
						raceOptionsSelected.indexOf(compare) &&
					initial.optionValue != ''
				) {
					setMoveOn(false);
				}
			});
		});
	}, [race, hasOptions, raceOptionsSelected]);

	return (
		<div className={styles.parentDiv}>
			<div className={stylesGeneral.backNextDiv}>
				<BackButton
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
				/>
				<NextButton
					message='Class'
					arrayPosition={componentArrayPosition}
					setArrayPosition={setComponentArrayPosition}
					arrayToCycle={componentArray}
					condition={moveOn}
				/>
			</div>
			<DropDownList
				optionType={'Race'}
				optionsArray={raceArray}
				optionSelection={setRace}
				selectedOption={race}
				above={false}
			/>
			{race != '' && (
				<div className={styles.raceInformationDiv}>
					<div className={styles.raceDescription}>
						<SplitIntoParagraphs text={raceDescription} id='raceDescription' />
					</div>
					<BlueRedBlueHeadingLabel
						blueHeading='ABILITY SCORE MODIFIERS'
						redSubHead={raceScoreModifiers}
						blueSubHead={`${raceHP.toString()} HP`}
					/>

					<div className={styles.abilityDiv}>
						<RedLabel redLabelText='SIZE AND TYPE' />
						<div className={stylesGeneral.descriptionDiv}>
							<SplitIntoParagraphs text={raceSizeAndType} id='sizeAndType' />
						</div>
					</div>
					<RaceAbilityArray
						raceAbilityName={raceAbilityName}
						raceAbilityDescription={raceAbilityDescription}
					/>
					{hasOptions ? (
						<ShowOptions
							optionsToMap={optionDescription}
							optionArray={optionArray}
							optionsSelectedArray={raceOptionsSelected}
							keyString='raceOptions'
						/>
					) : null}
				</div>
			)}
		</div>
	);
}

type RaceAbilityArrayProps = {
	raceAbilityName: string[];
	raceAbilityDescription: string[];
};

function RaceAbilityArray({
	raceAbilityName,
	raceAbilityDescription,
}: RaceAbilityArrayProps) {
	return raceAbilityName.map((header, index) => {
		return (
			<div className={styles.abilityDiv} key={`${header}${index}`}>
				<RedLabel redLabelText={header} />
				<div className={stylesGeneral.descriptionDiv}>
					<SplitIntoParagraphs
						text={raceAbilityDescription[index]}
						id={`abilityDescription${index}`}
					/>
				</div>
			</div>
		);
	});
}

export default CharacterCreationRaceDisplay;
