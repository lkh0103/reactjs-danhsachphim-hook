import React, { Component } from 'react'
import Item from './Item'

export default class ShoesShop extends Component {

  renderItem = () => {
    // this.props: là thuộc tính có sẵn của rcc có thể truy xuất bất kì phương thức nào
    let {arrProduct} = this.props;
    return arrProduct.map((product, index) => {
      return <div className='col-4' key={index}>
        <Item prod={product}/>
      </div>
    })
  }

  render() {
    return (
      <div className='row'>
        <div className='col-6'>
          {/* Phần menu */}
          <div className='d-flex align-items-center h-100'>
            <nav>
              <ul>
                <li>Home</li>
                <li>Shop</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='col-6'>
          <h3>Shoes Shop</h3>
          <div className='row'>
            {this.renderItem()}
            {/* <div className='col-4'>
              <Item />
            </div>
            <div className='col-4'>
              <Item />
            </div>
            <div className='col-4'>
              <Item />
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
