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

export { loginRequest };
