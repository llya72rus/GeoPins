export default (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.payload
      };

    case 'IS_LOGGED_IN':
      return {
        ...state,
        isAuth: action.payload
      };

    case 'SIGNOUT_USER':
      return {
        ...state,
        currentUser: null,
        isAuth: false
      };

    case 'CREATE_DRAFT':
      return {
        ...state,
        draft: {
          latitude: 0,
          longitude: 0
        }
      };

    case 'UPDATE_DRAFT_LOCATION':
      return {
        ...state,
        draft: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude
        }
      };

    default:
      return state;
  }
};
