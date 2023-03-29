import { createSlice } from '@reduxjs/toolkit'

const initialState = {
loading:false,
data: {email:''},
error: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login:(state)=>{state.data ={email:"hemin@gmail.com"}},
    logout:(state) =>{state.data={language:''}}
  }
});

export const {login , logout} = userSlice.actions

export default userSlice.reducer