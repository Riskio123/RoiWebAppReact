/**
 * /*!
 *
 * =========================================================
 * Black Dashboard React v1.2.1
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/black-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)
 *
 * Coded by Creative Tim
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

import Eurusd from "views/Strumenti-Dasboards/Eurusd";

var routes = [
  {
    path: "/eurusd",
    name: "EURUSD",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Eurusd,
    layout: "/admin",
  },
  {
    path: "/eurcad",
    name: "EURCAD",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Eurusd,
    layout: "/admin",
  },
];
export default routes;
