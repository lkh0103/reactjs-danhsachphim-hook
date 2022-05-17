import React, { Component } from 'react'
import Example2 from './Example2'

export default class Example1 extends Component {
    // Các bước khi giải quyết bài toán ReactJS
    /*
        B1: Xây dựng layout hoàn chỉnh
        B2: Phân tích dữ liệu thay đổi (xác định state là j khi click vào đâu thì giao diện chỗ đó thay đổi)
        B3: Xây dựng xử lý đổi State
     */
    state = {
        fSize: 16 // Giá trị thay đổi giao diện là fontsize của chữ => fontsize là state
    }

    handleFontSize = (size) => {
        // Thay đổi state bằng hàm setState 
        this.setState({
            fSize: this.state.fSize + size
        })
    }

  render() {
    return (
      <div>
          <h3>Demo về state</h3>
          <h3>Ví dụ 1: thay đổi font chữ</h3>
          <p style={{fontSize:this.state.fSize}}>Đoạn văn bản....................</p>
          <button className='btn btn-outline-success mr-2'onClick={()=>{
              this.handleFontSize(1);
          }}>+</button>
          <button className='btn btn-outline-success' onClick={()=>{
              this.handleFontSize(-1);
          }}>-</button>
          <hr/>
          <h3>Ví dụ 2: Bài tập chọn xe</h3>
          <Example2/>
      </div>
    )
  }
}
