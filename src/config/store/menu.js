import axios from '@/config/axios.js'

const menus = {
    state: {
        menus: [],
    },
    getters: {
        getMenus(state) {
            return state.menus
        }
    },
    mutations: {
        getMenus(state, menu) {
            state.menus = menu
        },
    },
    actions: {
        getMenus({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios.post('menus', data).then((res) => {
                    // console.log(res.data)
                    commit('getMenus', res.data)

                    resolve(res)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
    }
};

export default menus