const getUser = response => {
  return dispatch => {
    dispatch({ type: "GET_USER_PROFILE", payload: response.data });
  };
};

const saveUser = response => {
  return dispatch => {
    dispatch({ type: "SAVE_USER_PROFILE", payload: response.data });
  };
};

const changePassword = response => {
  return dispatch => {
    dispatch({ type: "PASSWORD_CHANGED", payload: response.data });
  };
};

export { getUser, saveUser, changePassword };
