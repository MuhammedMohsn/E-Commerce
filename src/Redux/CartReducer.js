import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    products: [],
    quantity: 0,
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total += action.payload.price;
        },
        delProduct: (state, action) => {
            let index = state.products.findIndex(product => product.id === action.payload)
            state.quantity -= 1;
            state.total -= state.products[index].price;
            state.products.splice(index, 1);
            // state.products.slice(0,index).concat(state.products.slice(index+1));
            // state.products.filter((_,id)=>{return id!==index})
    },
}})

export const { addProduct, delProduct } = cartSlice.actions
export default cartSlice.reducer