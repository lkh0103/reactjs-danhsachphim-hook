import React, { Component } from 'react'


// React class component: lớp đối tượng
export default class Profile extends Component {

    //phương thức render là phương thức trả về giao diện của component này
    render() {
        return (
            <div className='w-25'>
                <div className="card text-left bg-dark text-light">
                    <img className="card-img-top" src="https://picsum.photos/id/1/300" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: Huy đẹp trai</h4>
                        <p className="card-text">18</p>
                    </div>
                </div>
            </div>
        )
    }
}
