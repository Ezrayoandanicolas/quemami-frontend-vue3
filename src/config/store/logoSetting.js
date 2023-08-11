import axios from '@/config/axios.js'

const logoSetting = {
    state: {
        logoTitle: [],
        logoMini: [],
        logoLarge: [],
    },
    getters: {
        getLogoTitle(state) {
            return state.logoTitle
        },
        getLogoMini(state) {
            return state.logoMini
        },
        getLogoLarge(state) {
            return state.logoLarge
        },
    },
    mutations: {
        setLogo(state, payload) {
            state.logoTitle = payload.logo_title
            state.logoMini = payload.logo_mini
            state.logoLarge = payload.logo_large
        },
        updateLogoMini(state, payload) {
            if(payload.logo_mini != null) {
                state.logoMini = payload.logo_mini
            } else {
                state.logoLarge = payload.logo_large
            }
        },
        updateLogoTitle(state, payload) {
            state.logoTitle = payload.logo_title
        }
    },
    actions: {
        getLogo({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('setting/logo').then((res) => {
                    commit('setLogo', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        updateLogo({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post('setting/logo/'+data.id, data.data, {
                    Headers: { 
                        "Content-Type": "multipart/form-data",
                    },
                }).then((res) => {
                    commit('updateLogoMini', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        updateLogoTitle({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post('setting/logo-title/'+data.id, data).then((res) => {
                    // console.log(res.data)
                    commit('updateLogoTitle', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
    }
}

export default logoSetting