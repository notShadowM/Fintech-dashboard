import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name:"user",
  initialState:{
    name:"Anddy’s Makeover",
    id:"1234567",
    messages:[
      {avatar:"red",name:"James",msg:"i need something",date:"Jan 2 , 12:31pm"},
      {avatar:"blue",name:"Robinson",msg:"i don't need anything from you",date:"Feb 2 , 12:31pm"},
      {avatar:"orange",name:"Alaa",msg:"Hi how are you",date:"Jan 18 , 2:31pm"},
      {avatar:"green",name:"Ali",msg:"What is your name",date:"Oct 10 , 8:31pm"}
    ]
  },
  reducers:{

  }
})


export default userSlice.reducer