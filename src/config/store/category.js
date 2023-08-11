import axios from '@/config/axios.js'

const category = {
    state: {
        categories: [],
    },
    getters: {
        getCategory(state) {
            return state.categories
        }
    },
    mutations: {
        getCategory(state, category) {
            state.categories = category
        },
    },
    actions: {
        getCategory({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('category').then((res) => {
                    // console.log(res.data)
                    commit('getCategory', res.data)

                    resolve(res)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
    }
};

export default category