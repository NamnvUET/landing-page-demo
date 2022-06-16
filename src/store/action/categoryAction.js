// import axios from "axios";

export const getCategoryDemo = () => dispatch => {
    try {
        dispatch({
            type: 'GET_CATEGORIES_DEMO',
            payload: ''
        })
    } catch (error) {
        console.log(error);
    }
}
