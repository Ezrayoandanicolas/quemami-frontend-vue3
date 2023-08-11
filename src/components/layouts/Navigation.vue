<script>
    import { mapGetters } from 'vuex';
    // import VueLoadImage from 'vue-load-image'
    // import { watch } from 'vue';
    // import { useRoute } from 'vue-router';
    // import { VueCookieNext } from 'vue-cookie-next'
    export default {
        props: ['user'],
        name: 'navigation-layout',
        setup() {
            // const route = useRoute();
            const links = [
                {'url': '/', 'title': 'Home', 'auth': false},
                {'url': '/about', 'title': 'About', 'auth': false},
                {'url': '/', 'title': 'Contact Us', 'auth': false}
            ];
    
        //     console.log(`current route name on component setup init: ${route.name} ${route.meta.middleware}`);

        //     // You could use computed property which re-evaluates on route meta.middleware updates
        //     // const routemeta.middleware = computed(() => route.meta.middleware);

        //     // You can watch the property for triggering some other action on change
        //     // watch(() => route.meta.middleware, () => {
        //         watch(() => {
        //         // console.log(`MyCoolComponent - watch route.meta.middleware changed to ${route.name} ${route.meta.middleware}`);
        //         links.splice(0)
        //         getLinks(route.meta.middleware)
        //     });

        //     function getLinks(value) {
        //         if (value == true) {
        //             let storeLinks = [
        //                 {'url': '/dashboard', 'title': 'Dashboard', 'auth': true},
        //                 {'url': '/product', 'title': 'Product', 'auth': true},
        //                 {'url': '/settings', 'title': 'Settings', 'auth': true},
        //                 {'url': '/logout', 'title': 'Logout', 'auth': true}
        //             ]
        //             // VueCookieNext.removeCookie('__Links')
        //             console.log(storeLinks)
        //             VueCookieNext.setCookie('__Links', JSON.stringify(storeLinks))
        //             // links.push(JSON.parse(VueCookieNext.getCookie("__Links")))
        //         } else {
        //             let storeLinks = [
        //                 {'url': '/', 'title': 'Home', 'auth': false},
        //                 {'url': '/menus', 'title': 'Menu', 'auth': false},
        //                 {'url': '/about', 'title': 'About', 'auth': false},
        //                 {'url': '/', 'title': 'Contact Us', 'auth': false}
        //             ]
        //             console.log(storeLinks)
        //             // VueCookieNext.removeCookie('__Links')
        //             VueCookieNext.setCookie('__Links', JSON.stringify(storeLinks))
        //         }
        //         // links.push(storeLinks)
        //         // links.push(JSON.parse(VueCookieNext.getCookie("__Links")))
        //         return links
        //     }
            
            return { 
                // route,
                links
            };
        },
        data () {
            return {
                // links : JSON.parse(this.$cookie.getCookie("__Links")),
            }
        },
        created() {
            this.$store.dispatch('getLandingPage')
        },
        computed: {
            ...mapGetters({
                LogoMini: 'varLogoMini',
                LogoTitle: 'varLogoTitle',
            })
        },
        components: {
            // VueLoadImage
        }
    }
</script>

<template>
    <div>
        <nav class="bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img :src="LogoMini.imageUrl" class="h-10 mr-3" alt="Quemami Logo">
                    <!-- <vue-load-image>
                        <template v-slot:image>
                            <img :src="LogoMini.imageUrl" class="relative h-10 mr-3"/>
                        </template>
                        <template v-slot:preloader> 
                            <img src="@/assets/loading/loading-image.gif" class="relative h-10 mr-3" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image> -->
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">{{ LogoTitle.value }}</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"><router-link to="/login">Login</router-link></button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li v-for="(item, index) in links" :key="index">
                            <router-link :to="item.url" class="block mt-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{{ item.title }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view
            v-slot="{ Component, route }"
        >
            <transition :enter-active-class="route.meta.enterAnimate" :leave-active-class="route.meta.leaveAnimate" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>

</template>