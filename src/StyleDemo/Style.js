import React, { Component } from 'react'
//  Cách 1: Import CSS cho toàn dự án
import './StyleDemo.css'

// Cách 2: Import Css cho từng Component riêng
import style from './StyleDemo.module.css'

export default class Style extends Component {
  render() {
    return (
      <div>
          <h1>Cach 1</h1>
          <p className='color-red'>Demo Css</p>
          <hr/>
          <h1>Cach 2: Import CSS module</h1>
          <p className={style[`color-green`]}>Hello</p>

          <p className={style.colorGreen}>Heloo Css</p>

          <p className={`${style.colorGreen} ${style.fontbold}`}>Green Bold</p>
          <hr/>
          <h1>Cach 3: Import Css truc tiep</h1>            
          <p style={{backgroundColor:'black', color:'green'}}>ABC</p>
      </div>
    )
  }
}
