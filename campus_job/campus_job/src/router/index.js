import Vue from "vue";
import Router from "vue-router";

const Login = () => import("../views/Login.vue");
const MyContent = () => import("../views/MyContent.vue");
const Home = () => import("../components/Home.vue");
const Job = () => import("../views/Job.vue");
const HRInformation = () => import("../components/Job/HRInformation.vue");
const PublishJob = () => import("../components/Company/PublishJob.vue");
const SubmitResume = () => import("../views/SubmitResume.vue");
const VarifyJob = () => import("../components/Teacher/VerifyJob.vue");
const VarifyCompany = () => import("../components/Teacher/VerifyCompany.vue");
const Upload = () => import('../components/Upload.vue');

Vue.use(Router);

const companyRouter = [
  { 
    name:'companyHome',
    path: 'companyHome',
    component: PublishJob,
  }
];

const sutdentRouter = [
  {
    name: 'home',
    path: "home",
    component: Home
  }, 
  {
    path: 'job',
    component: Job,
    children: [
      {
        path: 'job',
        component: HRInformation
      }
    ]
  },
  {
    path: 'ask',
    component: SubmitResume
  },
  {
    path: 'upload',
    component: Upload
  }

];

const teacherRouter = [
  {
    path: 'verify',
    name: '岗位审核',
    component: VarifyJob
  },
  
  {
    path: 'verifyCompany',
    name: '公司审核',
    component: VarifyCompany
  },
];

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // {
    //   path: '/Luck',
    //   name: 'Luck',
    //   // 需要登录才能进入的页面可以增加一个meta属性
    //   meta: {
    //   requireAuth: true
    //   },
    //   component: ''
    // },
    // {
    //   path: '/content',
    //   component: Content
    // }

    {
      path: "/content",
      name: "content",
      component: MyContent,
      children: [
        ...sutdentRouter,
       
        ...companyRouter,
        ...teacherRouter,
      ]
    }
  ],
  mode: "history"
});

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (localStorage.getItem("username")) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      next({
        path: "/Register",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
