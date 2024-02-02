// import store from "@/state/store";

export default [
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../views/account/login.vue"),
  //   meta: {
  //     title: "Login",
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters["auth/loggedIn"]) {
  //         // Redirect to the home page instead
  //         next({ name: "default" });
  //         next();
  //       } else {
  //         // Continue to the login page
  //         next();
  //       }
  //     },
  //   },
  // },

  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("../views/account/register.vue"),
  //   meta: {
  //     title: "Register",
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters["auth/loggedIn"]) {
  //         // Redirect to the home page instead
  //         next({ name: "default" });
  //       } else {
  //         // Continue to the login page
  //         next();
  //       }
  //     },
  //   },
  // },

  // {
  //   path: "/forgot-password",
  //   name: "Forgot password",
  //   component: () => import("../views/account/forgot-password.vue"),
  //   meta: {
  //     title: "Forgot Password",
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters["auth/loggedIn"]) {
  //         // Redirect to the home page instead
  //         next({ name: "default" });
  //       } else {
  //         // Continue to the login page
  //         next();
  //       }
  //     },
  //   },
  // },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/pages/index.vue"),
  },
  {
    path: "/merchant",
    name: "merchant",
    meta: {
      title: "Merchant",
      authRequired: true,
    },
    component: () => import("../views/tables/basic"),
  },

  /**
   * route collecions management
   */
  {
    path: "/collection/payment",
    name: "collection-payment",
    meta: {
      title: "collection-payment",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/payment-chanel"),
  },
  {
    path: "/collection/benficiary-bank",
    name: "collection-benficiat-bank",
    meta: {
      title: "collection-benficiary",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/benficiary-bank"),
  },
  {
    path: "/collection/bank-script",
    name: "collection-bank-script",
    meta: {
      title: "collection-bank-script",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/bank-script"),
  },
  {
    path: "/collection/bank-card-management",
    name: "collection-bank-card-management",
    meta: {
      title: "collection-bank-card-management",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/bank-card-management"),
  },
  {
    path: "/collection/zalo-management",
    name: "collection-zalo-management",
    meta: {
      title: "collection-zalo-management",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/zalo-management"),
  },
  {
    path: "/collection/viettelPay-management",
    name: "collection-viettelPay-management",
    meta: {
      title: "collection-viettelPay-management",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/viettelPay-management"),
  },
  {
    path: "/collection/momo-management",
    name: "collection-momo-management",
    meta: {
      title: "collection-momo-management",
      authRequired: true,
    },
    component: () => import("../views/pages/collections/momo-management"),
  },

  /**
   * finance
   */
  {
    path: "/financial/reconciliation-daily",
    name: "financial-reconciliation-daily",
    meta: {
      title: "financial-reconciliation-daily",
      authRequired: true,
    },
    component: () => import("../views/pages/financials/reconciliation-daily"),
  },
  {
    path: "/financial/merchant-channel-report",
    name: "financial-merchant-channel-report",
    meta: {
      title: "financial-merchant-channel-report",
      authRequired: true,
    },
    component: () => import("../views/pages/financials/merchant-channel-report"),
  },
  {
    path: "/financial/merchant-report",
    name: "financial-merchant-report",
    meta: {
      title: "financial-merchant-report",
      authRequired: true,
    },
    component: () => import("../views/pages/financials/merchant-report"),
  },
  {
    path: "/financial/bank-card-statement",
    name: "financial-bank-card-statement",
    meta: {
      title: "financial-bank-card-management",
      authRequired: true,
    },
    component: () => import("../views/pages/financials/bank-card-statement"),
  },
  {
    path: "/financial/unknown-income",
    name: "financial-unknown-income",
    meta: {
      title: "financial-unknown-income",
      authRequired: true,
    },
    component: () => import("../views/pages/financials/unknown-income"),
  },

  /**
   * system setting
   */
  {
    path: "/system/setting",
    name: "system-setting",
    meta: {
      title: "system-setting",
      authRequired: true,
    },
    component: () => import("../views/pages/system/setting"),
  },
  {
    path: "/system/operation",
    name: "system-operation",
    meta: {
      title: "system-operation",
      authRequired: true,
    },
    component: () => import("../views/pages/system/operation"),
  },
  {
    path: "/system/VPN-list",
    name: "system-VPN-list",
    meta: {
      title: "system-VPN-list",
      authRequired: true,
    },
    component: () => import("../views/pages/system/vpn-list"),
  },
  {
    path: "/system/api-request-log",
    name: "system-api-request-log",
    meta: {
      title: "system-VPN-list",
      authRequired: true,
    },
    component: () => import("../views/pages/system/request-log.vue"),
  },
  {
    path: "/system/export-file",
    name: "system-export-file",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/system/export"),
  },
  {
    path: "/merchant/merchant-list",
    name: "merchant-merchant-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/merchant-list"),
  },
  {
    path: "/merchant/order-list",
    name: "merchant-order-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/order-list"),
  },
  {
    path: "/merchant/review-list",
    name: "merchant-review-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/review-list"),
  },
  {
    path: "/merchant/internal-charging-list",
    name: "merchant-internal-charging-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/internal-charging-list"),
  },
  {
    path: "/merchant/drop-order-list",
    name: "merchant-drop-order-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/drop-order-list"),
  },
  {
    path: "/merchant/withdrawn-list",
    name: "merchant-withdrawn-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/withdrawn-list"),
  },
  {
    path: "/merchant/callback-record",
    name: "merchant-callback-record",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/merchants/callback-record"),
  },
  {
    path: "/payment/payment-config",
    name: "payment-payment-config",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/payment/payment-config"),
  },
  {
    path: "/payment/pay-for-order",
    name: "payment-pay-for-order",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/payment/pay-for-order"),
  },
  {
    path: "/payment/callback-log",
    name: "payment-callback-log",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/payment/callback-log"),
  },
  {
    path: "/payment/automatic-script",
    name: "payment-automatic-script",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/payment/automatic-script"),
  },
  {
    path: "/payment/task-list",
    name: "payment-task-list",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/payment/task-list"),
  }, 
  {
    path: "/account",
    name: "account",
    meta: {
      title: "system-export-file",
      authRequired: true,
    },
    component: () => import("../views/pages/account/account"),
  },
];