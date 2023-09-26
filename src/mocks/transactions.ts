import { tTransaction } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'

export const transactions: tTransaction[] = [
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 3997.99,
		createdAt: new Date('2023-09-19T10:53:35.753Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 3997.99,
		createdAt: new Date('2023-09-20T10:53:35.753Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 3997.99,
		createdAt: new Date('2023-09-20T10:53:35.753Z')
	},
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 1005.47,
		createdAt: new Date('2023-09-22T10:53:35.753Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 1005.47,
		createdAt: new Date('2023-09-22T10:53:35.753Z')
	}
]
