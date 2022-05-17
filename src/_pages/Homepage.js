import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { demoAction, getApiPhimAction } from '../redux/actions/PhimActions';
export default function HomePage(props) {

  console.log('propsHome', props);
  //props.history: giúp điều hướng url


  //Lấy mảng phim từ redux về
  let { mangPhim } = useSelector(rootReducer => rootReducer.PhimReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //Dù gọi hàm hay không gọi hàm thì action api cũng phải là function (dispatch) {}
    const action = getApiPhimAction('GP04');
    dispatch(action);

  }, [])

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return <div className="col-4 mt-2" key={index}>
        <div className="card">
          <img height={350} onError={(e) => { e.target.src = `https://i.pravatar.cc/300?u=${phim.tenPhim}` }} src={phim.hinhAnh} alt="..." />
          <div className="card-body">
            <p>{phim.tenPhim}</p>
            <p style={{ height: 75 }}>{phim.moTa.length > 100 ? phim.moTa.substr(0, 100) + '...' : phim.moTa}</p>
            <NavLink to={`/detail/${phim.maPhim}`} className="btn btn-danger">MUA VÉ</NavLink>
            <br />
            <button className="btn btn-outline-danger" onClick={() => {
              props.history.push('/detail/' + phim.maPhim);
            }}>MUA VÉ</button>

          </div>

        </div>
      </div>
    })
  }
  return (
    <div className="container">
      <button className="btn btn-success" onClick={() => {
        //Chuyển hướng trang về trang chủ (props.history.push() dùng để chuyển hướng trang trong 1 sự kiện xử lý khác với NavLink)
        props.history.push('/');
        //Chuyển hướng về trang trước đó 
        props.history.goBack();
      }}>Go home</button>
      <h3>Danh sách phim</h3>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}


