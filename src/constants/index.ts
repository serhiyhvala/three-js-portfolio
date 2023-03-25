import { v4 as uuid } from 'uuid'

import { INavBarList, IWorksList } from './index.interface'

export const NavbarList: INavBarList[] = [
	{
		title: 'Home',
		id: uuid()
	},
	{
		title: 'Studio',
		id: uuid()
	},
	{
		title: 'Works',
		id: uuid()
	},
	{
		title: 'Contact',
		id: uuid()
	}
]

export const WorksList: IWorksList[] = [
	{
		title: 'Web Design',
		id: uuid()
	},
	{
		title: 'Development',
		id: uuid()
	},
	{
		title: 'Illustration',
		id: uuid()
	},
	{
		title: 'Product Design',
		id: uuid()
	},
	{
		title: 'Social Media',
		id: uuid()
	}
]
