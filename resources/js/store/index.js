import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import subject from './modules/subject'

export default new Vuex.Store({
    modules: {
        subject
    },
})
