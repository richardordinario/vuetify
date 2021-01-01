import Api from '../../Api'

export default {
    add(form) {
        return Api().post('/api/teacher/instructional',{ form: JSON.stringify(form)})
    },
   
}
