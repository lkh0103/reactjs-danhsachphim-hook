import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FuncApi() {

    const [arrNguoiDung, setArrNguoiDung] = useState([]); //arrNguoiDung = []

    useEffect(() => {
        let promise = axios({
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            method: 'GET'
        })
        //Xử lý thành công
        promise.then((result) => {
            //setState sau khi lấy dữ liệu từ API về
            setArrNguoiDung(result.data.content);
        })
        //Xử lý thất bại
        promise.catch(err => {
            console.log('err', err);
            //console.log({ err })
        })
    }, [])

    return (
        <div className='container'>
            <h3>React function component api</h3>
            <h3>Danh sách người dùng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tài khoản</th>
                        <th>Hình ảnh</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrNguoiDung.map((nguoiDung, index) => {
                        return <tr key={index}>
                            <td> {nguoiDung.taiKhoan} </td>
                            <td> <img src={`https://i.pravatar.cc/50?u=${nguoiDung.email}`} alt='...' /> </td>
                            <td> {nguoiDung.hoTen} </td>
                            <td> {nguoiDung.soDt} </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
