import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export const ContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({})

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext)
