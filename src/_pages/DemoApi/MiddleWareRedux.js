import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiPhimAction } from '../../redux/actions/PhimActions';

export default function MiddleWareRedux() {

    const { mangPhim } = useSelector(rootReducer => rootReducer.PhimReducer);

    const dispatch = useDispatch();

    console.log('mangPhim', mangPhim)

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={phim.hinhAnh} />
                    <div className='card-body'>
                        <p> {phim.tenPhim} </p>
                        <p> {phim.moTa} </p>
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        //Phải gọi api thì mới có dữ liệu -> redux
        // let promise = axios({
        //     url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // })
        // promise.then((result) => {
        //     //Tạo ra 1 action là 1 object có type và data (data là dữ liệu phim sau khi lấy về từ api)
        // });
        /*
            2 loại action 
            + loại 1: action là object {type:'',data}
            + loại 2: function (dispatch)
        */
        // const action = {
        //     type:'GET_API_PHIM',
        //     data: result.data.content
        // }

        // const action = (dispatch)=> {
        //     //Gọi api .... 
        // }
        
        const action = getApiPhimAction('GP04');
        dispatch(action);
    }, [])

    return (
        <div className="container">
            <h3>Middle ware redux</h3>
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}
