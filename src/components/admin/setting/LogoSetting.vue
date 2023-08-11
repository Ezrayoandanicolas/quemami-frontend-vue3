<script>
import { mapGetters } from "vuex";
export default {
    name: 'Logo-Setting',
    data() {
        return {
            imageMini: {
                id: null,
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
            },
            imageLarge: {
                id: null,
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
            },
            disableLogoText: true,
            beforeLogoTitle: '',
        }
    },
    created() {
        this.$store.dispatch('getLogo');
    },
    computed: {
        ...mapGetters({
            LogoTitle: 'getLogoTitle',
            LogoMini: 'getLogoMini',
            LogoLarge: 'getLogoLarge',
        })
    },
    methods: {
        clickImage1(data) {
            this.imageMini.id = data.id
        },
        clickImage2(data) {
            this.imageLarge.id = data.id
        },
        selectImage(event) {
          this.imageMini.imageFile = event.target.files[0]

          let input = this.$refs.fileUploadMini
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {

                const data = new FormData();
                    data.append('imageUpload', this.imageMini.imageFile);

                    const query = {
                        id: this.imageMini.id,
                        data: data,
                    }

                this.$store.dispatch('updateLogo', query).then(() => {
                    this.imageMini.imagePreviewUrl = e.target.result
                    this.imageMini.imagePreviewProcess = true
                    this.$swal.fire({
                        text: 'Berhasil Update Logo Mini!',
                        icon: 'success',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(() => {
                    this.$swal.fire({
                        text: 'Gagal Update Logo Mini!',
                        icon: 'Error',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })

            }
            reader.readAsDataURL(file[0])
          }
        },
        selectImage2(event) {
          this.imageLarge.imageFile = event.target.files[0]

          let input = this.$refs.fileUpload
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {

                const data = new FormData();
                    data.append('imageUpload', this.imageLarge.imageFile);

                    const query = {
                        id: this.imageLarge.id,
                        data: data,
                    }

                this.$store.dispatch('updateLogo', query).then(() => {
                    this.imageLarge.imagePreviewUrl = e.target.result
                    this.imageLarge.imagePreviewProcess = true
                    this.$swal.fire({
                        text: 'Berhasil Update Logo Large!',
                        icon: 'success',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(() => {
                    this.$swal.fire({
                        text: 'Gagal Update Logo Large!',
                        icon: 'Error',
                        position: 'bottom-right',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })

            }
            reader.readAsDataURL(file[0])
          }
        },
        editLogoTitle() {
            this.disableLogoText = !this.disableLogoText
            this.beforeLogoTitle = this.LogoTitle.value
        },
        cancelLogoTitle() {
            this.disableLogoText = !this.disableLogoText
            this.LogoTitle.value = this.beforeLogoTitle
        },
        updateLogoTitle(data) {
            // console.log(data)
            this.$store.dispatch('updateLogoTitle', data).then(() => {
                
                this.$swal.fire({
                    text: 'Berhasil Update Logo Title!',
                    icon: 'success',
                    position: 'bottom-right',
                    showConfirmButton: false,
                    timer: 1500
                });

                this.disableLogoText = !this.disableLogoText
            }).catch(() => {
                this.$swal.fire({
                    text: 'Gagal Update Logo Title!',
                    icon: 'Error',
                    position: 'bottom-right',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        }
    }
}
</script>

<template>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="logo_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo Text</label>
                <input type="text" v-model="LogoTitle.value" id="logo_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quemami" required :disabled="disableLogoText">
                <div v-if="disableLogoText">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" @click="editLogoTitle">Edit</button>
                </div>
                <div v-else>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" @click="updateLogoTitle(LogoTitle)">Update</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2" @click="cancelLogoTitle">Cancel</button>
                </div>
            </div>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="relative z-0 w-full mb-6 group">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Logo Mini</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                    <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                    <!-- {{ LogoMini.imageUrl }} -->
                    <img v-if="!imageMini.imagePreviewUrl" class="imagePreview w-40 h-40" :src="LogoMini.imageUrl" />
                    <img v-else class="imagePreview w-40 h-40" :hidden="!imageMini.imagePreviewProcess" :src="imageMini.imagePreviewUrl" />

                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label for="file-upload-mini" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>{{ imageMini.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                        <input id="file-upload-mini" name="file-upload-mini" type="file" class="sr-only" ref="fileUploadMini" @click="clickImage1(LogoMini)" @input="selectImage"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Logo Large</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                    <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                    <!-- {{ LogoMini.imageUrl }} -->
                    <img v-if="!imageLarge.imagePreviewUrl" class="imagePreview w-80 h-40" :src="LogoLarge.imageUrl" />
                    <img v-else class="imagePreview w-80 h-40" :hidden="!imageLarge.imagePreviewProcess" :src="imageLarge.imagePreviewUrl" />

                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>{{ imageLarge.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" ref="fileUpload" @click="clickImage2(LogoLarge)" @input="selectImage2"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>