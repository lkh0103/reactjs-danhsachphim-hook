import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
        this.timeout = {}
        console.log('contructor child')
    }

    static getDerivedStateFormProps(newProps, currentState) {
        console.log('getDerivedStateFormProps child')
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     //Lần 1: this.props.like = 1
    //     //Lần 2: newProps.like = 2 nhưng this.props.like = 1
    //     console.log('newProps', newProps)
    //     console.log('thisProps', this.props)
    //     if (this.props.like !== newProps.like) {
    //         console.log('shouldComponentUpdate child')
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log('renderChild')
        return (
            <div>
                <h1 className='bg-dark text-white p-5'>Child component: {this.props.object.like} like</h1>
            </div>
        )
    }

    componentDidUpdate(preProps, preState) {
        console.log('componentDidUpdate child')
    }

    componentDidMount() {

        this.timeout = setInterval(() => {
            console.log('hàm chạy ngầm')
        }, 1000);
        console.log('componentDidMount child')
    }

    componentWillUnmount() {
        //Component mất đi sẽ chạy lifecycle này
        clearInterval(this.timeout);
    }
}
