
import axios from '@/config/axios.js'

const users = {
    state: {
        userLists: [],
    },
    getters: {
        getUserLists(state) {
            return state.userLists
        }
    },
    mutations: {
        setUserLists(state, payload) {
            state.userLists = payload
        },
        storeUsers(state, payload) {
            state.userLists.splice('id', 0, payload.data)
        },
        updateUsers(state, payload) {
            // console.log(payload.id)
            let index = state.userLists.findIndex(obj => obj.id == payload.id);
            state.userLists[index] = payload;
        },
        removeUser(state, payload ) {
            let index = state.userLists.findIndex(obj => obj.id == payload);
            // state.userLists[index] = payload;
            state.userLists.splice(index, 1)
        },
    },
    actions: {
        setUserLists({commit}, search) {
            return new Promise((resolve, reject) => {
                axios.get('user/manage-users/'+search).then((res) => {
                    // console.log(res.data)
                    commit('setUserLists', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        storeUsers({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post('user/add-user', data).then((res) => {
                    // console.log(res.data)
                    commit('storeUsers', res.data)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        updateUsers({ commit }, query) {
            return new Promise((resolve, reject) => {
                axios.post('user/update-user/'+query.id, query).then((res) => {
                    console.log(res.data)
                    commit('updateUsers', res.data)
                    resolve(res.data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        removeUser({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios.delete('user/delete-user/'+data).then((res) => {
                    // console.log(res.data)
                    commit('removeUser', res.data)
                    resolve(res.data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
    }
};

export default users