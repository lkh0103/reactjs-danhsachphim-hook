import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome/HeaderHome';


export const HomeTemplate = (props) => {

    const [widthHeight, setWidthHeight] = useState({
        width: window.innerWidth, //Độ phân giải màn hình mặc định
        height: window.innerHeight //
    });

    useEffect(() => {

        //Khai báo sự kiện thay đổi kích thước màn hình
        window.onresize = () => {
            //Set lại độ phân giải sau khi co giãn màn hình
            setWidthHeight({
                width: window.innerWidth, //Độ phân giải màn hình mặc định
                height: window.innerHeight //
            })
        }
        window.onload = () => {
            //Set lại độ phân giải sau khi co giãn màn hình
            setWidthHeight({
                width: window.innerWidth, //Độ phân giải màn hình mặc định
                height: window.innerHeight //
            })
        }
        return () => {
            //Huỷ đăng ký sự kiện khi chuyển qua template khác
            window.removeEventListener('onresize');
            window.removeEventListener('onload');
        }
    }, [])

    let { Component, path } = props;

    const renderComponent = (propsRoute) => {
        //Nếu có component Mobile và width nhỏ hơn 765 thì mới render ra component mobile
        if (widthHeight.width < 765 && props.MobileComponent) {
            return <props.MobileComponent {...propsRoute} />
        }

        return <Component {...propsRoute} />
    }
    return <Route exact path={path} render={(propsRoute) => {

        return <div>
            <HeaderHome />
            {renderComponent(propsRoute)}
        </div>
    }} />
}