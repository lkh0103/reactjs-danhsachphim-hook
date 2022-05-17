import React, { Component } from 'react'
import imgCar from '../assets/img/CarBasic/products/black-car.jpg'

export default class Example2 extends Component {

    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }

    changeColor = (color) =>{
        this.setState({
            imgCar: `./img/CarBasic/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            {/* cách 1 ưu tiên */}
                            <img src={this.state.imgCar} alt='...' className='w-100'/>

                            {/* cách 2, nhúng import vào sau đó img src{file import} */}
                            {/* <img src={imgCar} alt='...'className= 'w-100' /> */}

                        </div>
                        <div className='col-6'>

                            {/* cách 1 */}
                            {/* <button className='btn btn-danger' onClick={()=>{
                                this.setState({
                                    imgCar: './img/CarBasic/products/red-car.jpg'
                                })
                            }}>Red</button> */}

                            {/* Cách 2 */}
                            <button className='btn btn-danger' onClick={()=>{
                                this.changeColor('red')
                            }}>Red</button>
                            <button className='btn bg-dark text-white' onClick={()=>{
                                this.changeColor('black')
                            }}>Black</button>
                            <button className='btn btn-default' style={{backgroundColor:'#EEE'}} onClick={()=>{
                                this.changeColor('silver')
                            }} >Silver</button>
                            <button className='btn' style={{backgroundColor:'gray', color:'#000'}} onClick={()=>{
                                this.changeColor('steel')
                            }}>Steel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
