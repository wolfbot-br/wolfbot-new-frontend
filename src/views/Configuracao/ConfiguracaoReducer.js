const INITIAL_STATE = {
  configuracao: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CONFIGURACAO_FETCHED': {
      return { ...state, configuracao: action.payload.data.configuracao }
    }
    default:
      return state
  }
}
