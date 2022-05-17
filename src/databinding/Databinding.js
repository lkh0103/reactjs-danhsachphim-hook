import React, { Component } from 'react'

export default class Databinding extends Component {
    renderImg = () => {
        return  <div>
                    <img src='http://i.pravatar.cc/200' alt='...'/>
                </div>
    }

    renderCard = () => {
        return <div className='card'>
            {this.renderImg()}
            <div className='card-body'>
                <p>Ho Ten: Huy</p>
                <p>Tuoi: 18</p>
            </div>
        </div>
    }

    render() {      
        let title = 'cybersoft';
        let srcImg = 'http://i.pravatar.cc/300'
        let sinhVien = {
            maSV: 1,
            tenSV: 'Nguyen Van Teo',
            namSinh: '20/12/2000',
            hinhAnh: 'http://i.pravatar.cc/200'
        }

        return (      
        <div className='container'>
            Databinding
            {this.renderCard()}
            {this.renderImg()}
            <p id='txt'>{title}</p>
            <br />
            <img src={srcImg} alt='...'/>
            <br />
            <br />
            <div className='card w-25'>
                <img src= {sinhVien.hinhAnh} alt=''/>
                <div className='card-body'>
                    <p>Ho Ten: {sinhVien.tenSV} </p>
                    <p>Ngay sinh: {sinhVien.namSinh} </p>
                </div>
            </div>
        </div>
        )
    }
}
