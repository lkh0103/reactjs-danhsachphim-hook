import { XOA_NGUOI_DUNG } from "./BTQuanLyNguoiDungTypes"

//khai báo action
export const xoaNguoiDungAction = (taiKhoan) => {
    return {
        type: XOA_NGUOI_DUNG,
        taiKhoan: taiKhoan
    }
}