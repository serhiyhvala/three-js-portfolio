import Map from '@components/Map'
import email from '@emailjs/browser'
import Button from '@ui/Button'
import { FormEvent, useRef, useState } from 'react'

import styles from './contact.module.scss'

const Contact = () => {
	const [loading, setLoading] = useState(false)
	const form = useRef<string | HTMLFormElement>('')
	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		email
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(result => console.log(result))
			.catch(error => console.error(error))
			.finally(() => {
				setLoading(false)
			})
	}
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.leftSide}>
					<form ref={form} className={styles.form} onSubmit={handleSubmitForm}>
						<h1 className={styles.title}>Contact Us</h1>
						<input
							type='text'
							placeholder='Name'
							required
							className={styles.input}
							name='name'
						/>
						<input
							type='email'
							placeholder='Email'
							required
							className={styles.input}
							name='email'
						/>
						<textarea
							className={styles.textArea}
							placeholder='Write your message'
							rows={10}
							name='message'
						/>
						<Button width='100%'>{loading ? 'Sending...' : 'Send'}</Button>
					</form>
				</div>
				<div className={styles.rightSide}>
					<Map />
				</div>
			</div>
		</div>
	)
}

export default Contact
