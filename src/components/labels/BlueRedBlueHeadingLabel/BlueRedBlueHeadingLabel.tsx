import styles from './BlueRedBlueHeadingLabel.module.css';

type BlueRedBlueHeadingLabelProps = {
	blueHeading: string;
	redSubHead: string;
	blueSubHead: string;
};

export function BlueRedBlueHeadingLabel({
	blueHeading,
	redSubHead,
	blueSubHead,
}: BlueRedBlueHeadingLabelProps) {
	return (
		<div className={styles.parentDiv}>
			<div className={styles.topBlueHead}>
				<div className={styles.headLeftBlock}>
					<div className={styles.headLeftBlockTop} />
					<div className={styles.headLeftBlockBottom} />
				</div>
				<div className={styles.textBlock}>{blueHeading}</div>
				<div className={styles.headRightBlock}>
					<div className={styles.headRightBlockTop} />
					<div className={styles.headRightBlockBottom} />
				</div>
			</div>
			<div className={styles.subHead}>
				<div className={styles.redSubHead}>{redSubHead}</div>
				<div className={styles.blueSubHead}>
					<div className={styles.blueSubHeadText}>{blueSubHead}</div>
					<div className={styles.blueBlockRight}>
						<div className={styles.blueBlockRightTop} />
						<div className={styles.blueBlockRightBottom} />
					</div>
				</div>
			</div>
		</div>
	);
}
