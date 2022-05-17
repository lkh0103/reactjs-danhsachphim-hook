import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class DanhSachSanPham
    extends Component {

    mangDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/DienThoai/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/DienThoai/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" },
        gioHang: [
            { maSP: 2, tenSP: 'Meizu 16Xs', hinhAnh: './img/DienThoai/meizuphone.jpg', giaBan: 7600000, soLuong: 1 }
        ]
    }

    tangGiamSoLuong = (maSP, soLuong) => {
        // 1 là tăng, -1 là giảm
        //console.log(maSP, soLuong)
        //Tìm trong mảng giỏ hàng sp cần tăng giảm số lượng
        let spGH = this.state.gioHang.find(sp => sp.maSP === maSP);
        if (spGH) {
            spGH.soLuong += soLuong;
            if (spGH.soLuong < 1) {
                spGH.soLuong -= soLuong;
                //alert('Sản phẩm tối thiểu là 1')
                // Hoặc xóa luôn
                this.xoaGioHang(spGH.maSP) //cách 1
                //this.state.gioHang = this.state.gioHang.filter(sp => sp.maSP !== maSP) cách 2
            }
        }

        //cập nhật lại state giỏ hàng bằng SetState
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    xoaGioHang = (maSPClick) => {
        console.log(maSPClick)

        //Xử lý xóa
        //Tìm ra vị trí sp đó trong mảng giỏ hàng
        let index = this.state.gioHang.findIndex(sp => sp.maSP === maSPClick);
        if (index !== -1) {
            //Xử lý xóa dựa vào index
            this.state.gioHang.splice(index, 1);
        }

        // Cách 2
        //let gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP != maSPClick)

        //setState cập nhật giỏ hàng + render giao diện
        this.setState({
            gioHang: this.state.gioHang
            //gioHang: gioHangCapNhat (cách 2)
        })
    }

    //State ở đâu thì hàm xử lý setState sẽ đặt tại đó
    themGioHang = (sanPhamClick) => {
        console.log(sanPhamClick);
        //tạo ra sp giỏ hàng
        let spGH = { ...sanPhamClick, soLuong: 1 }

        //lấy state giỏ hàng ra thêm sp này vào
        let gioHangCapNhat = this.state.gioHang;
        // gioHangCapNhat.push(spGH);

        //Kiểm tra sp đó có trong giỏ hàng hay chưa
        let sanPhamGioHang = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP);

        //Nếu sp đó đã có trong giỏ hàng rồi
        if (sanPhamGioHang) {
            sanPhamGioHang.soLuong += 1;
        } else {
            gioHangCapNhat.push(spGH);
        }

        // setState giỏ hàng
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    renderSanPham = () => {
        return this.mangDienThoai.map((sp, index) => {
            return <div className='col-4' key={index}>

                <SanPham themGioHang={this.themGioHang} sanPham={sp}
                    hamXemChiTiet={this.xemChiTiet} />
                {/* <div className='card'>
                    <img src={sanPham.hinhAnh} alt='...' height={350} />
                    <div className='card-body bg-dark text-white'>
                        <p>{sanPham.tenSP}</p>
                        <p>{sanPham.giaBan}</p>
                        <button className='btn btn-success' onClick={()=>{
                            this.xemChiTiet(sanPham);
                        }}>Xem chi tiết</button>
                    </div>
                </div> */}
            </div>
        })
    }

    xemChiTiet = (sanPhamClick) => {
        //Xử lý thay đổi state : lấy sản phẩm click thay thế cho sanphanChiTiet ban đầu
        // this.state.sanphamChiTiet = sanPhamClick;
        this.setState({
            sanPhamChiTiet: sanPhamClick
        })
    }

    render() {
        let { maSP, tenSP, manHinh, heDieuHanh, cameraSau, cameraTruoc, rom, ram, giaBan, hinhAnh } = this.state.sanPhamChiTiet;
        return (
            <div className='container'>

                <div className='text-right'>
                    <span style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold' }}>
                        Giỏ hàng (0)
                    </span>
                </div>
                <div>
                    <GioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                </div>

                <h3 className='text-center display-4'>Danh Sách Sản Phẩm</h3>
                <div className='row'>
                    {this.renderSanPham()}

                    {/* <div className='col-4'>
                        <div className='card'>
                            <img src='./img/DienThoai/vsphone.jpg' alt='...' />
                            <div className='card-body'>
                                <p>Tên Sản Phẩm</p>
                                <p>Giá SP</p>
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt='...' height={350} />
                    </div>
                    <div className='col-8'>
                        <h3>Thông Số Kỹ Thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{manHinh}</td> {/* cách 2 là this.state.sanPhamChiTiet.manHinh */}
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>cameraTruoc</th>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>cameraSau</th>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
