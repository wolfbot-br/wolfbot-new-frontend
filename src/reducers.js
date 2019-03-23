import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import DashboardReducer from './views/Dashboard/DashboardReducer';
import AuthReducer from './views/pages/AuthReducer';
import ConfiguracaoReducer from './views/Configuracao/ConfiguracaoReducer';
import CarteiraReducer from './views/Carteira/CarteiraReducer';
import HistoricoReducer from './views/Historico/HistoricoReducer';
import PerfilReducer from './views/Perfil/PerfilReducer';
import BacktestReducer from './views/Backtest/BacktestReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    configuracao: ConfiguracaoReducer,
    carteira: CarteiraReducer,
    form: formReducer,
    auth: AuthReducer,
    historico: HistoricoReducer,
    profile: PerfilReducer,
    backtest: BacktestReducer,
});
export default rootReducer;