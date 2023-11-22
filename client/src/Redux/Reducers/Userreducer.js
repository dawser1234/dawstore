import { GET_ALLUSER_SUCCESS, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL } from "../Const/constUser"
const initialState = {
    users: [],
    currentuser: {},
    error: {}
  };
  
  export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_FAIL:
            return { ...state, errors: payload,errors:payload }
      // Add cases to handle different action types if needed
      case GET_ALLUSER_SUCCESS:
            return {...state,users:payload}
            case LOGIN_SUCCESS:
              localStorage.setItem("token", payload.token)
              return { ...state, currentUser: payload.user ,errors:{}}
          case LOGIN_FAIL:
              return {...state,errors:payload}
              case GET_CURRENT_SUCCESS:
                return { ...state, currentUser: payload.user }
  
      default:
        return state;
    }
  };
  