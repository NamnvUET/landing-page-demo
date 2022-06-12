import axios from "axios";

export const getContentDemo = () => dispatch => {
    try {
        dispatch({
            type: 'GET_CONTENTS_DEMO',
            payload: ''
        })
    } catch (error) {
        console.log(error);
    }
}

// export const getTodos = () => async dispatch => {
//     try {
//         const todosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
//         console.log('todores', todosResponse);
//         dispatch({
//             type: 'GET_TODOS',
//             payload: todosResponse.data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const markComplete = (id) => {
//     const markCompleteAction = dispatch => {
//         console.log(id);
//         dispatch({
//             type: 'MARK_COMPLETE',
//             payload: id
//         })
//     }

//     return markCompleteAction
// }

// export const addNewTodo = (newTodo) => dispatch => {
//     dispatch({
//         type: 'ADD_NEW_TODO',
//         payload: newTodo
//     })
// }

// export const deleteTodo = (id) => dispatch => {
//     console.log('>TodoAction | id', id);
//     dispatch({
//         type: 'DELETE_TODO',
//         payload: id
//     })
// }