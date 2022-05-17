import { history } from "../../App";
import { http } from "../../Util/Setting";


export const dangNhapAction = (userLogin) => {

    console.log('userLogin', userLogin)

    return async (dispatch) => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/dangnhap', userLogin);

            //Đưa dũ liệu lên Redux
            dispatch({
                type: 'DANG_NHAP',
                data: result.data.content
            });
            //Lưu token vào Local strorage
            localStorage.setItem('userLogin', JSON.stringify(userLogin));
            localStorage.setItem('accessToken', result.data.content.accessToken);

            console.log('result', result.data.content)
            //Chuyển hướng trang sau khi login thành công
            history.push('/');

        } catch (err) {
            console.log('err', err.response?.data);
        }
    }
}