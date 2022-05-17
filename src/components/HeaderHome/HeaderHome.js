import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function HeaderHome(props) {

    const { userLogin } = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer)

    const renderButtonLogin = () => {
        if (userLogin) { //Đã đăng nhập
            return <NavLink className="nav-link" to="/">{userLogin.taiKhoan}</NavLink>
        }
        //chưa đăng nhập thì render ra nút đăng nhập
        return <NavLink className="nav-link" to="/login">Login</NavLink>
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">HUYLAM</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">contact</NavLink>
                        </li>
                        <li className="nav-item">
                            {renderButtonLogin()}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hoc">HOC (Higher order component)</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="nav-link text-dark" to="/usestate">UseState</NavLink>
                                <NavLink className="nav-link text-dark" to="/useeffect">UseEffect</NavLink>
                                <NavLink className="nav-link text-dark" to="/usememo">Use Memo</NavLink>
                                <NavLink className="nav-link text-dark" to="/useref">Use Ref</NavLink>
                                <NavLink className="nav-link text-dark" to="/hookredux">Hook Redux</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">React API</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="nav-link text-dark" to="/classapi">Class API</NavLink>
                                <NavLink className="nav-link text-dark" to="/functionapi">Function API</NavLink>
                                <NavLink className="nav-link text-dark" to="/middleware">MiddleWare</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}
