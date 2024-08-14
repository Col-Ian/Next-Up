import styles from './ExpandComponent.module.css';

type ExpandComponentProps = {
	expanded: boolean;
};

function ExpandComponent({ expanded }: ExpandComponentProps) {
	return (
		<div className={styles.parentDiv}>
			{expanded ? (
				<div className={styles.openComponent}>
					<div className={styles.upperBorders}>
						<div className={styles.leftBox} />
						<div className={styles.middleBox}>CLOSE</div>
						<div className={styles.rightBox} />
					</div>
				</div>
			) : (
				<div className={styles.closedComponent}>
					<div className={styles.upperBorders}>
						<div className={styles.leftBox} />
						<div className={styles.middleBox}>EXPAND</div>
						<div className={styles.rightBoxes}>
							<div className={styles.upperRightBox} />
							<div className={styles.lowerRightBox} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ExpandComponent;
