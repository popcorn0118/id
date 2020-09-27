import axios from 'axios';

export default {
    namespaced: true,
    state: {
      count: 0,
      img: ''
    },
    actions: {
        getCount(context, payload) {
            // payload 外部傳來
            context.commit('COUNT', payload)
        },
        getRandomuser(context) {
            axios.get('https://randomuser.me/api/').then((res) => {
                context.commit('IMG', res.data.results[0].picture.large)
            })
        }
    },
    mutations: {
        // 操作state
        COUNT(state, payload) {
            // state = state{}
            state.count += payload
        },
        IMG(state, payload) {
            state.img = payload
        }
    },
    getters: {
        isCount: state => state.count,
        isImg: state => state.img
    }
  }