import React, { Component } from 'react'

export default class StateDemo extends Component {

    state = {
        login: false
    }

    login = false;
    userName = 'huylam';

    renderLogin = () =>{
        if(this.login) {
            return <span className='nav-item text-white'>Hello ! {this.userName} </span>
        }
        return <button className='nav-item btn btn-success' >
            Đăng Nhập
        </button>
    }

    handleLogin = () =>{
        //this.state.login = true; ko đc gán giá trị state trực tiếp, mà phải qua ph.thức set state
        // this.setState: là 1 ph.thức có sẵn của RCC giúp thay đổi giá trị State và làm render lại giao diện       
        // let newState = {
        //     login: true
        // }
        // setState là 1 hàm bất đồng bộ
        this.setState({
            login: true
        }, () =>{
            // Callback: hàm này sẽ chạy lại sau khi state thay đổi
            console.log('state', this.state)

        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                            {/* cách 1 sử dụng nhiều, do nhiều component, nhìu nội dung */}
                            {/* {this.renderLogin()} */}

                            {/* cách 2 ít xài, sử dụng cho 1 component, số lượng ít nội dung, toán tử 3 ngôi */}
                            {this.state.login ? <span className='nav-item text-white'>Hello ! {this.userName} </span> : 
                            <button className='nav-item btn btn-success' onClick={()=> {
                                this.handleLogin();
                            }}>
                                Đăng Nhập
                            </button>}

                            {/* <button className="nav-item btn btn-success">
                                <a className="nav-link" href="#">Đăng Nhập</a>
                            </button> */}
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}
