import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {

    state = {
        values: {// Thông tin đúng
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
            maLoaiNguoiDung: 'KhachHang'
        },
        errors: {// Thông tin lỗi
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
            maLoaiNguoiDung: ''
        }
    }

    handleChangInput = (event) => {
        //Dựa vào biến event sẽ có thể truy xuất đc đến các thông tin của thẻ
        let { id, name, value } = event.target;
        //Mỗi lần nhập dữ liệu vào sẽ xử lý 2 phần
        //Phần 1 values
        let newValues = { ...this.state.values };
        newValues[name] = value;
        //Phần 2 errors
        let newErrors = { ...this.state.errors };
        let messError = '';
        //Khi người dùng nhập bỏ trống
        if (value.trim() === '') {
            messError = name + 'Ko được bỏ trống!';
        }
        if (event.target.type === 'email') {
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                messError = 'Email không đúng định dạng';
            }
        }
        newErrors[name] = messError;
        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); //Cản sự kiện reload browser
        //validation trước khi submit
        let { values, errors } = this.state;
        let valid = true; //valid=true là form hợp lệ
        //Kiểm tra all các giá trị (taiKhoan, matKhau,...) trong values xem có hợp lệ không
        for (let kye in values) {
            if (values[kye] === '') {
                valid = false;
                break;
            }
        }
        //Kiểm tra all các giá trị (taiKhoan, matKhau,...) trong errors xem có lỗi không
        for (let kye in errors) {
            if (errors[kye] !== '') {
                valid = false;
                break;
            }
        }

        if (!valid) {
            alert('Dữ liệu không hợp lệ!');
            return;
        }


        //Gửi dữ liệu giá trị ng dùng nhập vòa lên redux
        const action = {
            type: 'THEM_NGUOI_DUNG',
            nguoiDung: this.state.values
        }
        this.props.dispatch(action);
    }

    //Xử lý cách 1 : Can thiệp vào quá trình render component khi thay đổi props
    // static getDerivedStateFromProps(newProps, currentState) {
    //     //Chọn thời điểm trước khi render props mới từ redux trả về edit vào state và return về state => component render => render state ra 
    //     //Cần phân định được người dùng bấm chỉnh sửa hay handle change 
    //     // + Nếu bấm chỉnh sửa thì tài khoản sẽ thay đổi
    //     // + handle change thì tài khoản không thay đổi
    //     if(newProps.nguoiDungChinhSua.taiKhoan !== currentState.values.taiKhoan) {
    //         currentState.values = {...newProps.nguoiDungChinhSua}
    //     }
    //     return {...currentState};
    // }
    //Cách 2 dùng lifecycle cũ chỉ chạy khi props thay đổi trước khi render
    componentWillReceiveProps(newProps) {
        //Chỉ chạy khi props thay đổi 
        this.setState({
            values: newProps.nguoiDungChinhSua
        })

    }
    //Cách 3: Không dùng lifecycle tất cả state đều đẩy lên redux

    render() {
        let { taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung } = this.state.values
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit} className='card'>

                <div className='card-header bg-dark text-white'>
                    <h3>Form Đăng Ký</h3>
                </div>

                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài Khoản</p>
                                <input className='form-control' id='taiKhoan' name='taiKhoan' onChange={this.handleChangInput} value={taiKhoan} />
                                <p className='text text-danger'>{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mật khẩu</p>
                                <input className='form-control' id='matKhau' name='matKhau' onChange={this.handleChangInput} value={matKhau} />
                                <p className='text text-danger'>{this.state.errors.matKhau}</p>
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input className='form-control' id='email' name='email' type='email' onChange={this.handleChangInput} value={email} />
                                <p className='text text-danger'>{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input className='form-control' id='hoTen' name='hoTen' onChange={this.handleChangInput} value={hoTen} />
                                <p className='text text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input className='form-control' id='soDienThoai' name='soDienThoai' onChange={this.handleChangInput} value={soDienThoai} />
                                <p className='text text-danger'>{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mã loại người dùng</p>
                                <select className='form-control' id='maLoaiNguoiDung' name='maLoaiNguoiDung' onChange={this.handleChangInput} value={maLoaiNguoiDung}>
                                    <option value='KhachHang'>Khách hàng</option>
                                    <option value='QuanTri'>Quản trị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-footer'>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-success'>Đăng ký</button>
                        <button type='button' className='btn btn-primary' onClick={() => {
                            const action = {
                                type: 'CAP_NHAT_NGUOI_DUNG',
                                nguoiDung: this.state.values
                            }
                            //Đưa dữ liệu cập nhật ng dùng lên redux
                            this.props.dispatch(action);
                        }} >Cập nhật</button>
                    </div>
                </div>

            </form>
        )
    }
}

const mapStateToProps = (rootRecuder) => {
    return {
        nguoiDungChinhSua: rootRecuder.BTQuanLyNguoiDungReducer.nguoiDungChinhSua
    }
}

export default connect(mapStateToProps)(FormDangKy)
