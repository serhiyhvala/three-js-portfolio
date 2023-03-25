import { WorksList } from '@constants/index'
import List from '@ui/List'

import styles from './works.module.scss'

const Works = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.leftSide}>
					<List flexDirection='column'>
						{WorksList.map(item => (
							<li
								className={styles.listItem}
								key={item.id}
								item-name={item.title}
							>
								{item.title}
							</li>
						))}
					</List>
				</div>
				<div className={styles.rightSide}></div>
			</div>
		</div>
	)
}

export default Works
