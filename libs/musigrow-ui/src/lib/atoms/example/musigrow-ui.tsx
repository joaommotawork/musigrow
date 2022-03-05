import styles from './musigrow-ui.module.css';

/* eslint-disable-next-line */
export interface MusigrowUiProps {}

export function MusigrowUi(props: MusigrowUiProps) {
	return (
		<div className={styles['container']}>
			<h1>Welcome to MusigrowUi!</h1>
		</div>
	);
}

export default MusigrowUi;
