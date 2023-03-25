import { FC, ReactNode } from 'react'

import styles from './button.module.scss'

type ButtonProps = {
	children: ReactNode
	width: number | string
}

const Button: FC<ButtonProps> = ({ children, width }) => {
	const buttonWidth = typeof width === 'string' ? width + '%' : width
	return (
		<button className={styles.button} style={{ width: buttonWidth }}>
			{children}
		</button>
	)
}

export default Button
