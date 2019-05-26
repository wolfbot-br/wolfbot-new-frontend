const INITIAL_STATE = {
  dashboard_reload: 0,
  dayResult: 0,
  overallResult: 0,
  totalizerOpenOrders: 0,
  totalizerClosedOrders: 0,
  operationsSummary: {
    totalAmountInvested: 0,
    totalLossProfitValue: 0,
    returnOfInvestiment: 0,
    totalLossProfitPercentage: 0
  },
  logs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
