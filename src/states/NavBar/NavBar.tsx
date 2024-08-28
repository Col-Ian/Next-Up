import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useEffect, useState } from 'react';
import { getValue } from '../../utils/getValue.ts';

function NavBar() {
	const [nameArray, setNameArray] = useState<NameArrayType>(
		getValue('charactersAvailable')
	);

	useEffect(() => {
		if (getValue('charactersAvailable') != null) {
			setNameArray(getValue('charactersAvailable'));
		}
	}, []);

	addEventListener('Character List Updated', () => {
		setNameArray(getValue('charactersAvailable'));
	});

	return (
		<nav className={styles.navBarParent}>
			<div className={[styles.navBarItem, styles.homePageDiv].join(' ')}>
				<Link to='/Next-Up/' onClick={scrollToTop}>
					Home
				</Link>
			</div>
			{nameArray && <ListOfCharacters nameArray={nameArray} />}
			<div className={[styles.navBarItem, styles.createCharacter].join(' ')}>
				<Link to='/Next-Up/create-character' onClick={scrollToTop}>
					<span className={styles.plusCircle}>+</span> Add Character
				</Link>
			</div>
		</nav>
	);
}

type ListOfCharactersProps = {
	nameArray: NameArrayType;
};

function ListOfCharacters({ nameArray }: ListOfCharactersProps) {
	return (
		<div className={styles.navBarWrapper}>
			{nameArray.map((i) => {
				return (
					<div className={styles.navBarItem} key={`${i.characterName}${i.id}`}>
						<Link to={`/Next-Up/charactersheet/${i.id}`} onClick={scrollToTop}>
							{i.characterName}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

function scrollToTop() {
	window.scrollTo(0, 0);
}

export default NavBar;
