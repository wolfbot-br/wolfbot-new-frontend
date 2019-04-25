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

const deleteAccount = response => {
  return dispatch => {
    dispatch({ type: "DELETED_ACCOUNT", payload: response.data });
  };
};

export { getUser, saveUser, changePassword, deleteAccount };
