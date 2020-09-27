import axios from 'axios';

export default {
    namespaced: true, //actions、mutations、getters 改成 ture 區域變數，state 本來就是區域變數
    state: {
      img: ''
    },
    actions: {
        getRandomuser(context) {
            axios.get('https://randomuser.me/api/').then((res) => {
                context.commit('IMG', res.data.results[0].picture.large)
            })
        }
    },
    mutations: {
        IMG(state, payload) {
            state.img = payload
        }
    },
    getters: {
        isImg: state => state.img
    }
  }