// 彙整所有 Vuex 檔(全域的寫在這裡)
import Vue from 'vue';
import Vuex from 'vuex';

import homeM from './home';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true, // 嚴謹模式
    modules: {
        homeM
    },
    state: {
        count: 0
    },
    actions: {
        getCount(context, payload) {
            // payload 外部傳來
            context.commit('COUNT', payload)
        }
    },
    mutations: {
        // 操作state
        COUNT(state, payload) {
            // state = state{}
            state.count += payload
        }
    },
    getters: {
        isCount: state => state.count
    }
});