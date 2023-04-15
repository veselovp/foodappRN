const initialState = {
  allergies: [],
}

const allergyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALLERGY':
      return { allergies: [...state.allergies, action.payload] }
    case 'REMOVE_ALLERGY':
      return { allergies: state.allergies.filter((a) => a !== action.payload) }
    default:
      return state
  }
}
export default allergyReducer
