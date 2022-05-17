
//Vừa mở web lên đưa dữ liệu vào redux
let usLogin = null;
if (localStorage.getItem('userLogin')) {
    //Lấy ra
    usLogin = JSON.parse(localStorage.getItem('userLogin'));
}

const satteDefault = {
    userLogin: usLogin
}

export const QuanLyNguoiDungReducer = (state = satteDefault, action) => {
    switch (action.type) {

        case 'DANG_NHAP': {
            state.userLogin = action.data;
            return { ...state };
        }
        default: return { ...state }
    }
}