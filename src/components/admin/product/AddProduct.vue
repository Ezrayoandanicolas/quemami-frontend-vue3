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
                            <span v-if="updateModal">Update Product Quemami</span><span v-else>Add Product Quemami</span>
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
                           
                            <form @submit.prevent="addProduct">
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" v-model="product.name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" v-model="product.ingredients" name="floating_ingredients" id="floating_ingredients" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_ingredients" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingredients</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <select v-model="product.category_id" id="floating_category" name="floating_category" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required>
                                        <option v-for="(item, index) in Categories" :key="index" :value="item.id" class="dark:text-gray-600">{{ item.name.toUpperCase() }}</option>
                                    </select>
                                    <label for="floating_category" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <textarea v-model="product.description" name="floating_description" id="floating_description" rows="4" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required></textarea>
                                    <label for="floating_description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                                </div>
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <VueNumberFormat
                                            v-model:value="product.price"
                                            name="floating_price" id="floating_price"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            required
                                        ></VueNumberFormat>
                                        <label for="floating_price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <VueNumberFormat
                                            v-model:value="product.discount"
                                            name="floating_discount" id="floating_discount"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            required
                                        ></VueNumberFormat>
                                        <label for="floating_discount" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discount</label>
                                    </div>
                                </div>

                                <div class="relative z-0 w-full mb-6 group">
                                    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                      <div class="text-center">
                                        <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                                        <img v-if="!product.imagePreviewUrl" class="imagePreview w-64t h-64" :src="product.imageUrl" />
                                        <img v-else class="imagePreview w-64t h-64" :hidden="!product.imagePreviewProcess" :src="product.imagePreviewUrl" />
    
                                        <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                                          <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>{{ this.product.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" ref="fileUpload" @input="selectImage"/>
                                          </label>
                                          <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                      </div>
                                    </div>
                                </div>

                                <button type="submit" @click="addProduct" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ updateModal ? 'Update' : 'Tambah' }}</button>
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
    name: 'add-product',
    data() {
        return {
            product: {
                id: this.updateData.id || '',
                name: this.updateData.name || '',
                ingredients: this.updateData.ingredients || '',
                description: this.updateData.description || '',
                hastag_id: '',
                category_id: this.updateData.category_id || '',
                price: this.updateData.price || '',
                discount: this.updateData.discount || '',
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
                imageUrl: this.updateData.imageUrl || null,
            },
        }
    },
    mounted() {
        this.$store.dispatch('getCategory');
    },
    computed: {
        ...mapGetters({
            Categories: 'getCategory',
        })
    },
    methods: {
        selectImage(event) {
          this.product.imageFile = event.target.files[0]

          let input = this.$refs.fileUpload
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {
              this.product.imagePreviewUrl = e.target.result
              this.product.imagePreviewProcess = true
            }
            reader.readAsDataURL(file[0])
          }
        },
        addProduct(dataModal) {
            const data = new FormData();
                data.append('name', this.product.name);
                data.append('ingredients', this.product.ingredients);
                data.append('description', this.product.description);
                data.append('category_id', this.product.category_id);
                data.append('price', this.product.price);
                data.append('discount', this.product.discount);
                data.append('imageUpload', this.product.imageFile);
            // console.log(data.values())
            const query = {
                id: this.product.id,
                data: data,
            }
            if(this.updateModal) {
                this.$emit('updateProduct', query);
            } else {
                this.$emit('addProduct', data);
            }
            this.$emit('closeModal', dataModal)
        },
        closeModal(data) {
            this.$emit('closeModal', data)
         }
    }
}
</script>