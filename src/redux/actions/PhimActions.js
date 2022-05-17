import axios from "axios"
import { KEY_TOKEN_CYBERSOFT, TOKEN_CYBERSOFT } from "../../Util/Setting"

//Closure function
export const getApiPhimAction = (maNhom = 'GP01') => {

    return (dispatch) => {
        //Gọi API
        let promise = axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            method: 'GET'
        })

        promise.then(result => {
            console.log('result', result.data)
            //Sau khi call API thành công lấy dữ liệu api set vào state mangPhim
            dispatch({
                type: 'GET_API_PHIM',
                data: result.data.content
            })
        })
        promise.catch(error => {
            console.log('error', error.response.data)
        })
    }
}

export const layThongTinPhimLichChieu = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET',
                Headers: {
                    [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT
                }
            })
            console.log('result', result);
            //sau khi lấy dữ liệu về thì cập nhật dữ liệu vào Redux
            dispatch({
                type: 'GET_CHI_TIET_PHIM_LICH_CHIEU',
                data: result.data.content
            })

        } catch (err) {
            console.log('err', err.response?.data);
        }
    }
}   