const userKey = "user_bot";
const INITIAL_STATE = {
  user: "",
  email: "",
  emailVerified: false,
  tokenExpirationTime: null,
  refreshToken: null,
  accessToken: "",
  passwordRecovery: false,
  changePasswordPermition: true,
  changePasswordHash: "",
  passwordChanged: false,
  accountActive: false,
  emailIsActive: false,
  codeActiveAccountInvalid: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      const {
        authenticatedUser: {
          accessToken,
          email,
          emailVerified,
          expirationTime,
          refreshToken,
          uid
        }
      } = action.payload;
      return {
        ...state,
        user: uid,
        email,
        emailVerified,
        tokenExpirationTime: expirationTime,
        refreshToken,
        accessToken
      };
    case "ACCOUNT_ACTIVE":
      switch (action.payload) {
        case 1:
          return {
            ...state,
            accountActive: true,
            codeActiveAccountInvalid: false,
            emailIsActive: false
          };
        case 2:
          return {
            ...state,
            accountActive: false,
            codeActiveAccountInvalid: false,
            emailIsActive: true
          };
        case 3:
          return {
            ...state,
            accountActive: false,
            codeActiveAccountInvalid: true,
            emailIsActive: false
          };
        default:
          return {
            ...state,
            accountActive: false,
            codeActiveAccountInvalid: true,
            emailIsActive: false
          };
      }
    case "PASSWORD_RECOVERY":
      if (action.payload) {
        return { ...state, passwordRecovery: action.payload };
      }
      break;
    case "CHANGE_PASSWORD_CONFIRM":
      if (action.payload.success) {
        return {
          ...state,
          changePasswordPermition: true,
          changePasswordHash: action.payload.hash
        };
      } else {
        return {
          ...state,
          changePasswordPermition: false,
          changePasswordHash: null
        };
      }
    case "CHANGE_PASSWORD_DENIED":
      return {
        ...state,
        changePasswordPermition: false,
        changePasswordHash: null
      };
    case "PASSWORD_CHANGED":
      return { ...state, passwordChanged: true };
    default:
      return state;
  }
};
