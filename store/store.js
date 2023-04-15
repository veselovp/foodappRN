import { createStore, combineReducers } from 'redux'
import allergyReducer from './reducers/AllergiesReducer'
import textReducer from './reducers/TextReducer'

const rootReducer = combineReducers({
  allergy: allergyReducer,
  text: textReducer,
})

const store = createStore(rootReducer)

export default store
