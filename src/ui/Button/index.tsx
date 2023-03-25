import { FC, ReactNode } from 'react'

import styles from './button.module.scss'

type ButtonProps = {
	children: ReactNode
	width?: number
}

const Button: FC<ButtonProps> = ({ children, width }) => {
	return (
		<button className={styles.button} style={{ width: width }}>
			{children}
		</button>
	)
}

export default Button
