import axios from '@/config/axios.js'
// import router from '@/router'
// import { VueCookieNext } from 'vue-cookie-next'

const auth = {
    state: {
        authenticated: false,
        user: null,
        token: null,
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        },
        userToken(state) {
            return state.token
        }
    },
    mutations: {
        authenticateUser(state, data) {
            state.authenticated = true
            state.token = data.token
            state.user = data.user
        },
        setAuth(state, data) {
            state.authenticated = true
            state.user = data
        }
    },
    actions: {
        login({commit}, data) {
            return new Promise((resolve, reject) => {
              axios.post('login', data).then(response => {
                // console.log(response)
                commit('authenticateUser', response)
                localStorage.setItem("access_token", response.data.token)
                localStorage.setItem("access", true)
                // console.log(response)
                resolve(response)
              }).catch(error => {
                console.log('error')
                reject(error)
              })
            });
        },
        checkAuth({commit}) {  
            return new Promise((resolve, reject) => {
                axios.get('user').then((res) => {
                    // console.log(res.data)
                    commit('setAuth', res.data)
                    resolve(res)
                }).catch((err) => {
                    localStorage.removeItem("access_token")
                    localStorage.removeItem("access")
                    reject(err)
                })
            })            
        },
        logout() {
            return new Promise((resolve, reject) => {
                axios.post('logout').then((res) => {
                    localStorage.removeItem("access_token")
                    localStorage.removeItem("access")
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
}

export default auth