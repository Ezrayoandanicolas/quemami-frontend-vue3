<script>
    import { watch, ref } from "vue";
    import { useRoute } from "vue-router";
    import { mapGetters, useStore } from "vuex";
    import ModalUsers from "./ModalUsers.vue";
    // import { createStore  } from "vuex";
    export default {
        name: 'Master-Users',
        setup() {
            const route = useRoute()
            const store = useStore()
            const filterSearch = route.params.search
            const search = ref(filterSearch.replace('-', ' ').toUpperCase())
            const userLists = []

            watch(() => route.params.search, () => {
                // console.log()
                    var strSearch = route.params.search
                    getSearch(strSearch)
            })

            function getSearch(data) {
                store.dispatch('setUserLists', data).then(() => {
                    search.value = data.replace('-', ' ').toUpperCase()
                    // console.log('suksess')
                }).catch(() => {
                    console.log('Error : Fail get value Users')
                })
            }
            
            return {
                search,
                userLists
            }
        },
        data () {
            return {
                openModal: false,
                updateModal: false,
                updateData: '',
            }
        },
        created() {
            this.$store.dispatch('getProduct');
            this.$store.dispatch('setUserLists', this.$route.params.search).then(() => {
                // console.log('suksess')
            }).catch(() => {
                console.log('Error : Fail get value Users')
            });

            this.$store.dispatch('checkAuth').then((res) => {
                if (res.data.roles == 'customer') {
                    return window.location.href = '/dashboard';
                }
            }).catch(() => {
                console.log('Login Page : Belum Login, Silahkan Login Terlebih Dahulu!')
            })
        },
        computed: {
            ...mapGetters({
                Products: 'getProduct',
                UserLists: 'getUserLists',
            })
        },
        methods: {
            addUsers(data) {
                // console.log(data)
                this.$store.dispatch('storeUsers', data).then(() => {
                    this.$swal.fire({
                        text: 'Berhasil Tambah User!',
                        icon: 'success',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(() => {
                    this.$swal.fire({
                        text: 'Gagal Tambah User!',
                        icon: 'Error',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            },
            updateUsers(data) {
                // console.log(data)
                this.$store.dispatch('updateUsers', data).then(() => {
                    // console.log(res.data)
                    this.$swal.fire({
                        text: 'Berhasil Update User!',
                        icon: 'success',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(() => {
                    this.$swal.fire({
                        text: 'Gagal Update User!',
                        icon: 'Error',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            },
            removeUser(data) {
                // console.log(data)
                this.$swal.fire({
                    title: 'Are you sure? ',
                    text: "Delete Product "+data.name+"?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        this.$store.dispatch('removeUser', data.id).then(() => {
                            this.$swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )
                        }).catch(() => {
                            this.$swal.fire(
                                'Error!',
                                'Our user failed to delete.',
                                'error'
                            )
                        })
                    }
                })
            },
            openModalProduct() {
                this.openModal = !this.openModal
            },
            updateModalProduct(data) {
                this.updateData = data
                this.openModal = !this.openModal
                this.updateModal = !this.updateModal
                // console.log(data)
            },
            closeModal(data) {
                // console.log(data)
                this.openModal = !data
                this.updateModal = false
                this.updateData = ''
            }
        },
        components: {
            ModalUsers
        }
    }
</script>

<template>
    <div class="w-full py-4 px-4 mt-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <div class="relative w-full border-b-2 border-neutral-100 pb-12 mb-2 dark:border-neutral-600 dark:text-neutral-50">
            <h1 class="absolute left-0 text-2xl">User Lists : {{ search }}</h1>
            <div class="absolute right-0 add-product">
                <button @click="openModalProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">
                    New Product
                </button>
            </div>
        </div>
        <!-- Table -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex items-center justify-between pb-4">
                <div>
                    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                        Last 30 days
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Roles
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="UserLists.length <= 0" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="text-center w-full p-4" colspan="5">
                            Product Tidak Ada!
                        </td>
                    </tr>

                    <tr v-else v-for="(items, index) in UserLists" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ items.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ items.email }}
                        </td>
                        <td class="px-6 py-4">
                            {{ items.role_name }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" @click="updateModalProduct(items)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" @click="removeUser(items)" class="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
            <modal-users v-if="openModal"
                :openModal="openModal"
                :updateModal="updateModal"
                :updateData="updateData"
                @addUsers="addUsers($event)"
                @updateUsers="updateUsers($event)"
                @closeModal="closeModal" 
            ></modal-users>
        </transition>
    </div>
</template>