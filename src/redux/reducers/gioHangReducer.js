//Giá trị mặc định ban đầu
const stateDefault = []

export const gioHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = state;
            //Kiểm tra sp có trong giỏ hàng chưa
            let spGH = gioHang.find(sp => sp.maSP === action.spGH.maSP);
            if (spGH) {
                spGH.soLuong += 1;
            } else {
                gioHang.push(action.spGH);
            }
            //Trả về state mới => giao diện mới cập nhật
            //Immutable: tính chất bất biến của redux
            console.log('gioHang', gioHang)
            return [...gioHang]; //Trả về state sau khi xử lý
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = state.filter(sp => sp.maSP !== action.maSP);
            return [...gioHangCapNhat]
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];

            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSP);
            if (spGH) {
                spGH.soLuong += action.soLuong
                if (spGH.soLuong < 1) {
                    spGH.soLuong -= action.soLuong;
                    alert('Số lượng tối thiểu là 1')
                }
            }
        }
            return [...state]
    }

    return state;
}