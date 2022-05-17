import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick =() =>{
        alert('Hello Huy đẹp trai')
    }

    handleClick1 = (name) =>{
        alert(`Hello ! ${name}`)
    }

    showMessage = (mess) =>{
        alert(mess)
    }

  render() {
    return (
      <div className='container'>
          <div>Handle event</div>
          <button id='btn' onClick={this.handleClick}>Click me!</button>
          <br/>
          <br/>
          <button className='btn btn-success' onClick={() =>{
              alert ('Hello anh dep trai')
          }}>Show Message</button>
          <hr/>

          {/* cách 1 học cho biết */}
          <button id='btn' onClick={this.handleClick1.bind(this,'Huy')}>Click</button>
          
          {/* cách 2 sử dụng nhiều, ghi nhớ cách 2 */}
          <button id='btn' onClick={() =>{
              this.showMessage('Hello anh Huy')
          }}>Show mwss</button>
      </div>
    )
  }
}
