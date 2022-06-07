import { v4 as uuidv4 } from 'uuid';

const initialState = {
    classInClassReducer: [
        {
            id: uuidv4(),
            start_time: '20/12 2022',
            class_name: 'Khóa học phát triển tư duy 0',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng 0',
            teacher_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
            review: 4
        },
        {
            id: uuidv4(),
            start_time: '22/12 2022',
            class_name: 'Khóa học phát triển tư duy 1',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng 1',
            teacher_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
            review: 4
        },
        {
            id: uuidv4(),
            start_time: '24/12 2022',
            class_name: 'Khóa học phát triển tư duy 2',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng 2',
            teacher_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
            review: 4
        },
        {
            id: uuidv4(),
            start_time: '30/12 2022',
            class_name: 'Khóa học phát triển tư duy 3',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng 3',
            teacher_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
            review: 4
        }
    ]
}

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CLASSES_DEMO':
            return state

        // case 'GET_CONTENTS':
        //     return {
        //         ...state,
        //         contentInContentReducer: action.payload
        //     }

        // case 'ADD_NEW_CONTENT':
        //     return {
        //         ...state,
        //         contentInContentReducer: [
        //             ...state.contentInContentReducer,
        //             action.payload
        //         ]
        //     }

        // case 'DELETE_CONTENT':
        //     return {
        //         ...state,
        //         contentInContentReducer: state.contentInContentReducer.filter(content => content.id !== action.payload)
        //     }

        default:
            return state;
    }

}

export default classReducer