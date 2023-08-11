import axios from '@/config/axios.js'

const roles = {
    state: {
        roles: null,
    },
    getters: {
        getRoles(state) {
            return state.roles
        }
    },
    mutations: {
        setRoles(state, payload) {
            state.roles = payload
        }
    },
    actions: {
        setRoles({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('roles').then((res) => {
                    commit('setRoles', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
}

export default roles