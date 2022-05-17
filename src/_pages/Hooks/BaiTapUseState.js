import React, { useState } from 'react'

export default function BaiTapUseState(props) {

    let [imgSrc, setImgSrc] = useState('./img/CarBasic/products/black-car.jpg')

    const handleChangeColor = (color) => {
        setImgSrc(`./img/CarBasic/products/${color}-car.jpg`)
    }

    return (
        <div className='row'>
            <div className='col-6'>
                <img className='w-100' src={imgSrc} alt='...' />
            </div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-3'>
                        <button onClick={() => {
                            handleChangeColor('red')
                        }} className='btn' style={{ backgroundColor: 'red', color: 'white' }}>Red</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => {
                            handleChangeColor('silver')
                        }} className='btn' style={{ backgroundColor: 'gray', color: 'white' }}>Silver</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => {
                            handleChangeColor('steel')
                        }} className='btn' style={{ backgroundColor: '#EEE', color: 'gray' }}>Steel</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => {
                            handleChangeColor('black')
                        }} className='btn' style={{ backgroundColor: 'black', color: 'white' }}>Black</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
