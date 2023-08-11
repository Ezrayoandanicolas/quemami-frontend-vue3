import axios from '@/config/axios.js'

const category = {
    state: {
        logoMini: [],
        logoLarge: [],
        logoTitle: [],
        menu1: [],
        menu2: [],
        menu3: [],
        menuDeskripsi1: [],
        menuDeskripsi2: [],
        menuDeskripsi3: [],
        menuImage1: [],
        menuImage2: [],
        menuImage3: [],
    },
    getters: {
        varLogoMini(state) {
            return state.logoMini
        },
        varLogoLarge(state) {
            return state.logoLarge
        },
        varLogoTitle(state) {
            return state.logoTitle
        },
        varMenu1(state) {
            return state.menu1
        },
        varMenu2(state) {
            return state.menu2
        },
        varMenu3(state) {
            return state.menu3
        },
        varMenuDeskripsi1(state) {
            return state.menuDeskripsi1
        },
        varMenuDeskripsi2(state) {
            return state.menuDeskripsi2
        },
        varMenuDeskripsi3(state) {
            return state.menuDeskripsi3
        },
        varMenuImage1(state) {
            return state.menuImage1
        },
        varMenuImage2(state) {
            return state.menuImage2
        },
        varMenuImage3(state) {
            return state.menuImage3
        },
    },
    mutations: {
        setLandingPage(state, payload) {
            state.logoMini = payload.logo_mini
            state.logoLarge = payload.logo_large
            state.logoTitle = payload.logo_title
            state.menu1 = payload.menu_1
            state.menu2 = payload.menu_2
            state.menu3 = payload.menu_3
            state.menuDeskripsi1 = payload.menu_deskripsi_1
            state.menuDeskripsi2 = payload.menu_deskripsi_2
            state.menuDeskripsi3 = payload.menu_deskripsi_3
            state.menuImage1 = payload.menu_image_1
            state.menuImage2 = payload.menu_image_2
            state.menuImage3 = payload.menu_image_3
        },
    },
    actions: {
        getLandingPage({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('landing-page').then((res) => {
                    // console.log(res.data)
                    commit('setLandingPage', res.data)

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