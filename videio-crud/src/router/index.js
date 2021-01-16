import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Video',
    component: () =>
        import ('../views/Videos/Index.vue'),
    children: [{
            path: '/',
            name: 'VideoList',
            component: () =>
                import ('../views/Videos/List.vue'),
        },
        {
            path: '/edit/:id',
            name: 'VideoEdit',
            component: () =>
                import ('../views/Videos/Edit.vue'),
        },
        {
            path: '/add',
            name: 'VideoAdd',
            component: () =>
                import ('../views/Videos/Add.vue'),
        },
        {
            path: '/detail/:id',
            name: 'VideoDetail',
            component: () =>
                import ('../views/Videos/Detail.vue'),
        },
    ]
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router