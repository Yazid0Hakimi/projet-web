const initialState = {
  isLogged: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default signUpReducer;
