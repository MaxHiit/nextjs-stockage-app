export const stepReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_LOCAL_STORAGE':
			return {
				...state,
				...action.payload,
			}
		case 'ADD_STOCKAGE_STEP':
			return {
				...state,
				stockage_step: {
					...action.payload,
				},
			}

		case 'ADD_PACKAGING':
			return {
				...state,
				packaging_step: action.payload,
			}

		case 'ADD_TRANSPORT_STEP':
			return {
				...state,
				transport_step: {
					...action.payload,
				},
			}
		case 'ADD_INSURANCE_STEP':
			return {
				...state,
				insurance_step: {
					...action.payload,
				},
			}
		case 'ADD_USER_STEP':
			return {
				...state,
				user_step: {
					...action.payload,
				},
			}
		default:
			return state
	}
}
