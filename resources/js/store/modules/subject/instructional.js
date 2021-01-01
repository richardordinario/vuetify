import Instructional from '../../../api/modules/subject/instructional'

const state = {}
const getters = {}
const actions = {
    async addInstructional({commit}, payload) {
        try {
            const res = await Instructional.add(payload)
            console.log(res)
        } catch (error) {
            console.log(error.response.data.error)
        }
    },
}
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}