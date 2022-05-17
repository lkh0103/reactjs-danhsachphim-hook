import React, { Component } from 'react'

export default class SinhVien
 extends Component {
  render() {
    let {sinhvien} = this.props

    return (
      <div>
          <ul>
              <li>Mã sinh viên:{sinhvien.mssv}</li>
              <li>Họ Tên:{sinhvien.HoTen}</li>
              <li>Năm sinh:{sinhvien.namSinh}</li>
          </ul>
      </div>
    )
  }
}
