// import { toastr } from "react-redux-toastr";
import axios from "axios";
import ambiente from "../../config";

const login = data => {
  return dispatch => {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  };
};

const signup = data => {
  return dispatch => {
    dispatch({ type: "REGISTER_SUCCESS", payload: data });
  };
};

const verifyActiveAccount = async code => {
  return async dispatch => {
    try {
      const response = await axios.get(`${ambiente.URL.account}/active`, {
        headers: { code: code }
      });
      if (response.status === 200)
        dispatch({ type: "ACCOUNT_ACTIVE", payload: 1 });
    } catch (error) {
      if (
        error.response.data.errors[0].messages ===
        "Email já foi verificado pelo usuário"
      )
        dispatch({ type: "ACCOUNT_ACTIVE", payload: 2 });
      else dispatch({ type: "ACCOUNT_ACTIVE", payload: 3 });
    }
  };
};

const passwordRecovery = email => {
  alert("Não implementado");
  // return dispatch => {
  //   axios.post(`${api.ACCOUNT_WOLFBOT_URL}/passwordrecovery`, email)
  //     .then(resp => {
  //       dispatch({ type: 'PASSWORD_RECOVERY', payload: resp.data.valid }
  //         , toastr.success('Sucesso', 'O Email para redefinição de senha foi enviado!')
  //       )
  //     })
  //     .catch(e => toastr.error('Erro', e.response.data.errors.message))
  // }
};
const loadChangePasswordPage = parameter => {
  alert("Não implementado");
  // const objChangePassword = {
  //   changepasswordhash: parameter
  // }
  // return dispatch => {
  //   axios.post(`${api.ACCOUNT_WOLFBOT_URL}/changepasswordpermition`, objChangePassword)
  //     .then(resp => {
  //       const obj = {
  //         success: resp.data.success,
  //         hash: resp.data.hash
  //       }
  //       dispatch({ type: 'CHANGE_PASSWORD_CONFIRM', payload: obj }
  //         , toastr.success('Sucesso', 'Realize a alteração da senha'))
  //     })
  //     .catch(e => {
  //       dispatch({ type: 'CHANGE_PASSWORD_DENIED', payload: e.response.data })
  //     })
  // }
};

const changePassword = (values, changePasswordHash) => {
  alert("Não implementado");
  // const objChangePassword = {
  //   password: values.password,
  //   passwordConfirm: values.passwordConfirm,
  //   changePasswordHash: changePasswordHash
  // }
  // return dispatch => {
  //   axios.post(`${api.ACCOUNT_WOLFBOT_URL}/changepassword`, objChangePassword)
  //     .then(resp => {
  //       dispatch({ type: 'PASSWORD_CHANGED', payload: resp.data.success }
  //         , toastr.success('Sucesso', resp.data.message))
  //     })
  //     .catch(e => {
  //       for (var i = 0; i < e.response.data.errors.length; i++) {
  //         toastr.error('Erro', e.response.data.errors[i].message)
  //       }
  //     })
  // }
};

export {
  login,
  signup,
  verifyActiveAccount,
  passwordRecovery,
  loadChangePasswordPage,
  changePassword
};
