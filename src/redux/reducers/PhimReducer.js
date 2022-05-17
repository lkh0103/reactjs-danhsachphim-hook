

const stateDefault = {
    mangPhim: [
        // { maPhim: 1, tenPhim: 'Xmen', hinhAnh: 'https://picsum.photos/id/1/200/200', moTa: 'AAA' },
        // { maPhim: 2, tenPhim: 'End Game', hinhAnh: 'https://picsum.photos/id/1/200/200', moTa: 'AAA' }
    ],
    chiTietPhimLichChieu: {

    }
}

export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_API_PHIM': {
            state.mangPhim = action.data;
            return { ...state }
        }
        case 'GET_CHI_TIET_PHIM_LICH_CHIEU': {
            state.chiTietPhimLichChieu = action.data;
            return { ...state }
        }
        default: return { ...state }
    }
}