import Button from '@ui/Button'

import styles from './contact.module.scss'

const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.leftSide}>
					<form className={styles.form}>
						<h1 className={styles.title}>Contact Us</h1>
						<input
							type='text'
							placeholder='Name'
							required
							className={styles.input}
						/>
						<input
							type='email'
							placeholder='Email'
							required
							className={styles.input}
						/>
						<textarea
							className={styles.textArea}
							placeholder='Write your message'
							rows={10}
						></textarea>
						<Button width='100%'>Send</Button>
					</form>
				</div>
				<div className={styles.rightSide}></div>
			</div>
		</div>
	)
}

export default Contact
