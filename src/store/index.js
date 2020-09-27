// 彙整所有 Vuex 檔
import Vue from 'vue';
import Vuex from 'vuex';

import homeM from './home';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true, // 嚴謹模式
    modules: {
        homeM
    }
});