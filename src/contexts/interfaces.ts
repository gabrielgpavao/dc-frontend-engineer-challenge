import { tTransaction, tUser } from '@/interfaces'
import { Dispatch, SetStateAction } from 'react'

export interface iUserProviderValue {
	user: tUser
	setUser: Dispatch<SetStateAction<tUser>>
	transactions: tTransaction[]
	setTransactions: Dispatch<SetStateAction<tTransaction[]>>
	todaysDate: Date
	isDateSelected: boolean
	selectedDate: Date,
	setIsDateSelected: Dispatch<SetStateAction<boolean>>
	selectDate: (date: Date) => void
	currentMonth: string
	setCurrentMonth: Dispatch<SetStateAction<string>>
	currentYear: string
	setCurrentYear: Dispatch<SetStateAction<string>>
}
