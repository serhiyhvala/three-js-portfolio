import { NavbarList } from '@constants/index'
import logo from '@img/logo.png'
import search from '@img/search.png'
import Button from '@ui/Button'

import styles from './navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.links}>
					<img className={styles.logo} src={logo} alt='' />
					<ul className={styles.list}>
						{NavbarList.map(item => (
							<li className={styles.listItem} key={item.id}>
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.icons}>
					<img className={styles.searchIcon} src={search} alt='' />
					<Button>Hire Now</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
