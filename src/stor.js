

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/redux";


export default configureStore({
  reducer: {
    
    user: userSlice,
    
  },
});
