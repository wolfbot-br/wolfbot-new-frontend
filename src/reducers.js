import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from './_reducers/dashboardReducer'
import AuthReducer from './_reducers/authReducer'
import ConfiguracaoReducer from './_reducers/ConfiguracaoReducer'
import CarteiraReducer from './_reducers/CarteiraReducer'
import HistoricoReducer from './_reducers/HistoricoReducer'
import PerfilReducer from './_reducers/PerfilReducer'
import BacktestReducer from './_reducers/backtestReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    configuracao: ConfiguracaoReducer,
    carteira: CarteiraReducer,
    form: formReducer,
    auth: AuthReducer,
    historico: HistoricoReducer,
    profile: PerfilReducer,
    backtest: BacktestReducer
})
export default rootReducer