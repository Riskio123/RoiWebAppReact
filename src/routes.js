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

import Dashboard from "views/Dashboard.js";
import Strumenti from "views/Strumenti.js";
import Videocorsi from "views/Videocorsi";
import Notifications from "views/Notifications.js";
import Esiti from "views/Esiti.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Eurusd from "views/Strumenti-Dasboards/Eurusd";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/esiti",
    name: "Esiti",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Esiti,
    layout: "/admin",
  },
  {
    path: "/strumenti",
    name: "Strumenti",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Strumenti,
    layout: "/admin",
  },
  {
    path: "/videocorsi",
    name: "Videocorsi",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Videocorsi,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/eurusd",
    name: "EURUSD",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Eurusd,
    layout: "/admin",
    isStrument: true,
  },
  {
    path: "/eurcad",
    name: "EURCAD",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Eurusd,
    layout: "/admin",
    isStrument: true,
  },
];
export default routes;
