import { ReactNode, createContext, useState } from 'react'
import { iUserProviderValue } from './interfaces'
import { user } from '@/mocks/user'
import { tUser } from '@/interfaces'

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider({ children }: { children: ReactNode }) {
	const [customer, setCustomer] = useState<tUser>(user)

	return (
		<UserContext.Provider
			value={{
				customer,
				setCustomer
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
