import { ReactNode, createContext } from 'react'
import { iUserProviderValue } from './interfaces'

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider({ children }: { children: ReactNode }) {
	return (
		<UserContext.Provider value={{}}>
			{children}
		</UserContext.Provider>
	)
}
