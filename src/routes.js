import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Pricing from "./views/pages/Pricing";
import Profile from "./views/Perfil/User";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import Configuracao from "./views/Configuracao/Configuracao";
import Backtest from "./views/Backtest/Backtest";
import Estatisticas from "./views/Estatisticas/Estatisticas";
import Historico from "./views/Historico/Historico";
import EmailSendActiveAccount from "./views/pages/EmailSendActiveAccount";
import ActiveAccount from "./views/pages/ActiveAccount";
import Page404 from "./views/pages/Page404";
import DeletedAccount from "./views/pages/DeletedAccount";

const routes = [
  // Auth Routes
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/emailsendactiveaccount",
    name: "EmailSendActiveAccount",
    component: EmailSendActiveAccount,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/activeaccount",
    name: "ActiveAccount",
    component: ActiveAccount,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/page404",
    name: "Page404",
    component: Page404,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/deletedaccount",
    name: "DeletedAccount",
    component: DeletedAccount,
    layout: "/auth",
    invisible: true
  },
  // Admin Routes
  {
    path: "/profile",
    name: "Perfil",
    component: Profile,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/carteira",
    name: "Carteira",
    icon: "tim-icons icon-money-coins",
    component: Carteira,
    layout: "/admin"
  },
  {
    path: "/configuracao",
    name: "Configuração",
    icon: "tim-icons icon-settings-gear-63",
    component: Configuracao,
    layout: "/admin"
  },
  {
    path: "/backtest",
    name: "Backtest",
    icon: "tim-icons icon-bulb-63",
    component: Backtest,
    layout: "/admin"
  },
  {
    path: "/estatisticas",
    name: "Estatísticas",
    icon: "tim-icons icon-chart-bar-32",
    component: Estatisticas,
    layout: "/admin"
  },
  {
    path: "/historico",
    name: "Histórico",
    icon: "tim-icons icon-single-copy-04",
    component: Historico,
    layout: "/admin"
  }
];

export default routes;
