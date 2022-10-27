const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    text:'',
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item._id !== action.payload);
        },
        edit(state, action) {
            return {...state,text:state.cart[action.payload]}
        },
    },
});

export const { add, remove, edit } = cartSlice.actions;
export default cartSlice.reducer;