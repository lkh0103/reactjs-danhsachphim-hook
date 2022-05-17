import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { dangNhapAction } from '../redux/actions/QuanLyNguoiDungActions';

export default function Login(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            nhapLaiMatKhau: '',
            email: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(6, 'Mật khẩu 6 - 32 ký tự').max(32, 'Mật khẩu 6-32 ký tự'),
            email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
            nhapLaiMatKhau: Yup.string().required('Không được bỏ trống !'),
        }),
        onSubmit: (values) => {
            const action = dangNhapAction(values)

            dispatch(action);
        }
    })

    return (
        <form className='container' onSubmit={formik.handleSubmit} >
            <h3>Đăng nhập</h3>
            <div className='form-group'>
                <p>Tài khoản</p>
                <input className='form-control' name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div className='text-danger'>{formik.errors.taiKhoan}</div>) : null}
            </div>
            <div className='form-group'>
                <p>Mật khẩu</p>
                <input className='form-control' name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.matKhau && formik.touched.matKhau ? (<div className='text-danger'>{formik.errors.matKhau}</div>) : null}
            </div>
            <div className='form-group'>
                <p>Nhập lại mật khẩu</p>

                {/* <input className='form-control' name='nhapLaiMatKhau' onChange={formik.handleChange} onBlur={() => {
                    // Cách 1 nhanh gọn ko costum
                    //Tự định nghĩa hàm ko cần formik định nghĩa
                    if (formik.values.matKhau !== formik.values.nhapLaiMatKhau) {
                        formik.setFieldError('nhapLaiMatKhau', 'Lỗi nếu muốn bắt lỗi')
                    }
                }} onFocus={() => {
                    if (formik.values.matKhau !== formik.values.nhapLaiMatKhau) {
                        formik.setFieldError('nhapLaiMatKhau', 'Lỗi nếu muốn bắt lỗi')
                    }
                }} /> */}

                <input className='form-control' name='nhapLaiMatKhau' onChange={async (e) => {
                    await formik.setFieldValue('nhapLaiMatKhau', e.target.value);
                    if (e.target.value.trim() === '') {
                        await formik.setFieldError('nhapLaiMatKhau', 'Không được bỏ trống !')
                    }
                    if (e.target.value !== formik.values.matKhau) {
                        await formik.setFieldError('nhapLaiMatKhau', 'Mật khẩu nhập lại không đúng!')
                    }
                }} onBlur={async () => {
                    //Tự định nghĩa hàm không cần formik định nghĩa
                    if (formik.values.matKhau !== formik.values.nhapLaiMatKhau) {
                        await formik.setFieldError('nhapLaiMatKhau', 'Mật khẩu nhập lại không đúng!')
                    }
                }} onFocus={async () => {
                    if (formik.values.matKhau !== formik.values.nhapLaiMatKhau) {
                        await formik.setFieldError('nhapLaiMatKhau', 'Mật khẩu nhập lại không đúng!')
                    }
                }} />

                {formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau ? (<div className='text-danger'>{formik.errors.nhapLaiMatKhau}</div>) : null}
            </div>
            <div className='form-group'>
                <p>Email</p>
                <input className='form-control' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success' disabled={!formik.isValid}>Đăng Nhập</button>
            </div>
        </form>
    )
}
