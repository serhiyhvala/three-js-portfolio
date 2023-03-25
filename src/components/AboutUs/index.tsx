import line from '@img/line.png'
import Button from '@ui/Button'

import styles from './aboutUs.module.scss'

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.leftSection}></div>
				<div className={styles.rightSection}>
					<h1 className={styles.title}>Think outside the square space</h1>
					<div className={styles.whatWeDo}>
						<img className={styles.line} src={line} alt='' />
						<h2 className={styles.subtitle}>Who we Are</h2>
					</div>
					<p className={styles.description}>
						A creative group of designers and developers with passions for the
						arts
					</p>
					<Button width={120}>See our works</Button>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
