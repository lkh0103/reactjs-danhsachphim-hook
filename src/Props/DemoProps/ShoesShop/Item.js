import React, { Component } from 'react'

export default class Item
 extends Component {
  render() {
    let {prod} = this.props
    return (
      <div className='card'>
          <img src={prod.image} alt='...'/>

          <div className='card-body'>
            <p>{prod.name}</p>
            <p>{prod.price}$</p>
            <button style={{backgroundColor:'#000', color:'white'}}>ADD to card
            <i className='fa fa-card'></i>
            </button>
          </div>
      </div>
    )
  }
}
