<template>
    <div class="menu-list">
        <!-- Title -->
        <div class="pt-2 bg-white">
        <h1 class="text-center text-2xl font-bold text-gray-800">All Products {{ capitalized(search) }}</h1>
        </div>

        <!-- Tab Menu -->
        <div class="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800">
            <a rel="noopener noreferrer" href="food" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Food</span>
            </a>
            <a rel="noopener noreferrer" href="bakery" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Bakery</span>
            </a>
            <a rel="noopener noreferrer" href="drink" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Drink</span>
            </a>
        </div>

        <!-- Product List -->
        <section class="py-10 bg-gray-100 bg-opacity-50" :class="checkProduct">
            <div v-if="Menus.length == 0" class="mx-auto grid max-w-6xl bg-white p-4">
                <h1>Product Belum Tersedia!</h1>
            </div>
            <div v-else class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <article v-for="(item,index) in Menus || []" :key="index" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a @click="viewDetail(item)">
                        <div class="relative items-center w-full overflow-hidden rounded-xl">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img :src="item.imageUrl" class="relative w-full"/>
                                </template>
                                <template v-slot:preloader> 
                                    <img src="@/assets/loading/loading-image.gif" class="relative w-full" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>

                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">{{ item.name }}</h2>
                            <p v-if="item.discount > 0">
                                <span class="text-lg font-bold text-gray-500 dark:text-gray-500 line-through decoration-red-500">{{vueNumberFormat(item.price, {})}}</span>
                                /
                                <span class="text-lg font-bold text-red-500 dark:text-red-500">{{vueNumberFormat(item.discount, {})}}</span>
                            </p>
                            <p v-else>
                                <span class="text-lg font-bold text-black-500 dark:text-black-500">{{vueNumberFormat(item.price, {})}}</span>
                            </p>

                            <div class="mt-3 flex items-end justify-between">
                                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button class="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </section>

        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
            <modal-menu v-if="openModal" :openModal="openModal" :menuDetail="menuDetail" @closeModal="closeModal"></modal-menu>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalMenu from '@/components/menu/ModalMenu.vue';
import VueLoadImage from 'vue-load-image'

export default {
    name: 'menu-list',
    data () {
        return {
            search: this.$route.params.search,
            openModal: false,
            loremIpsum: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            menu: {
                category: this.$route.params.search
            },
            menuDetail: null,
        }
    },
    created() {
        this.$store.dispatch('getMenus', this.menu).then(() => {
            // console.log(res.data.length)
        }).catch((err) => {
            this.Menus = ''
            console.log(err)
        })

        this.$store.dispatch('getLandingPage')
    },
    computed: {
        ...mapGetters({
            Menus: 'getMenus',
        }),
        checkProduct() {
            if(this.Menus.length == 0) {
                return 'h-screen'
            }
            return 'h-full'
        },
    },
    methods: {
        capitalized(search) {
            const capitalizedFirst = search[0].toUpperCase();
            const rest = search.slice(1);

            return capitalizedFirst + rest;
        },
        viewDetail(detail) {
            // console.log(detail)
            this.openModal = !this.openModal
            this.menuDetail = detail
        },
        closeModal(data) {
            // console.log(data)
            this.openModal = !data
        }
    },
    components: {
        ModalMenu,VueLoadImage
    }
}
</script>