import React, { Component } from 'react'
import Child from './Child';

export default class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            object: {
                like: 1
            }
        }
        console.log('contructor')
    }

    static getDerivedStateFormProps(newProps, currentState) {
        console.log('getDerivedStateFormProps')
        return null;
    }

    render() {
        console.log('render')
        return (
            <div className='container'>
                {this.state.object.like > 3 ? '' :
                    <Child object={this.state.object} />}
                <h1>Like: {this.state.object.like}</h1>
                <button className='btn btn-outline-danger' onClick={() => {
                    let newObject = { ...this.state.object };
                    newObject.like += 1;
                    this.setState({
                        object: newObject
                    })
                }}>setLikeObject</button>
                <h3>Number:{this.state.number}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>

                <button className='btn btn-danger' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>+ like</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
}
