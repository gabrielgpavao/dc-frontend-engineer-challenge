import { ReactNode, createContext, useState } from 'react'
import { iUserProviderValue } from './interfaces'
import { userMock } from '@/mocks/user'
import { tUser } from '@/interfaces'
import { transactionsMock } from '@/mocks/transactions'

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<tUser>(userMock)
	const [transactions, setTransactions] = useState(transactionsMock)

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				transactions,
				setTransactions
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
