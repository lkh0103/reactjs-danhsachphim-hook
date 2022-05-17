import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimLichChieu } from '../../redux/actions/PhimActions';

export default function Detail(props) {

    //console.log(props.location);
    const { chiTietPhimLichChieu } = useSelector(rootReducer => rootReducer.PhimReducer);

    console.log('Chi tiết phim', chiTietPhimLichChieu)

    const dispatch = useDispatch();
    useEffect(() => {
        //Call Api
        let maPhim = props.match.params.maPhim;
        const action = layThongTinPhimLichChieu(maPhim);
        //Dispatch gọi reduxthunk
        dispatch(action)
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src={chiTietPhimLichChieu.hinhAnh} alt={chiTietPhimLichChieu.tenPhim} height={300} width={150} />
                </div>
                <div className='col-4'>
                    <h3 className='display-4 text-success'>Tên phim: {chiTietPhimLichChieu.tenPhim}</h3>
                    <p>{chiTietPhimLichChieu.moTa}</p>
                </div>
            </div>
        </div>
    )
}
