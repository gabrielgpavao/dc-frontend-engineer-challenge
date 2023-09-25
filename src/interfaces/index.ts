export enum TransactionType {
	DEBIT= 'DEBIT',
	CREDIT= 'CREDIT'
}

export interface iTransaction {
	id: string
	type: TransactionType
	title: string
	category: string
	value: number
}
