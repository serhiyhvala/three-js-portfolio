import { CSSProperties, FC, ReactNode } from 'react'

import styles from './list.module.scss'

interface ListProps extends CSSProperties {
	children: ReactNode
}
const List: FC<ListProps> = ({ children, flexDirection }) => {
	return (
		<ul className={styles.list} style={{ flexDirection: flexDirection }}>
			{children}
		</ul>
	)
}

export default List
