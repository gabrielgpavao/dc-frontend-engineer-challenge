import { tUser } from '@/interfaces'
import { Dispatch, SetStateAction } from 'react'

export interface iUserProviderValue {
	customer: tUser,
	setCustomer: Dispatch<SetStateAction<tUser>>
}
