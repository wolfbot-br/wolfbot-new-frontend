import axios from 'axios'
import ambiente from '../../config'
import functions from '../helpers/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

export function salvarConfiguracao(values) {
  const url = `${ambiente.URL.api}/configuracao/salvar`
  try {
    const configResult = axios.post(url, values, { headers: { authorization: USER_BOT.Token } })
    return configResult
  } catch (error) {
    return error.response
  }
}

export function updateConfiguracao(values) {
  const url = `${ambiente.URL.api}/configuracao/alterar/${USER_BOT.id}`
  try {
    const configResult = axios.post(url, values, { headers: { authorization: USER_BOT.Token } })
    return configResult
  } catch (error) {
    return error.response
  }
}
