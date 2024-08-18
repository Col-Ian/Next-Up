import styles from './RedLabel.module.css';
type RedLabelProps = {
	redLabelText: string;
};

function RedLabel({ redLabelText }: RedLabelProps) {
	return (
		<div className={styles.labelBox}>
			<span className={styles.labelBoxLeft}>
				<div className={styles.labelBoxTopLeft} />
				<div className={styles.labelBoxBottomLeft} />
			</span>
			<span className={styles.labelText}>{redLabelText}</span>
			<span className={styles.labelBoxRight}>
				<div className={styles.labelBoxTopRight} />
				<div className={styles.labelBoxBottomRight} />
			</span>
		</div>
	);
}

export default RedLabel;
