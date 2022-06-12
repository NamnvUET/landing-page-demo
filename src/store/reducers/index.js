import { combineReducers } from 'redux'
import contentReducer from './contentReducer'
import classReducer from './classReducer'
import teacherReducer from './teacherReducer'

const rootReducer = combineReducers({
    contentInRootReducer: contentReducer,
    classInRootReducer: classReducer,
    teacherInRootReducer: teacherReducer,
})

export default rootReducer