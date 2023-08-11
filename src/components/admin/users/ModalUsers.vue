<template>
    <div class="modal-menu bg-gray">
        <!-- Main modal -->
        <div class="backdrop-blur fixed z-50 w-full inset-0 h-[calc(100%)] overflow-y-auto max-h-full">
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative inset-x-0 bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            <span v-if="updateModal">Update User</span><span v-else>Add User</span>
                        </h3>
                        <button @click="closeModal(openModal)" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6 h-full">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                           
                            <form @submit.prevent="addUsers">
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" v-model="product.name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="email" v-model="product.email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <select v-model="product.roles" id="floating_roles" name="floating_roles" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required>
                                        <option v-for="(item, index) in Roles" :key="index" :value="item.id" class="dark:text-gray-600">{{ item.role.toUpperCase() }}</option>
                                    </select>
                                    <label for="floating_roles" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Roles</label>
                                </div>

                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="password" v-model="product.password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " :required="!updateModal" />
                                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span v-if="updateModal">(Optional)</span></label>
                                </div>

                                <button type="submit" @click="addUsers(openModal)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ updateModal ? 'Update' : 'Tambah' }}</button>
                                <button @click="closeModal(openModal)" type="button" class="mt-3 lg:ml-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" ref="cancelButtonRef">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ['openModal', 'updateModal', 'updateData'],
    name: 'modal-users',
    data() {
        return {
            product: {
                id: this.updateData.id || '',
                name: this.updateData.name || '',
                email: this.updateData.email || '',
                roles: this.updateData.roles,
                password: '',
            },
        }
    },
    mounted() {
        this.$store.dispatch('setRoles');
    },
    computed: {
        ...mapGetters({
            Roles: 'getRoles',
        })
    },
    methods: {
        addUsers(dataModal) {
            if(this.updateModal) {
                this.$emit('updateUsers', this.product);
            } else {
                this.$emit('addUsers', this.product);
            }
            this.$emit('closeModal', dataModal)
        },
        closeModal(data) {
            this.$emit('closeModal', data)
         }
    }
}
</script>