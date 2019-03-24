import axios from "axios";
import ambiente from "../../config";

const loginRequest = async values => {
  const url = `${ambiente.URL.account}/login`;
  try {
    const loginResult = await axios.post(url, values);
    return loginResult;
  } catch (e) {
    return e.response;
  }
};

const validateToken = async token => {
  const url = `${ambiente.URL.api}/userinfo`;
  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: token
      }
    });
    return result.data;
  } catch (e) {
    return e.response.data;
  }
};

export { loginRequest, validateToken };
