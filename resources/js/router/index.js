import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../components/views/auth/Login.vue'
import SubjectTeacher from '../components/views/teacher/Subject.vue'

const routes = [
    { path: '/login', component: Login, name: 'login' },

    //teacher route
    { path: '/subject', component: SubjectTeacher, name: 'subjectteacher' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;