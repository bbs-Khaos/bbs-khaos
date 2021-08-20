import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "topic",
        name: "Topic",
        meta: {
          title: "话题"
        },
        component: () => import("../views/Topic/Topic.vue")
      },
      {
        path: "quiz",
        name: "Quiz",
        meta: {
          title: "提问"
        },
        component: () => import("../views/Quiz/Quiz.vue")
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "关于",
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
  } else {
    document.title = process.env.VUE_APP_TITLE;
  }
  next();
})

export default router
