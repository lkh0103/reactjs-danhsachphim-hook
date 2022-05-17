import React, { Component } from 'react'
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from '../redux/actions/types/BTQuanLyNguoiDungActions'
import { XOA_NGUOI_DUNG } from '../redux/actions/types/BTQuanLyNguoiDungTypes'

class TableDanhSachNguoiDung extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    <h3>Danh sách người dùng</h3>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Mã loại người dùng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.mangNguoiDung.map((nguoiDung, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.soDienThoai}</td>
                                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => {
                                            //Cách viết action creator
                                            const action = xoaNguoiDungAction(nguoiDung.taiKhoan);
                                            //Gởi dữ liệu lên Redux
                                            this.props.dispatch(action);

                                        }}>Xóa</button>

                                        <button className='btn btn-primary' onClick={() => {
                                            const action = {
                                                type: 'CHINH_SUA_NGUOI_DUNG',
                                                nguoiDung: nguoiDung
                                            }
                                            //Gọi hàm dispatch đưa dữ liệu dòng tr đc click lên redux
                                            this.props.dispatch(action);
                                        }}>Chỉnh sửa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootRecuder) => {
    return {
        mangNguoiDung: rootRecuder.BTQuanLyNguoiDungReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung)

