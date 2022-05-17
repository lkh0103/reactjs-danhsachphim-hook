import React, { Component } from 'react'

export default class GioHang
    extends Component {
    render() {

        let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình ảnh</th>
                        <th>Tên SP</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img src={spGH.hinhAnh} width={50} alt='...' /></td>
                            <td>{spGH.tenSP}</td>
                            <td>{spGH.giaBan}</td>
                            <td>
                                <button className='btn btn-primary mr-2' onClick={() => {
                                    tangGiamSoLuong(spGH.maSP, 1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button className='btn btn-primary ml-2' onClick={() => {
                                    tangGiamSoLuong(spGH.maSP, -1)
                                }}>-</button>
                            </td>
                            <td>{spGH.soLuong * spGH.giaBan}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    xoaGioHang(spGH.maSP)
                                }}>Xóa</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
