import ArmorBlock from '../ArmorBlock/ArmorBlock';
import ArmorClassBlock from '../ArmorClassBlock/ArmorClassBlock';
import ArmorProficienciesBlock from '../ArmorProficienciesBlock/ArmorProficienciesBlock';
import AttackBonusesBlock from '../AttackBonusesBlock/AttackBonusesBlock';
import ExperienceBlock from '../ExperienceBlock/ExperienceBlock';
import HealthAndResolveBlock from '../HealthAndResolveBlock/HealthAndResolveBlock';
import InitiativeBlock from '../InitiativeBlock/InitiativeBlock';
import LanguagesBlock from '../LanguagesBlock/LanguagesBlock';
import SavingThrowsBlock from '../SavingThrowsBlock/SavingThrowsBlock';
import WeaponProficienciesBlock from '../WeaponProficienciesBlock/WeaponProficienciesBlock';
import WeaponsBlock from '../WeaponsBlock/WeaponsBlock';
import styles from './RightSide.module.css';

function RightSide() {
	return (
		<div className={styles.parentDiv}>
			<InitiativeBlock />
			<HealthAndResolveBlock />
			<ArmorClassBlock />
			<SavingThrowsBlock />
			<AttackBonusesBlock />
			<WeaponsBlock />
			<ArmorBlock />
			<WeaponProficienciesBlock />
			<ArmorProficienciesBlock />
			<LanguagesBlock />
			<ExperienceBlock />
		</div>
	);
}

export default RightSide;
