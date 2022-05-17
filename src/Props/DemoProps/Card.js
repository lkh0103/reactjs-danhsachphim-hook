import React, { Component } from 'react'

export default class Card
    extends Component {
    render() {
        //Props giống State: là thuộc tính có sẵn trong Rcc =>nhận giá trị từ nơi sử dụng component này truyền vào
        // Cách 1
        // let HoTen = this.props.HoTen
        // let tuoi = this.props.tuoi

        //cách 2 : gọp chung
        let {HoTen,tuoi} = this.props

        return (
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="https://i.pravatar.cc/200" alt />
                <div className="card-body">
                    <h4 className="card-title">{HoTen}</h4>
                    <p className="card-text">{tuoi}</p>
                </div>
            </div>
        )
    }
}
