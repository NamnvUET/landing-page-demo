import axios from "axios";

export const getTeachersDemo = () => dispatch => {
    try {
        dispatch({
            type: 'GET_TEACHERS_DEMO',
            payload: ''
        })
    } catch (error) {
        console.log(error);
    }
}
