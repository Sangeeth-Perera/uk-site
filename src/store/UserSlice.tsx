import { createSlice } from '@reduxjs/toolkit';


const initialState: any = {
    user : {},
    token : ''
};

export const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        
    }
})

// export const calculatePriceAsync = (itemCode: string, quantity: number, cartQuantity: number, operator: string): AppThunk => async dispatch => {
//     try {
//         let quantityVar: number;
//         if (operator == 'remove') {
//             quantityVar = cartQuantity - 1;
//         }
//         else if (operator == 'add-single-unit') {
//             quantityVar = cartQuantity + 1
//         }
//         else {
//             quantityVar = cartQuantity + quantity;
//         }
//         if (quantityVar >= 0) {
//             const response = await getItemTotal(itemCode, quantityVar);
//             let itemObj = {
//                 id: itemCode,
//                 count: quantityVar,
//                 price: response.data
//             }
//             dispatch(addCartItem(itemObj));
//             dispatch(calculateTotal());
//             if (operator == "Add") {
//                 toast("Item Added to Cart", { className: "toast-success-container" });
//             }
//         }
//     } catch (error) {
//         toast(error, { className: "toast-error-container" });
//     }
// };

export const { setUser, setToken } = User.actions;


export default User.reducer;
