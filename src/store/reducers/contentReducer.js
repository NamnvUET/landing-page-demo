import { v4 as uuidv4 } from 'uuid';

const initialState = {
    contentInContentReducer: [
        {
            id: uuidv4(),
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            title: 'CONTENT TITLE 1',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        },
        {
            id: uuidv4(),
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            title: 'CONTENT TITLE 2',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        },
        {
            id: uuidv4(),
            title: 'CONTENT TITLE 3',
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        },
        {
            id: uuidv4(),
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            title: 'CONTENT TITLE 4',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        },
        {
            id: uuidv4(),
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            title: 'CONTENT TITLE 5',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        },
        {
            id: uuidv4(),
            image: process.env.PUBLIC_URL + '/img/icon1.jpg',
            title: 'CONTENT TITLE 6',
            content: 'Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp ngày học phù hợp'
        }
    ]
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTENTS_DEMO':
            return state

        case 'GET_CONTENTS':
            return {
                ...state,
                contentInContentReducer: action.payload
            }

        case 'ADD_NEW_CONTENT':
            return {
                ...state,
                contentInContentReducer: [
                    ...state.contentInContentReducer,
                    action.payload
                ]
            }

        case 'DELETE_CONTENT':
            return {
                ...state,
                contentInContentReducer: state.contentInContentReducer.filter(content => content.id !== action.payload)
            }

        default:
            return state;
    }

}

export default contentReducer