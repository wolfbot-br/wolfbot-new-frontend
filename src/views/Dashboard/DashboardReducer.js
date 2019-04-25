const INITIAL_STATE = {
  roboLigado: false,
  dashboard_reload: 0,
  valueTeste: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LIGAR_ROBO":
      return { ...state, roboLigado: action.payload };
    case "DASHBOARD_UPDATED":
      return { ...state, valueTeste: state.valueTeste + action.payload };
    default:
      return state;
  }
};
