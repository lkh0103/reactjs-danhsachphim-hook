import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

export default function DemoHookRedux(props) {

    const [state, setSate] = useState({
        name: '',
        content: ''
    })

    //Cách 2 dùng hook UseSelector tương tự như mapstatetoprops để lấy giá trị từ redux về
    let arrContent = useSelector(rootReducer => rootReducer.FaceBookAppReducer.arrContent);
    //UseDispatch thay thế cho props.dispatch cho hàm connect
    const dispatch = useDispatch();
    const sendContent = () => {
        const action = {
            type: 'ADD_CONTENT',
            content: state
        }
        //Đưa dữ liệu lên Redux
        dispatch(action);
    }

    const handleChangeInput = (event) => {
        let { name, value } = event.target;
        setSate({
            ...state, //Lưu giữu lại các giá trị cũ trước khi setState
            [name]: value
        })
        console.log('state', state);
    }

    console.log('arrContent', arrContent);
    //console.log(props.arrContent);

    return (
        <div className='contanier'>
            <h3>DemoHookRedux</h3>
            <div className='card'>
                <div className='card-header'>
                    {arrContent.map((cmt, index) => {
                        return <div key={index} className='row'>
                            <div className='col-2'>
                                <img src={`https://i.pravatar.cc/50?u=a${cmt.name}`} />
                            </div>
                            <div className='col-10'>
                                <h3 className='text-danger'>{cmt.name}</h3>
                                <p>{cmt.content}</p>
                            </div>
                        </div>
                    })}

                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <p>Name</p>
                        <input onChange={handleChangeInput} className='form-control' name='name' />
                    </div>
                    <div className='form-group'>
                        <p>Content</p>
                        <textarea onChange={handleChangeInput} className='form-control' name='content' />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success' onClick={() => {
                            sendContent()
                        }} >Send!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Cách 1: truyền thống của RCC
// const mapStateToProps = (rootReducer) => {
//     return {
//         arrContent: rootReducer.FaceBookAppReducer.arrContent
//     }
// }

// export default connect(mapStateToProps)(DemoHookRedux)