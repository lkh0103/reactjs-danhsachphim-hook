import { applyMiddleware, combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { BTQuanLyNguoiDungReducer } from "./reducers/BTQuanLyNguoiDungReducer";
import { FaceBookAppReducer } from "./reducers/FaceBookAppReducer";
import { PhimReducer } from "./reducers/PhimReducer";
//Add Middleware
import reduxThunk from 'redux-thunk'
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { ModalReducer } from "./reducers/ModalReducer";
const rootRecuder = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)
    stateGioHang: gioHangReducer,
    gameXucXacReducer,
    BTQuanLyNguoiDungReducer,
    FaceBookAppReducer,
    PhimReducer,
    QuanLyNguoiDungReducer,
    ModalReducer
});

export const store = createStore(rootRecuder, applyMiddleware(reduxThunk));