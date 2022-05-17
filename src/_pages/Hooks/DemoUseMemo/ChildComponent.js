import React, { memo } from 'react'

function ChildComponent(props) {
    console.log('comment');
    return (
        <div>
            {props.renderNotify()}
            <h3>Like: </h3>
            <textarea></textarea> <br />
            <button>Gửi</button>
            <br />
        </div>
    )
}

export default memo(ChildComponent);