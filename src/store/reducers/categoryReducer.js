import { v4 as uuidv4 } from 'uuid';

const initialState = {
    categoryInCategoryReducer: [
        {
            id: uuidv4(),
            category_name: 'Toán',
            slug: 'math',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng pháp sư toán học',
            category_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
        },
        {
            id: uuidv4(),
            category_name: 'Văn',
            slug: 'literature',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng pháp sư văn hoa',
            category_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
        },
        {
            id: uuidv4(),
            category_name: 'Lập trình',
            slug: 'developer',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng code siêu đỉnh',
            category_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
        },
        {
            id: uuidv4(),
            category_name: 'Khóa học phát triển tư duy 0',
            description: 'Kỹ năng tư duy logic đã trở thành một kĩ năng 0',
            category_image: process.env.PUBLIC_URL + '/img/insta_icon.jpg',
        },
    ]
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_DEMO':
            return state

        default:
            return state;
    }

}

export default categoryReducer