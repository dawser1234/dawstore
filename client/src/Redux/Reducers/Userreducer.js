const initialState = {
    users: [],
    currentuser: {},
    error: {}
  };
  
  export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // Add cases to handle different action types if needed
  
      default:
        return state;
    }
  };
  