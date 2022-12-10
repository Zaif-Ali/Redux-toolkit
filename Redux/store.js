import { configureStore } from '@reduxjs/toolkit'
import { iconslice } from './Slices/iconSlice'


// config the store 
const store= configureStore({
   reducer: {
      icon: iconslice.reducer
   }
})

// export default the store 
export default store;

