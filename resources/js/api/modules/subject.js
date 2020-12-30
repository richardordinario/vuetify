import { get } from 'lodash'
import Api from '../Api'

export default {
    add(form) {
        return Api().post('/api/teacher/subject', form)
    },
    get() {
        return Api().get('/api/teacher/subject')
    },
    paginate(page) {
        return Api().get('/api/teacher/subject?page='+ page)
    }
}
