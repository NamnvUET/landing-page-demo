import { v4 as uuidv4 } from 'uuid';

const initialState = {
    teacherInTeacherReducer: [
        {
            id: uuidv4(),
            name: 'Phương Ly Ly 1',
            description: 'Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla. Lorem ipsum bla bla bla',
        },
        {
            id: uuidv4(),
            name: 'Phương Ly Ly 2',
            description: 'Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla. Lorem ipsum bla bla bla',
        },
        {
            id: uuidv4(),
            name: 'Phương Ly Ly 3',
            description: 'Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla. Lorem ipsum bla bla bla',
        }
    ]
}

const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TEACHERS_DEMO':
            return state

        default:
            return state;
    }

}

export default teacherReducer