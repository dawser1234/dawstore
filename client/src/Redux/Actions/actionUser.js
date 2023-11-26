import { GET_ALLPRODUCTS_SUCCESS } from "../Const/constProduct"
import { ADD_USER_FAIL, ADD_USER_SUCCESS, GET_ALLUSER_FAIL, GET_ALLUSER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS,GET_CURRENT_SUCCESS,GET_CURRENT_FAIL,LOGOUT} from "../Const/constUser"
import axios from "axios"
export const addUser = (Body,navigate) => async (dispatch) => {
    try {
      const resUser= await axios.post('http://localhost:5000/api/user/register', Body )
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: resUser.data,
     })
    navigate('/login')
      }
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_USER_FAIL,
        payload: err.response.data
      });

     }}

     export const getusers = () => async (dispatch) => {
      try {
        const res = await axios.get("http://localhost:5000/api/user");
        
        dispatch({
          type: GET_ALLUSER_SUCCESS,
          payload: res.data,
        });
    
        console.log(res.data);
      } catch (error) {
        dispatch({
          type: GET_ALLUSER_FAIL,
          payload: error.response ? error.response.data : 'Error fetching users',
        });
    
        console.error('Error fetching users:', error);
      }
    };
    export const login = (body, navigate) => async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:5000/api/user/login", body)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
           switch (res.data.user.role){
              case "admin" : 
                   return navigate("/admin")
         
              default:
                   return navigate("/profil") }
      } 
         catch (err) {
            console.log(err);
            dispatch({ 
               type: LOGIN_FAIL,
                payload: err.response.data })
  
        }}
       // Assuming you have action types defined as GET_CURRENT_SUCCESS and GET_CURRENT_FAIL

export const getCurrent = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("http://localhost:5000/api/user/current", {
      headers: { Authorization: `Bearer ${token}` },
    });
console.log(res.data)
    if (res.data) {
      // Assuming res.data is an object representing user details
      dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data.User });
    } else {
      dispatch({ type: GET_CURRENT_FAIL, payload: "User data not available" });
    }
  } catch (error) {
    dispatch({ type: GET_CURRENT_FAIL, payload: error.message });
  }
};


export const logout = () => {
  return { type: LOGOUT } 
}





        