import { combineReducers } from 'redux'
import contentReducer from './contentReducer'
import classReducer from './classReducer'
import teacherReducer from './teacherReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    contentInRootReducer: contentReducer,
    classInRootReducer: classReducer,
    teacherInRootReducer: teacherReducer,
    categoryInRootReducer: categoryReducer
    
})

export default rootReducer