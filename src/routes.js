
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Pricing from "./views/pages/Pricing";
import Lock from "./views/pages/Lock";

const routes = [
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
    path: "/lock-screen",
    name: "Lock",
    component: Lock,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
];

export default routes;
