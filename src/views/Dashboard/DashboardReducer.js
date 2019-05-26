const INITIAL_STATE = {
  roboLigado: false,
  dashboard_reload: 0,
  dayResult: 0,
  openOrdersTableResult: {
    arrayOpenOrders: []
  },
  operationsSummaryResult: {
    totalInvested: "0",
    investimentReturn: "0",
    profit: "0",
    profitPercentual: "0"
  },
  overallResult: "0",
  totalizerResult: {
    openOrders: "0",
    closeOrders: "0"
  },
  totalAssets: "0",
  logs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LIGAR_ROBO":
      return { ...state, roboLigado: action.payload };
    case "DASHBOARD_UPDATED":
      console.log(action.payload.logs);
      if (!action.payload.logs) {
        const dataDashboard = {
          dayResult: action.payload.dayResult
            ? action.payload.dayResult + state.dayResult
            : state.dayResult,
          overallResult: action.payload.overallResult
            ? action.payload.overallResult
            : state.overallResult,
          totalizerOpenOrders: action.payload.totalizerOpenOrders
            ? action.payload.totalizerOpenOrders
            : state.totalizerOpenOrders,
          totalizerClosedOrders: action.payload.totalizerClosedOrders
            ? action.payload.totalizerClosedOrders
            : state.totalizerClosedOrders,
          operationsSummary: action.payload.operationsSummary
            ? action.payload.operationsSummary
            : state.operationsSummary
        };
        return { ...state, ...dataDashboard };
      } else {
        return { ...state, logs: [...state.logs, action.payload.logs] };
      }

    case "GET_DASHBOARD":
      return {
        ...state,
        openOrdersTableResult: action.payload.openOrdersTableResult,
        operationsSummaryResult: action.payload.operationsSummaryResult,
        overallResult: action.payload.overallResult,
        totalizerResult: action.payload.totalizerResult,
        totalAssets: action.payload.totalAssets,
        dayResult: action.payload.dayResult
      };

    default:
      return state;
  }
};
