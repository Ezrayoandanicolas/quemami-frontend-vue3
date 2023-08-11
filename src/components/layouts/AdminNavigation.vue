<script>
    import { computed } from 'vue'
    import { HomeIcon, SquaresPlusIcon, UsersIcon,WrenchIcon, ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
    import { mapGetters, useStore } from 'vuex'
    export default {
        name: 'Admin-Navigation',
        setup() {
            const store = useStore()
            const links = [
                {'url': '/dashboard', 'title': 'Dashboard', 'auth': true, 'multiple': false},
                {'url': '/manage-product', 'title': 'Product', 'auth': true, 'multiple': false},
                {'url': '#', 'title': 'Users', 'auth': true, 'multiple': [
                    {'url': '/users/customer', 'title': 'Customer'},
                    {'url': '/users/worker', 'title': 'Worker'},
                    {'url': '/users/supervisor', 'title': 'Supervisor'},
                    {'url': '/users/production-manager', 'title': 'Production Manager'},
                    {'url': '/users/owner', 'title': 'Owner'},
                ]},
                {'url': '#', 'title': 'Settings', 'auth': true, 'multiple': [
                    {'url': '/settings/logo', 'title': 'Logo'},
                    {'url': '/settings/navigation', 'title': 'Navigation (Soon)'},
                    {'url': '/settings/menus', 'title': 'Menus'},
                    {'url': '/settings/background', 'title': 'Background (Soon)'},
                ]},
                {'url': '/logout', 'title': 'Sign Out', 'auth': true, 'multiple': false}
            ]

            return {
                links,
                UserAuth: computed(() => store.getters.user)
            }
        },
        data() {
            return {
            }
        },
        created() {
            this.$store.dispatch('checkAuth')
        },
        computed: {
            ...mapGetters({
                // isAuthenticated: 'isAuthenticated',
                User: 'user',
            })
        },
        methods: {
            dynamicIcons(value) {
                // console.log(value)
                switch (value) {
                    case "Dashboard":
                        return HomeIcon;
                    case "Product":
                        return SquaresPlusIcon;
                    case "Users":
                        return UsersIcon;
                    case "Settings":
                        return WrenchIcon;
                    case "Logout":
                        return ArrowLeftCircleIcon;
                    default:
                        return HomeIcon;
                }
            }
        },
    }
</script>

<template>
    <div class="admin-navigation">
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <a href="/" class="flex ml-2 md:mr-24">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                    <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ml-3">
                        <div>
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                        </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                        <div class="px-4 py-3" role="none">
                            <p class="text-sm text-gray-900 dark:text-white" role="none">
                            {{ UserAuth ? UserAuth.name : 'Loading' }}
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                {{ UserAuth ? UserAuth.email : 'Loading' }}
                            </p>
                        </div>
                        <ul class="py-1" role="none">
                            <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                            </li>
                            <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                            </li>
                            <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                            </li>
                            <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar" class="fixed top-12 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li v-for="(items, index) in links" :key="index">
                        <router-link v-if="items.multiple == false" :to="items.url" class="flex items-center p-2
 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" aria-current="page">
                                <component class="h-5 w-5" :is="dynamicIcons(items.title)"></component>
                            <span class="ml-3">{{ items.title }}</span>
                        </router-link>

                        <div v-else>
                            <div v-show="UserAuth ? UserAuth.roles != 'customer' : false">
                                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" :aria-controls="items.title" :data-collapse-toggle="items.title">
                                    <component class="h-5 w-5" :is="dynamicIcons(items.title)"></component>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ items.title }}</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul :id="items.title" class="hidden py-2 space-y-2">
                                    <li v-for="(item, index) in items.multiple" :key="index">
                                        <router-link :to="item.url" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{ item.title }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="p-4 sm:ml-64 mt-12">
            <router-view
                v-slot="{ Component, route }"
            >
                <transition :enter-active-class="route.meta.enterAnimate" :leave-active-class="route.meta.leaveAnimate" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>

    </div>
</template>