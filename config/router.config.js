export default [
  // app
  {
    path: '/',
    component: '../layouts/MainLayout',
    routes: [
      // 首页
      { path: '/', redirect: './home' },
      { path: '/home', component: './Home/Home' },
      {
        component: '404',
      },
    ],
  },
];
