import { createSlice } from "@reduxjs/toolkit";
const userdata= createSlice({
    name:"userdata",
    initialState:{
        name:"",
        email:"",
        id:"",
        phone:"",
        img:""
    },
    reducers:{
        setUserData:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.id=action.payload._id;
            state.phone=action.payload.phone;
            state.img=action.payload.img;
        },
        removeUserData:(state)=>{
            state.name="";
            state.email="";
            state.id="";
            state.phone="";
        }
    }
})
export const {setUserData,removeUserData}=userdata.actions;
export default userdata.reducer;

export function fetchUser(token) {
    return async function fetchUserThunk(dispatch, getState) {
        try {
            const data ={token:token};
            const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const res = await pr.json();
            dispatch(setUserData(res));
        } catch (err) {
            console.log(err);
        }
    };
}