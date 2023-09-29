import { tTransaction } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'

export const transactionsMock: tTransaction[] = [
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 3997.99,
		createdAt: new Date('2022-09-17T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 3997.99,
		createdAt: new Date('2023-08-28T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 3997.99,
		createdAt: new Date('2023-09-10T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 3997.99,
		createdAt: new Date('2023-09-10T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 3997.99,
		createdAt: new Date('2023-09-11T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 3997.99,
		createdAt: new Date('2023-09-19T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Imposto de Renda',
		type: 'debit',
		category: 'Imposto',
		value: 1005.47,
		createdAt: new Date('2023-09-22T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 1005.47,
		createdAt: new Date('2023-09-22T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 1005.47,
		createdAt: new Date('2023-09-22T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'credit',
		category: 'Salário',
		value: 1005.47,
		createdAt: new Date('2023-12-26T10:00:00Z')
	},
	{
		id: uuidv4(),
		title: 'Pró-Labore',
		type: 'debit',
		category: 'Salário',
		value: 1005.47,
		createdAt: new Date('2023-12-26T10:00:00Z')
	}
]
