import { XOA_NGUOI_DUNG } from "../actions/types/BTQuanLyNguoiDungTypes";

const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', matKhau: '123', hoTen: 'nguyen van a', soDienThoai: '0908090809', email: 'nguyenvana@gmail.com', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'nguyenvanb', matKhau: '456', hoTen: 'nguyen van a', soDienThoai: '0908090809', email: 'nguyenvanb@gmail.com', maLoaiNguoiDung: 'QuanTri' }
    ],
    nguoiDungChinhSua: {
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        soDienThoai: '',
        email: '',
        maLoaiNguoiDung: ''
    }
}

export const BTQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return { ...state }
        }
        case XOA_NGUOI_DUNG: {
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan)];
            return { ...state }
        }
        case 'CHINH_SUA_NGUOI_DUNG': {
            state.nguoiDungChinhSua = action.nguoiDung;
            return { ...state }
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            //Lấy DL ng dùng trong mảng ra
            let nguoiDung = state.mangNguoiDung.find(nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
            if (nguoiDung) {
                //cách 1:dài dòng nguoiDung.hoTen=action.nguoiDung.hoTen;
                //Cách 2: Xài For in
                for (let kye in action.nguoiDung) {
                    nguoiDung[kye] = action.nguoiDung[kye];
                }
            }
            //Cập nhật lên giao diện bảng Table bằng cách sao chép nó ra
            state.mangNguoiDung = [...state.mangNguoiDung]
            return { ...state }
        }
        default: return state;
    }
}