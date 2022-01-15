import { createContext, useContext, useReducer, useEffect } from 'react'
import { stepReducer } from 'reducers/stepReducer'

const stepContext = createContext(null)

const initialStateStep = {
	stockage_step: {},
	packaging_step: false,
	transport_step: {},
}

export const ContextProvider = ({ children }) => {
	const isBrowser = typeof window !== 'undefined'
	const [steps, dispatch] = useReducer(stepReducer, initialStateStep)

	useEffect(() => {
		const localData = localStorage.getItem('steps')
		if (localData) {
			return dispatch({
				type: 'UPDATE_LOCAL_STORAGE',
				payload: JSON.parse(localData),
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('steps', JSON.stringify(steps))
	}, [steps])

	return (
		<stepContext.Provider value={{ steps, dispatch, isBrowser }}>
			{children}
		</stepContext.Provider>
	)
}

export const useStepContext = () => useContext(stepContext)
