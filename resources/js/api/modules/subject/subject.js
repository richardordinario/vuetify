import Api from '../../Api'

export default {
    add(form) {
        return Api().post('/api/teacher/subject', form)
    },
    get() {
        return Api().get('/api/teacher/subject')
    },
    paginate(page) {
        return Api().get('/api/teacher/subject?page='+ page)
    },
    show(suuid) {
        return Api().get('/api/teacher/subject/'+ suuid)
    },
    update(form) {
        return Api().put('/api/teacher/subject/'+ form.suuid, form)
    }
}
