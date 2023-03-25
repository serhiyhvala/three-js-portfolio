import Navbar from '@components/Navbar'
import line from '@img/line.png'
import moon from '@img/moon.png'
import Button from '@ui/Button'

import styles from './hero.module.scss'

const Hero = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.section}>
				<div className={styles.leftSection}>
					<h1 className={styles.title}>Think. Make. Solve</h1>
					<div className={styles.whatWeDo}>
						<img className={styles.line} src={line} alt='' />
						<h2 className={styles.subtitle}>What We Do</h2>
					</div>
					<p className={styles.description}>
						We enjoy creating delightful, human-centered digital experiences
					</p>
					<Button>Learn More</Button>
				</div>
				<div className={styles.rightSection}>
					<img className={styles.moonImage} src={moon} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Hero
