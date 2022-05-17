import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    renderTongDiem = () => {
        let { mangXucXac, banChon } = this.props;
        let tongDiem = mangXucXac.reduce((diem, xucXac, index) => {
            return diem += xucXac.diem;
        }, 0);
        let kq = 'Thua';
        if ((tongDiem > 11 && banChon) || (tongDiem <= 11 && !banChon)) {
            kq = 'Thắng';
        }
        return `${tongDiem} : ${kq}`;
    }
    render() {
        let { mangXucXac } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 text-center">
                        <div className="mt-5" style={{
                            cursor: 'pointer'
                        }} onClick={() => {
                            this.props.datCuoc(true)
                        }}>
                            <span className="text-white display-4 p-5 bg-danger">TÀI</span>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div>
                            <img src={mangXucXac[0].hinhAnh} width={50} height={50} alt="..." />
                            <img src={mangXucXac[1].hinhAnh} width={50} height={50} alt="..." />
                            <img src={mangXucXac[2].hinhAnh} width={50} height={50} alt="..." />
                        </div>
                        <div className="mt-2 text-center display-4">
                            {this.renderTongDiem()}
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="mt-5" style={{
                            cursor: 'pointer'
                        }} onClick={() => {
                            this.props.datCuoc(false)
                        }}>
                            <span className="text-white display-4 p-5 bg-danger">XỈU</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (banChon) => {
            console.log('banChon', banChon);
            //Tạo dữ liệu đưa lên redux
            const action = {
                type: 'DAT_CUOC',
                banChon
            }
            //Sử dụng hàm dispatch đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
        banChon: rootReducer.gameXucXacReducer.banChon
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);