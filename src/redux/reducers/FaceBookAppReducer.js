

const staeDefault = {
    arrContent: [
        { name: 'Thanh', content: 'Hello Huy' },
        { name: 'Si', content: 'Hello Huy đẹp trai' }
    ]
}

export const FaceBookAppReducer = (state = staeDefault, action) => {

    switch (action.type) {
        case 'ADD_CONTENT': {
            //Vừa sao chép ra mảng mới vừa push 1 phần tử action.content vào mảng
            state.arrContent = [...state.arrContent, action.content];

            return { ...state }
        }
        default: return { ...state }
    }
}