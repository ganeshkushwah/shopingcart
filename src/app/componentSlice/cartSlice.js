
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items:[], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)

      let a = state.items.some(e=>
        e.id == action.payload.id
      )
    
      if(a == false){

        state.items.push(action.payload); 
      }
    },

     removeFromcart: (state, action) =>{
      let a = state.items.findIndex((e)=>
        e.id == action.payload.id
      )
      state.items.splice(a,1)
      // let b = state.items.splice(e=>
      //   e.id == action.payload.id
      // )
      
                      
     },
    
      incrementQuantity: (state, action) => {
        console.log(action.payload)
        // const item = state.items.find((item) => item.id === itemId);
        // if (item) {
        //   item.quantity += 1;
        // }
      },
      decrementQuantity: (state, action) => {
        const { itemId } = action.payload;
       
        const item = state.items.find((item) => item.id === itemId);
        if (item && item.quantity > 0) {
          item.quantity -= 1;
        }
      },
    },
    });
    
    
 

export const { addToCart,incrementQuantity, decrementQuantity,removeFromcart } = cartSlice.actions;
export default cartSlice.reducer;




