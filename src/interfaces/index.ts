export type tUser = {
	id: string
	firstName: string
	lastName: string
	email: string
	avatarURL: string
	company: string
	createdAt: Date
}

export type tTransactionType = 'credit' | 'debit'

export type tTransaction = {
	id: string
	type: tTransactionType
	title: string
	category: string
	value: number
	createdAt: Date
}
