import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import DashboardReducer from "./views/Dashboard/DashboardReducer";
import AuthReducer from "./views/pages/AuthReducer";
import PerfilReducer from "./views/Perfil/PerfilReducer";
import BacktestReducer from "./views/Backtest/BacktestReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  form: formReducer,
  auth: AuthReducer,
  profile: PerfilReducer,
  backtest: BacktestReducer
});
export default rootReducer;
