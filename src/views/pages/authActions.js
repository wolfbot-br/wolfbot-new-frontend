// import { toastr } from "react-redux-toastr";
import axios from "axios";
import ambiente from "../../config";
import functions from "../../utils/functions";

const login = data => {
  return dispatch => {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  };
};

//Firebase Auth - Realizará o cadastro do usuári
const signup = values => {
  const url = `${ambiente.URL.account}/signup`;

  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        dispatch({ type: "REGISTER_SUCCESS", payload: resp.data });
      })
      .catch(e => {
        // for (var i = 0; i < e.response.data.errors.length; i++) {
        //   toastr.error("Erro", e.response.data.errors[i].message);
        // }
      });
  };
};

// Firebase Auth - Action que é chamada quando o usuário clica no link para ativar a conta
const verifiyActiveAccount = code => {
  return dispatch => {
    axios
      .get(`${ambiente.URL.account}/active`, { headers: { code: code } })
      .then(resp => {
        dispatch({ type: "ACCOUNT_ACTIVE", payload: 1 });
      })
      .catch(e => {
        console.log(e.response.data.errors[0].code);
        if (e.response.data.errors[0].code === "emailIsActive") {
          dispatch({ type: "ACCOUNT_ACTIVE", payload: 2 });
        } else {
          dispatch({ type: "ACCOUNT_ACTIVE", payload: 3 });
        }
      });
  };
};

// Firebase Auth - Desloga o usuário
const logout = () => {
  return { type: "TOKEN_VALIDATED", payload: false };
};

// Firebase Auth - Verifica se o token do usuário é valido, se não é então desloga o usuário
const validateToken = token => {
  return dispatch => {
    if (token) {
      axios
        .get(`${ambiente.URL.account}/me`, {
          headers: { authorization: token }
        })
        .then(resp => {
          dispatch({ type: "TOKEN_VALIDATED", payload: true });
        })
        .catch(e => dispatch({ type: "TOKEN_VALIDATED", payload: false }));
    } else {
      dispatch({ type: "TOKEN_VALIDATED", payload: false });
    }
  };
};

// Firebase Auth - É chamado quando a página de login é carregada
const loadLoginPage = () => {
  return { type: "PAGE_LOGIN_UPDATED", payload: false };
};

// Firebase Auth - Recupera os dados da sessão do usuário no localStorage
const loadSession = () => {
  const USER_BOT = functions.loadLocalStorage("user_bot");
  return { type: "LOAD_SESSSION_USER", payload: USER_BOT };
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
  verifiyActiveAccount,
  logout,
  validateToken,
  loadLoginPage,
  loadSession,
  passwordRecovery,
  loadChangePasswordPage,
  changePassword
};
