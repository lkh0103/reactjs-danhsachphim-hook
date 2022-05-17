import React, { useState } from 'react'
import BaiTapUseState from './BaiTapUseState'

export default function DemoUseState(props) {

    //class tương đương this.state = {like: 1}
    //let [state, setState] = useState({ like: 1 })
    let [like, setLike] = useState(1)

    return (
        <div className='container'>
            <div className='card w-25 mt-2'>
                <img src='https://i.pravatar.cc/200' alt='...' />
                <div className='card-body'>
                    <p className='text-danger'>
                        {like} ♥
                    </p>
                    <br />
                    <button className='btn btn-danger' onClick={() => {
                        setLike(like + 1)
                    }} >Like</button>
                </div>
            </div>
            <hr/>
            <h3>Bài tập chọn màu xe</h3>
            <BaiTapUseState/>
        </div>
    )
}
