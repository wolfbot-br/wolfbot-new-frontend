import axios from 'axios'
import ambiente from '../../config'
import functions from '../../utils/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

const getBalance = async () => {
  const token = USER_BOT.authenticatedUser.accessToken;
  const url = `${ambiente.URL.api}/exchange/balance`;
  try {
    const configResult = await axios.get(url, { headers: { authorization: token } });
    return configResult;
  } catch (error) {
    return error.response;
  }
}

export {
  getBalance,
}
