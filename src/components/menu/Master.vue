<template>
    <div class="master-menu">
        <div class="flex flex-wrap items-center justify-center">
            <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-sm">
                <div class="relative pt-10 px-10 flex items-center justify-center">
                    <img class="relative w-screen scale-125 brightness-[400]" :src="LogoLarge.imageUrl" alt="">
                </div>
            </div>
        </div>


        <div class="p-2 flex flex-wrap items-center justify-center">
            
            <router-link to="/menu/food">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                    </svg>
                    <div class="relative pt-10 px-10 flex items-center justify-center">
                        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                        <vue-load-image>
                            <template v-slot:image>
                                <!-- <img src="@/assets/food/makanan1.png" class="relative w-40"/> -->
                                <img :src="MenuImage1.imageUrl" class="relative w-40"/>
                            </template>
                            <template v-slot:preloader> 
                                <img src="@/assets/loading/loading-image.gif" class="relative w-40"/>
                            </template>
                            <template v-slot:error>Image load fails</template>
                        </vue-load-image>
                    </div>
                    <div class="relative text-white px-6 pb-6 mt-6">
                        <span class="block opacity-75 -mb-1">{{ MenuDeskripsi1.value }}</span>
                        <div class="flex justify-between">
                            <span class="block font-semibold text-xl">{{ Menu1.value }}</span>
                            <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Menus</span>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link to="menu/bakery">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                    </svg>
                    <div class="relative pt-10 px-10 flex items-center justify-center">
                        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                        <vue-load-image>
                            <template v-slot:image>
                                <img :src="MenuImage2.imageUrl" class="relative w-40"/>
                            </template>
                            <template v-slot:preloader> 
                                <img src="@/assets/loading/loading-image.gif" class="relative w-40" />
                            </template>
                            <template v-slot:error>Image load fails</template>
                        </vue-load-image>
                    </div>
                    <div class="relative text-white px-6 pb-6 mt-6">
                        <span class="block opacity-75 -mb-1">{{ MenuDeskripsi2.value }}</span>
                        <div class="flex justify-between">
                            <span class="block font-semibold text-xl">{{ Menu2.value }}</span>
                            <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Menus</span>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link to="menu/drink">
                <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                    </svg>
                    <div class="relative pt-10 px-10 flex items-center justify-center">
                        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                        <vue-load-image>
                            <template v-slot:image>
                                <!-- <img src="@/assets/food/makanan1.png" class="relative w-40"/> -->
                                <img :src="MenuImage3.imageUrl" class="relative w-40"/>
                            </template>
                            <template v-slot:preloader> 
                                <img src="@/assets/loading/loading-image.gif" class="relative w-40" />
                            </template>
                            <template v-slot:error>Image load fails</template>
                        </vue-load-image>
                    </div>
                    <div class="relative text-white px-6 pb-6 mt-6">
                        <span class="block opacity-75 -mb-1">{{ MenuDeskripsi3.value }}</span>
                        <div class="flex justify-between">
                            <span class="block font-semibold text-xl">{{ Menu3.value }}</span>
                            <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Menus</span>
                        </div>
                    </div>
                </div>
            </router-link>
            
        </div>
        <div class="flex flex-wrap items-center justify-center">
            <div class="flex flex-wrap items-center justify-center">

                <div class="flex-shrink-0 m-0 md:m-6 lg:m-10 relative overflow-hidden rounded-lg max-w-md">
                    <div class="relative pt-2 px-6 flex items-center justify-center">
                        <MapPinIcon class="h-6 w-6 text-gray-50" />
                        <span class="ml-2 text-white">Jl Abdullah Lubis No.79/99, Medan</span>
                    </div>
                </div>
                <div class="flex-shrink-0 m-0 md:m-6 lg:m-10 relative overflow-hidden rounded-lg max-w-md">
                    <div class="relative pt-2 px-6 flex items-center justify-center">
                        <img src="@/assets/icons/instagram-icon.svg" alt="instagram" class="h-6 w-6 brightness-[400]">
                        <span class="ml-2 text-white">@bolenquemamibakery</span>
                    </div>
                </div>
                <div class="flex-shrink-0 m-0 md:m-6 lg:m-10 relative overflow-hidden rounded-lg max-w-md">
                    <div class="relative pt-2 px-6 pb-10 md:pb-0 flex items-center justify-center">
                        <img src="@/assets/icons/whatsapp-icon.svg" alt="instagram" class="h-6 w-6 brightness-[400]">
                        <span class="ml-2 text-white">+62 811-6312-231</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MapPinIcon } from '@heroicons/vue/24/solid'
import VueLoadImage from 'vue-load-image'
import { mapGetters } from 'vuex';
export default {
    name: 'master-page',
    created() {
        this.$store.dispatch('getLandingPage')
    },
    computed: {
        ...mapGetters({
            LogoLarge: 'varLogoLarge',
            Menu1: 'varMenu1',
            Menu2: 'varMenu2',
            Menu3: 'varMenu3',
            MenuDeskripsi1: 'varMenuDeskripsi1',
            MenuDeskripsi2: 'varMenuDeskripsi2',
            MenuDeskripsi3: 'varMenuDeskripsi3',
            MenuImage1: 'varMenuImage1',
            MenuImage2: 'varMenuImage2',
            MenuImage3: 'varMenuImage3',
        })
    },
    components: {
        MapPinIcon, VueLoadImage
    }
}
</script>

<style>

</style>
