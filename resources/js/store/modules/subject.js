import Subject from '../../api/modules/subject'

const state = {
    subjects: [],
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
    }
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
    }
}

const mutations = {
    ALL_SUBJECT(state, payload) {
        state.subjects = payload.data
        state.page = payload.current_page,
        state.total = payload.last_page
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
