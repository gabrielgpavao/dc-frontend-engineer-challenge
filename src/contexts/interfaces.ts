import { tTransaction, tUser } from '@/interfaces'
import { Dispatch, SetStateAction } from 'react'

export interface iUserProviderValue {
	user: tUser,
	setUser: Dispatch<SetStateAction<tUser>>,
	transactions: tTransaction[],
	setTransactions: Dispatch<SetStateAction<tTransaction[]>>
}
