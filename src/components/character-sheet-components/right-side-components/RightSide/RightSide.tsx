import ArmorClassBlock from '../ArmorClassBlock/ArmorClassBlock';
import HealthAndResolveBlock from '../HealthAndResolveBlock/HealthAndResolveBlock';
import InitiativeBlock from '../InitiativeBlock/InitiativeBlock';
import SavingThrowsBlock from '../SavingThrowsBlock/SavingThrowsBlock';
import styles from './RightSide.module.css';

function RightSide() {
	return (
		<div className={styles.parentDiv}>
			<InitiativeBlock />
			<HealthAndResolveBlock />
			<ArmorClassBlock />
			<SavingThrowsBlock />
		</div>
	);
}

export default RightSide;
