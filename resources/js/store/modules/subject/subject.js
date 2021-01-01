import Subject from '../../../api/modules/subject/subject'

const state = {
    subjects: [],
    snackstatus: false,
    form: {
        id: null,
        suuid: null,
        subject: null,
        grade: null,
        description: null,
    },
    link:[
        {
            text: 'Subject',
            disabled: false,
            href: '/subject',
        },
    ],
    page: 1,
    total: 0
}

const getters = {
    subjects(state) {
        return state.subjects
    },
    page(state) {
        return state.page
    },
    total(state) {
        return state.total
    },
    subject_form: state => state.form,
    getsnack: state => state.snackstatus,
    getLink: state => state.link
}

const actions = {
    async addSubject({commit}, payload) {
        try {
            const res = await Subject.add(payload)
            commit('ALL_SUBJECT', res.data)
        } catch (error) {
            console.log(error.response.data.error)
        }
    },
    async paginateSubject({commit}) {
        try {
            const res = await Subject.get()
            commit('ALL_SUBJECT', res.data)
        } catch (error) {
            console.log(error.response.data.error)
        }
    },
    async allSubject({commit, getters}) {
        try {
            const res = await Subject.paginate(getters['page'])
            commit('ALL_SUBJECT', res.data)
        } catch (error) {
            console.log(error.response.data.error)
        }
    },
    async showSubject({commit}, payload) {
        try {
            const res = await Subject.show(payload)
            commit('SET_SUBJECT', res.data)
            const newLink = {
                text: res.data.subject,
                disabled: true,
                href: '#',
            }
            commit('SET_LINK', newLink)
            console.log(res.data)
           
        } catch (error) {
            console.log(error.response.data.error)
        }
    },
    async updateSubject({commit}, payload) {
        try {
            const res = await Subject.update(payload)
            commit('SET_SUBJECT', res.data)
            commit('SNACK', true)
            console.log(res)
           
        } catch (error) {
            console.log(error.response.data.error)
        }
    },


}

const mutations = {
    ALL_SUBJECT(state, payload) {
        state.subjects = payload.data
    },
    SET_SUBJECT: (state, payload) => (
        state.form.id = payload.id,
        state.form.suuid = payload.suuid,
        state.form.subject = payload.subject,
        state.form.grade = payload.grade,
        state.form.description = payload.description
    ),
    PAGINATE(state, payload) {
        state.page = payload.current_page,
        state.total = payload.last_page
    },
    SNACK: (state, payload) => (
        state.snackstatus = payload
    ),
    SET_LINK: (state, payload) => (
        state.link.push(payload)
    )
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
