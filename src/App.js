// import logo from './logo.svg';
// import './App.css';
// import Nav from './components/Nav';
// import Card from './components/Card';
// import Profile from './components/Profile';
// import BaiTapComponent from './components/BaiTapComponent/BaiTapComponent';
// import BaiTapVeNha from './components/BaiTapVeNha/BaiTapVeNha';
// import Databinding from './databinding/Databinding';
// import HandleEvent from './handleEvent/HandleEvent';
// import StateDemo from './State/StateDemo';
// import Style from './StyleDemo/Style';
// import Example1 from './State/Example1';
// import RenderWithMap from './RenderWithMap/RenderWithMap';
// import DemoProps from './Props/DemoProps/DemoProps';
// import DanhSachSanPham from './Props/DanhSachSanPham/DanhSachSanPham';
// import BaiTapGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
// import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
// import BaiTapQuanLyNguoiDung from './ReactForm/BaiTapQuanLyNguoiDung';
// import Lifecycle from './Lifecycle/Lifecycle';



import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import About from "./_pages/About";
import Contact from "./_pages/Contact";
import ClassApi from "./_pages/DemoApi/ClassApi";
import FuncApi from "./_pages/DemoApi/FuncApi";
import MiddleWareRedux from "./_pages/DemoApi/MiddleWareRedux";
import Detail from "./_pages/Detail/Detail";
import HOC from "./_pages/HOC/HOC";
import Homepage from "./_pages/Homepage";
import DemoHookRedux from "./_pages/Hooks/DemoHookRedux/DemoHookRedux";
import DemoUseEffect from "./_pages/Hooks/DemoUseEffect";
import DemoUseMemo from "./_pages/Hooks/DemoUseMemo/DemoUseMemo";
import DemoUseState from "./_pages/Hooks/DemoUseState";
import Login from "./_pages/Login";
import DemoUseRef from "./_pages/Hooks/UseRef/DemoUseRef";
import Register from "./_pages/Register";
//Cấu hình history chuyển hướng trang
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Modal from "./_pages/HOC/Modal";
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import HomeMoBile from './_pages/Home/HomeMoBile';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <HeaderHome /> */}
      <Modal />
      <Switch>
        <HomeTemplate exact path="/home" Component={Homepage} MobileComponent={HomeMoBile} />
        <HomeTemplate exact path="/about" Component={About} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <UserTemplate exact path='/login' Component={Login} />
        <UserTemplate exact path='/register' Component={Register} />
        <HomeTemplate exact path="/usestate" Component={DemoUseState} />
        <HomeTemplate exact path='/useeffect' Component={DemoUseEffect} />
        <HomeTemplate exact path='/usememo' Component={DemoUseMemo} />
        <HomeTemplate exact path='/useref' Component={DemoUseRef} />
        <HomeTemplate exact path='/hookredux' Component={DemoHookRedux} />
        <HomeTemplate exact path='/functionapi' Component={FuncApi} />
        <HomeTemplate exact path='/classapi' Component={ClassApi} />
        <HomeTemplate exact path='/middleware' Component={MiddleWareRedux} />
        <HomeTemplate exact path='/detail/:maPhim' Component={Detail} />
        <HomeTemplate exact path='/hoc' Component={HOC} />
        {/* Trang chủ đc load mặc định */}
        <HomeTemplate exact path="/" Component={Homepage} MobileComponent={HomeMoBile} />
      </Switch>

      {/* Cách 2 */}
      {/* <Route path='/demo' render={(propsRoute) => {
        return <div>
          ABC <br />
          <Homepage {...propsRoute} />
        </div>
      }} /> */}
    
    </Router>
  );
}
// <div className="App">
//   {/* <Nav />
//   <Card />
//   <Profile /> */}
//   {/* <BaiTapComponent /> */}
//   {/* <BaiTapVeNha/> */}
//   {/* <Databinding/> */}
//   {/* <HandleEvent/> */}
//   {/* <StateDemo/> */}
//   {/* <Style/> */}
//   {/* <Example1/> */}
//   {/* <RenderWithMap/> */}
//   {/* <DemoProps/> */}
//   {/* <DanhSachSanPham/> */}
//   {/* <BaiTapGioHangRedux/> */}
//   {/* <BaiTapGameXucXac /> */}
//   {/* <BaiTapQuanLyNguoiDung/> */}
//   {/* <Lifecycle/> */}
// </div>


export default App;
