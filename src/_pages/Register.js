import React from 'react'

export default function Register(props) {


    
    return (
        <div>
            <button className="btn btn-success" onClick={()=>{
                
                props.history.goBack();
            }}> {'<<<'} Trở về </button>
            <h3>Đăng ký</h3>

        </div>
    )
}
