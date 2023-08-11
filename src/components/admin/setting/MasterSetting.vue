<script>
import { watch, shallowRef } from "vue";
import { useRoute } from "vue-router";
import BackgroundSetting from "./BackgroundSetting.vue";
import LogoSetting from "./LogoSetting.vue";
import MenuSetting from "./MenuSetting.vue";
import NavigationSetting from "./NavigationSetting.vue";

export default {
    name: 'Master-setting',
    setup() {
        const route = useRoute()
        const search = shallowRef(route.params.search[0].toUpperCase() + route.params.search.slice(1))
        const capital = shallowRef(route.params.search[0].toUpperCase())
        const capitalFirst = shallowRef(route.params.search.slice(1))
        const dynamicComponent = shallowRef([])

        watch(() => route.params.search, () => {
            // console.log(route.params.search ? route.params.search : 'default')
            const routeQuery = route.params.search ? route.params.search : 'default'
            changeComponent(routeQuery)
        })

        function changeComponent(data) {
            capital.value = data[0].toUpperCase()
            capitalFirst.value = data.slice(1)
            search.value = capital.value + capitalFirst.value
            
            switch (data) {
                case 'background':
                    return dynamicComponent.value = BackgroundSetting
                case 'logo':
                    return dynamicComponent.value = LogoSetting
                case 'menus':
                    return dynamicComponent.value = MenuSetting
                default:
                    return dynamicComponent.value = NavigationSetting
            }
        }

        return {
            search,
            dynamicComponent,
        }
    },
    data() {
        return {
            // dynamicComponent : ''
        }
    },
    mounted() {
        this.$store.dispatch('checkAuth').then((res) => {
            if (res.data.roles == 'customer') {
                return window.location.href = '/dashboard';
            }
        }).catch(() => {
            console.log('Login Page : Belum Login, Silahkan Login Terlebih Dahulu!')
        })
    },
    created() {
        switch (this.$route.params.search) {
            case 'logo':
                console.log('hellow')
                return this.dynamicComponent = LogoSetting
            case 'navigation':
                return this.dynamicComponent = NavigationSetting
            case 'menus':
                return this.dynamicComponent = MenuSetting
        
            default:
                return this.dynamicComponent = BackgroundSetting
        }
    }
}
</script>

<template>
    <div class="w-full py-4 px-4 mt-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <div class="relative w-full border-b-2 border-neutral-100 pb-12 mb-2 dark:border-neutral-600 dark:text-neutral-50">
            <h1 class="absolute left-0 text-2xl">Settings : {{ search }}</h1>
        </div>

        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
            <component :is="dynamicComponent"></component>
        </transition>
    </div>
</template>