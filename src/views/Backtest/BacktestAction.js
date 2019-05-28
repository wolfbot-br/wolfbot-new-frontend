import axios from 'axios'
import ambiente from '../../config'
import functions from '../../utils/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

const postBacktest = async (values) => {
  const token = USER_BOT.authenticatedUser.accessToken;
  const url = `${ambiente.URL.api}/backtest/testConfiguration`;
  try {
    const backtestResult = await axios.post(url, values, { headers: { authorization: token } });
    return backtestResult;
  } catch (error) {
    return error.response;
  }
}

export {
  postBacktest,
}