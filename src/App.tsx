import AboutUs from '@components/AboutUs'
import Contact from '@components/Contact'
import Hero from '@components/Hero'
import Works from '@components/Works'

import styles from './app.module.scss'

const App = () => {
	return (
		<div className={styles.container}>
			<Hero />
			<AboutUs />
			<Works />
			<Contact />
		</div>
	)
}

export default App
