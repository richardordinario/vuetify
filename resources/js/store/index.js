import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import subject from './modules/subject/subject'
import instructional from './modules/subject/instructional'

export default new Vuex.Store({
    modules: {
        subject,
        instructional
    },
})
