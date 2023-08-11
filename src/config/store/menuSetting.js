import axios from '@/config/axios.js'

const menuSetting = {
    state: {
        menu1: [],
        menu2: [],
        menu3: [],
    },
    getters: {
        getMenu1(state) {
            return state.menu1
        },
        getMenu2(state) {
            return state.menu2
        },
        getMenu3(state) {
            return state.menu3
        },
    },
    mutations: {
        setMenus(state, payload) {
            state.menu1 = payload.menu_1
            state.menu2 = payload.menu_2
            state.menu3 = payload.menu_3
        },
        updateImageMenu(state, payload) {
            if (payload.menu_1) {
                state.menu1[2] = payload.menu_1
            }
            if (payload.menu_2) {
                state.menu2[2] = payload.menu_2
            }
            if (payload.menu_3) {
                state.menu3[2] = payload.menu_3
            }
        },
        updateMenuText(state, payload) {
            if (payload.menu_1) {
                state.menu1[0] = payload.menu_1
            }
            if (payload.menu_deskripsi_1) {
                state.menu1[1] = payload.menu_deskripsi_1
            }
            if (payload.menu_2) {
                state.menu2[0] = payload.menu_2
            }
            if (payload.menu_deskripsi_2) {
                state.menu2[1] = payload.menu_deskripsi_2
            }
            if (payload.menu_3) {
                state.menu3[0] = payload.menu_3
            }
            if (payload.menu_deskripsi_3) {
                state.menu3[1] = payload.menu_deskripsi_3
            }
        }
    },
    actions: {
        getSettingMenus({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('setting/menu').then((res) => {
                    // console.log(res.data)
                    commit('setMenus', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        updateImageMenu({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post('setting/menu/'+data.id, data.data, {
                    Headers: { 
                        "Content-Type": "multipart/form-data",
                    },
                }).then((res) => {
                    console.log(res.data)
                    commit('updateImageMenu', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        updateMenuText({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post('setting/menu-text/'+data.id, data).then((res) => {
                    // console.log(res.data)
                    commit('updateMenuText', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
    }
}

export default menuSetting