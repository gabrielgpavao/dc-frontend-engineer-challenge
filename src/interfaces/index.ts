export type tTransactionType = 'credit' | 'debit'

export interface iTransaction {
	id: string
	type: tTransactionType
	title: string
	category: string
	value: number
}
