import React,{useState} from 'react'
import Login from '../Login';
import Register from '../Register';
import Modal from './Modal';
import {useDispatch} from 'react-redux'
export default function HOC(props) {
    const [modalComponent,setModalComponent] = useState(<Register />);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h3>Demo hoc</h3>
            <button data-toggle="modal" data-target="#modelId">
                open Modal
            </button>

            {/* <Modal giaoDienFunction={modalComponent} title='cybersoft' giaoDien={<div>
                ahihi
            </div>} /> */}

            <button data-toggle="modal" data-target="#modelId" className='btn btn-outline-success' onClick={()=>{
                // setModalComponent(<Login />)
                dispatch({
                    type:'OPEN_FORM_DANG_NHAP',
                    Component: Login,
                    onSubmit:()=>{
                        console.log('Đăng nhập click !')
                    }
                })

            }}>Đăng nhập</button>
            <br/> <br />
            <button data-toggle="modal" data-target="#modelId" className='btn btn-outline-success' onClick={()=>{
                // setModalComponent(<Register />)
                dispatch({
                    type:'OPEN_FORM_DANG_KY',
                    Component: Register,
                    onSubmit:()=>{
                        console.log('Đăng ký click !')
                    }
                })

            }}>Đăng ký</button>  
        </div>
    )
}
