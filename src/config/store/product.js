
import axios from '@/config/axios.js'

const product = {
    state: {
        products: [],
    },
    getters: {
        getProduct(state) {
            return state.products
        }
    },
    mutations: {
        getProduct(state, product) {
            state.products = product
        },
        postProduct(state, product) {
            // state.products.push(product)
            state.products.splice('id', 0, product)
        },
        updateProduct(state, product) {
            // console.log(product)
            let index = state.products.findIndex(obj => obj.id == product.id);
            state.products[index] = product;
        },
        removeProduct(state, product ) {
            let index = state.products.findIndex(obj => obj.id == product);
            // state.products[index] = product;
            state.products.splice(index, 1)
        },
    },
    actions: {
        getProduct({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('product').then((res) => {
                    // console.log(res.data)
                    commit('getProduct', res.data)

                    resolve(res)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        storeProduct({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios.post('product/add-product', data, {
                    Headers: { 
                        "Content-Type": "multipart/form-data",
                    },
                }).then((res) => {
                    // console.log(res.data)
                    commit('postProduct', res.data)
                    resolve(res.data)
                }).catch((err) => {
                    console.log('error')
                    reject(err)
                })
            })
        },
        updateProduct({ commit }, query) {
            return new Promise((resolve, reject) => {
                axios.post('product/update-product/'+query.id, query.data, {
                    Headers: { 
                        "Content-Type": "multipart/form-data",
                    },
                }).then((res) => {
                    // console.log(res.data.id)
                    commit('updateProduct', res.data)
                    resolve(res.data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        removeProduct({ commit }, data) {
            return new Promise((resolve, reject) => {
                axios.delete('product/delete-product/'+data).then((res) => {
                    // console.log(res.data)
                    commit('removeProduct', res.data)
                    resolve(res.data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
    }
};

export default product