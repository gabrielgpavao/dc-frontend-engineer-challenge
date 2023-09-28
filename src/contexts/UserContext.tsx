import { ReactNode, createContext, useState } from 'react'
import { iUserProviderValue } from './interfaces'
import { userMock } from '@/mocks/user'
import { tTransaction, tUser } from '@/interfaces'
import { transactionsMock } from '@/mocks/transactions'
import { format, startOfToday } from 'date-fns'

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<tUser>(userMock)
	const [transactions, setTransactions] = useState<tTransaction[]>(transactionsMock)
	const todaysDate: Date = startOfToday()
	const [isDateSelected, setIsDateSelected] = useState<boolean>(false)
	const [selectedDate, setSelectedDate] = useState<Date>(todaysDate)
	const [currentMonth, setCurrentMonth] = useState<string>(format(todaysDate, 'M'))
	const [currentYear, setCurrentYear] = useState<string>(format(todaysDate, 'yyyy'))

	function selectDate(date: Date) {
		setIsDateSelected(true)
		setSelectedDate(date)
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				transactions,
				setTransactions,
				todaysDate,
				isDateSelected,
				selectedDate,
				setIsDateSelected,
				selectDate,
				currentMonth,
				setCurrentMonth,
				currentYear,
				setCurrentYear
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
