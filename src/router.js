import VueRouter from "vue-router";
import store from "./store";
import ErrorPage from "./pages/ErrorPage";

const HomePage = () => import("./pages/HomePage");
const RegistrationPage = () => import("./pages/RegistrationPage");
const LoginPage = () => import("./pages/LoginPage");
const ApartmentPage = () => import("./pages/ApartmentPage");
const MyOrdersPage = () => import("./pages/MyOrdersPage");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homepage" });
    }
  }

  next();
});

export default router;
