const stateDefault = {
    banChon: true, //True: tài - false: xỉu
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/2.png', diem: 2 },
        { hinhAnh: './img/gameXucXac/6.png', diem: 1 },
    ]
}

export const gameXucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state }
        }
        case 'PLAY_GAME': {
            let mangXXNN = [];
            //Random 3 số ngẫu nhiên
            for (let i = 0; i < 3; i++) {
                //Random 
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra object xúc xắc ngẫu nhiên
                let xucXacNN = { hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien };
                //Mỗi lần random => Đưa xúc xắc ngẫu nhiên vào mảng
                mangXXNN.push(xucXacNN);
            }
            //Cập nhật lại state redux
            state.mangXucXac = mangXXNN;
            //Cập nhật số bàn chơi
            state.tongSoBanChoi += 1;
            //Cập nhật số bàn thắng
            //Tính tổng điểm xúc xắc
            let tongDiem = state.mangXucXac.reduce((diem, xucXac, index) => {
                return diem += xucXac.diem;
            }, 0);
            //Xét điều kiện tổng điểm và kết quả đặt cược
            if ((tongDiem > 11 && state.banChon === true) || (tongDiem <= 11 && state.banChon === false)) {
                state.soBanThang += 1;
            }

            return { ...state }
        }
        default: return { ...state };
    }

}