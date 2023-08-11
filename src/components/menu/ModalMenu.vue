<template>
    <div class="modal-menu bg-gray">
        <!-- Main modal -->
        <div class="backdrop-blur fixed z-50 w-full inset-0 h-[calc(100%)] max-h-full">
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative inset-x-0 bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            {{ menuDetail.name }}
                        </h3>
                        <button @click="closeModal(openModal)" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img :src="menuDetail.imageUrl" class="h-full w-full rounded-xl object-cover"/>
                                </template>
                                <template v-slot:preloader> 
                                    <img src="@/assets/loading/loading-image.gif" class="relative w-full" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>

                            <div class="text-left">
                                <h2 class="text-lg font-medium dark:text-white">
                                {{ menuDetail.ingredients }}
                                </h2>

                                <p v-if="menuDetail.discount">
                                    <span class="text-lg font-bold text-gray-500 dark:text-gray-500 line-through decoration-red-500">{{vueNumberFormat(menuDetail.price, {})}}</span>
                                    /
                                    <span class="text-lg font-bold text-red-500 dark:text-red-500">{{vueNumberFormat(menuDetail.discount, {})}}</span>
                                </p>
                                <p v-else>
                                    <span class="text-lg font-bold  text-gray-500 dark:text-white">{{vueNumberFormat(menuDetail.price, {})}}</span>
                                </p>

                                <p class="mt-4 text-sm text-gray-500 dark:text-white">
                                    {{ menuDetail.description }}
                                </p>
                                <p class="mt-4 text-sm text-gray-500 dark:text-white">
                                Hastag : 
                                <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-1s px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ menuDetail.hastag }}</span>&nbsp;
                                &nbsp;<span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-1s px-2.5 py-0.5 rounded dark:bg-yellow-700 dark:text-yellow-300">{{ menuDetail.hastag }}</span>
                                &nbsp;<span class="bg-red-100 text-red-800 text-sm font-medium mr-1s px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{{ menuDetail.hastag }}</span>
                                </p>

                                <div class="mt-6 sm:text-right dark:text-white">
                                    <a
                                        href="#"
                                        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                    >
                                        Find out more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>
                        <button @click="closeModal(openModal)" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
export default {
    props: ['openModal', 'menuDetail'],
    name: 'modal-menu-page',
    methods: {
         closeModal(data) {
            this.$emit('closeModal', data)
         }
    },
    components: {
        VueLoadImage
    }
}
</script>