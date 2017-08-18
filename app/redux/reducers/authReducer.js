const defaults = {
  authenticated: false,
  authenticating: false,
  hasError: false,
  errorMessage: ''
};

export default function auth(state = defaults, action) {
  switch(action.type) {
    case 'AUTHENTICATING':
      return {
        ...state,
        authenticating: true,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authenticating: false,
        authenticated: true
      };
    case 'SIGNIN_ERROR':
      const { errorMessage } = action;
      return {
        ...state,
        hasError: true,
        errorMessage: errorMessage
      };
    default:
      return state;
  }
}
