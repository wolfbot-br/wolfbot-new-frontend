import axios from "axios";
import ambiente from "../../config";
import functions from "../../utils/functions";

const USER_BOT = functions.loadLocalStorage("user_bot");

const getUserProfile = async () => {
  const url = `${ambiente.URL.api}/profile/user`;
  try {
    const user = await axios.get(url, {
      headers: { authorization: USER_BOT.authenticatedUser.accessToken }
    });
    return user;
  } catch (e) {
    return e.response;
  }
};

const saveUserProfile = async values => {
  const url = `${ambiente.URL.api}/profile/save`;
  try {
    const saveResult = await axios.post(url, values, {
      headers: { authorization: USER_BOT.authenticatedUser.accessToken }
    });
    return saveResult;
  } catch (e) {
    return e.response;
  }
};

export { getUserProfile, saveUserProfile };
