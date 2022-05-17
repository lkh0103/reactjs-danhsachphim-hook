import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

export default class BaiTapComponent extends Component {
  
  
    render() {
        return (
            <div>
                <Header/>
                <div className='row'>
                    <div className='col-8 m-0 p-0'>
                        <Navigation/>
                    </div>
                    <div className='col-4 m-0 p-0'>
                        <Content/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
  }
}
