let initialState = {
    login: false,
    username: '',
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return {
          ...state,
          login: action.payload,
        };
  
      case 'SET_USERNAME':
        return {
          ...state,
          login: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default user;