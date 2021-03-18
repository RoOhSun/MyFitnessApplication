let initialState = {
    login1: false,
    username: '',
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return {
          ...state,
          login1: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default user;