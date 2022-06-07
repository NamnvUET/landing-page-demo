import axios from "axios";

export const getClassesDemo = () => dispatch => {
    try {
        dispatch({
            type: 'GET_CLASSES_DEMO',
            payload: ''
        })
    } catch (error) {
        console.log(error);
    }
}
