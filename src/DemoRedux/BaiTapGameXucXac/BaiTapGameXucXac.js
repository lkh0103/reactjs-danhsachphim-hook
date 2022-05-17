import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='gameXucXac'>
                <h1 className='display-4 text-center pt-5'>BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
