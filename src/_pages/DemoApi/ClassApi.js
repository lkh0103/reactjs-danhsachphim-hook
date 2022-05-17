import axios from 'axios';
import React, { Component } from 'react'

export default class ClassApi extends Component {
    state = {
        arrNguoiDung: []
    }

    getApiLayDanhSachNguoiDung = async () => {
        try {
            let result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
                method: 'GET'
            })
            console.log('result', result.data.content)
            await this.setState({
                arrNguoiDung: result.data.content
            })
        } catch (err) {
            console.log({ err });
        }

        console.log('123');

        // let promise = axios({
        //     url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
        //     method: 'GET'
        // })
        // //Xử lý thành công
        // promise.then((result) => {
        //     console.log('result', result);
        //     //Lấy dữ liệu từ backend về đưa vào state
        //     this.setState({
        //         arrNguoiDung: result.data.content // [{...},{...},{...}]
        //     })
        // })
        // //Xử lý thất bại
        // promise.catch(err => {
        //     console.log('err', err);
        //     //console.log({ err })
        // })
    }

    renderNguoiDung = () => {
        //this.state.arrNguoiDung (mảng lấy từ api về): [{...},{...},{...}]
        return this.state.arrNguoiDung.map((nguoiDung, index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={`https://i.pravatar.cc/150?u=${nguoiDung.email}`} alt='...' />
                    <div className='card-body'>
                        <p>Họ tên: {nguoiDung.hoTen}</p>
                        <p>Số điện thoại: {nguoiDung.soDt}</p>
                    </div>
                </div>
            </div>
        })
    }
    //Hàm chạy sau khi giao diện html render (thường gọi API)
    componentDidMount() {
        this.getApiLayDanhSachNguoiDung();
    }

    render() {
        return (
            <div className='container'>
                <h3>React class component api</h3>
                <button className='btn btn-success' onClick={() => {
                    this.getApiLayDanhSachNguoiDung();
                }} >Get Api</button>

                {/* <table className='table'>
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
                        {this.state.arrNguoiDung.map((nguoiDung, index) => {
                            return <tr key={index}>
                                <td>{nguoiDung.taiKhoan}</td>
                                <td><img src={`https://i.pravatar.cc/100?u=${nguoiDung.email}`} /></td>
                                <td>{nguoiDung.hoTen}</td>
                                <td>{nguoiDung.soDt}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table> */}

                <div className='row'>
                    {this.renderNguoiDung()}
                </div>
            </div>
        )
    }
}
