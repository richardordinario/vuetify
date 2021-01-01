import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../components/views/auth/Login.vue'

import Subject from '../components/views/teacher/subject/Subject.vue'
import SubjectDetails from '../components/views/teacher/subject/SubjectDetails.vue'

const routes = [
    { path: '/login', component: Login, name: 'login' },

    //teacher route
    { path: '/subject', component: Subject, name: 'subject' },
    { path: '/subject/details/:suuid', component: SubjectDetails, name: 'subjectdetails'},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;