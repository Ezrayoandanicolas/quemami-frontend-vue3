<script>
import { mapGetters } from "vuex";
export default {
    name: 'Menu-Setting',
    data() {
        return {
            imageMenu1: {
                id: null,
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
            },
            imageMenu2: {
                id: null,
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
            },
            imageMenu3: {
                id: null,
                imagePreviewUrl: null,
                imageFile: '',
                imagePreviewProcess: false,
            },
            beforeTextMenu1: '',
            beforeTextMenu2: '',
            beforeTextMenu3: '',
            disableButton1Menu1: true,
            disableButton2Menu1: true,
            disableButton1Menu2: true,
            disableButton2Menu2: true,
            disableButton1Menu3: true,
            disableButton2Menu3: true,
        }
    },
    created() {
        this.$store.dispatch('getSettingMenus');
    },
    computed: {
        ...mapGetters({
            Menu1: 'getMenu1',
            Menu2: 'getMenu2',
            Menu3: 'getMenu3',
        })
    },
    methods: {
        clickMenuImage1(data) {
            this.imageMenu1.id = data.id
        },
        clickMenuImage2(data) {
            this.imageMenu2.id = data.id
        },
        clickMenuImage3(data) {
            this.imageMenu3.id = data.id
        },
        selectImage(event) {
          this.imageMenu1.imageFile = event.target.files[0]

          let input = this.$refs.fileUploadMenu1
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {

                const data = new FormData();
                    data.append('imageUpload', this.imageMenu1.imageFile);

                    const query = {
                        id: this.imageMenu1.id,
                        data: data,
                    }

                this.$store.dispatch('updateImageMenu', query).then(() => {
                    this.imageMenu1.imagePreviewUrl = e.target.result
                    this.imageMenu1.imagePreviewProcess = true
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
          this.imageMenu2.imageFile = event.target.files[0]

          let input = this.$refs.fileUploadMenu2
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {

                const data = new FormData();
                    data.append('imageUpload', this.imageMenu2.imageFile);

                    const query = {
                        id: this.imageMenu2.id,
                        data: data,
                    }

                this.$store.dispatch('updateImageMenu', query).then(() => {
                    this.imageMenu2.imagePreviewUrl = e.target.result
                    this.imageMenu2.imagePreviewProcess = true
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
        selectImage3(event) {
          this.imageMenu3.imageFile = event.target.files[0]

          let input = this.$refs.fileUploadMenu3
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {

                const data = new FormData();
                    data.append('imageUpload', this.imageMenu3.imageFile);

                    const query = {
                        id: this.imageMenu3.id,
                        data: data,
                    }

                this.$store.dispatch('updateImageMenu', query).then(() => {
                    this.imageMenu3.imagePreviewUrl = e.target.result
                    this.imageMenu3.imagePreviewProcess = true
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
        editMenu(data) {
            // console.log(data)
            switch (data.name) {
                case 'Menu 1':
                        this.beforeTextMenu1 = data.value
                        this.disableButton1Menu1 = !this.disableButton1Menu1
                    break;
                case 'Menu 2':
                        this.beforeTextMenu2 = data.value
                        this.disableButton1Menu2 = !this.disableButton1Menu2
                    break;
                case 'Menu Deskripsi 2':
                        this.beforeTextMenu2 = data.value
                        this.disableButton2Menu2 = !this.disableButton2Menu2
                    break;
                case 'Menu 3':
                        this.beforeTextMenu3 = data.value
                        this.disableButton1Menu3 = !this.disableButton1Menu3
                    break;
                case 'Menu Deskripsi 3':
                        this.beforeTextMenu3 = data.value
                        this.disableButton2Menu3 = !this.disableButton2Menu3
                    break;
            
                default:
                    this.beforeTextMenu1 = data.value
                    this.disableButton2Menu1 = !this.disableButton2Menu1
                break;
            }
        },
        // editMenu1() {
        //     this.beforeLogoTitle = this.LogoTitle.value
        // },
        cancelEditMenu(data) {
            switch (data.name) {
                case 'Menu 1':
                        this.Menu1[0].value = this.beforeTextMenu1
                        this.disableButton1Menu1 = !this.disableButton1Menu1
                    break;
                case 'Menu 2':
                        this.Menu2[0].value = this.beforeTextMenu2
                        this.disableButton1Menu2 = !this.disableButton1Menu2
                    break;
                case 'Menu Deskripsi 2':
                        this.Menu2[1].value = this.beforeTextMenu2
                        this.disableButton2Menu2 = !this.disableButton2Menu2
                    break;
                case 'Menu 3':
                        this.Menu3[0].value = this.beforeTextMenu3
                        this.disableButton1Menu3 = !this.disableButton1Menu3
                    break;
                case 'Menu Deskripsi 3':
                        this.Menu3[1].value = this.beforeTextMenu3
                        this.disableButton2Menu3 = !this.disableButton2Menu3
                    break;
            
                default:
                    this.Menu1[1].value = this.beforeTextMenu1
                    this.disableButton2Menu1 = !this.disableButton2Menu1
                break;
            }
        },
        updateText(data) {
            // console.log(data)
            this.$store.dispatch('updateMenuText', data).then(() => {
                
                this.$swal.fire({
                    text: 'Berhasil Update Text!',
                    icon: 'success',
                    position: 'bottom-right',
                    showConfirmButton: false,
                    timer: 1500
                });

                switch (data.name) {
                    case 'Menu 1':
                            this.disableButton1Menu1 = !this.disableButton1Menu1
                        break;
                    case 'Menu 2':
                            this.disableButton1Menu2 = !this.disableButton1Menu2
                        break;
                    case 'Menu Deskripsi 2':
                            this.disableButton2Menu2 = !this.disableButton2Menu2
                        break;
                    case 'Menu 3':
                            this.disableButton1Menu3 = !this.disableButton1Menu3
                        break;
                    case 'Menu Deskripsi 3':
                            this.disableButton2Menu3 = !this.disableButton2Menu3
                        break;
                
                    default:
                        this.disableButton2Menu1 = !this.disableButton2Menu1
                    break;
                }

            }).catch(() => {
                this.$swal.fire({
                    text: 'Gagal Update Text!',
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
            <div class="relative z-0 w-full mb-6 group shadow-lg">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Menu {{ Menu1[0] ? Menu1[0].value : 'Loading' }}</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                    <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                    <!-- {{ Menu1[2].imageUrl }} -->
                    <img v-if="!imageMenu1.imagePreviewUrl" class="imagePreview w-40 h-40" :src="Menu1[2] ? Menu1[2].imageUrl : null" />
                    <img v-else class="imagePreview w-40 h-54" :hidden="!imageMenu1.imagePreviewProcess" :src="imageMenu1.imagePreviewUrl" />

                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label for="file-upload-menu1" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>{{ imageMenu1.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                        <input id="file-upload-menu1" name="file-upload-menu1" type="file" class="sr-only" ref="fileUploadMenu1" @click="clickMenuImage1(Menu1[2])" @input="selectImage"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                <div v-for="(item, index) in Menu1" :key="index">
                    <label v-if="item.imageUrl == null" for="title-menus" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">{{ item.name }}</label>
                    <div v-if="item.imageUrl == null" class="relative flex flex-wrap items-stretch mb-2">
                        <input
                            type="text"
                            id="title-menus"
                            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            v-model="item.value"
                            :disabled="item.name == 'Menu 1' ? disableButton1Menu1 : disableButton2Menu1"
                            placeholder="Title Menu 1" />
                        <button
                            class="z-[2] inline-block rounded-none bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 1' ? disableButton1Menu1 : disableButton2Menu1"
                            @click="editMenu(item)"
                            data-te-ripple-init>
                            Edit
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 1' ? !disableButton1Menu1 : !disableButton2Menu1"
                            @click="updateText(item)"
                            data-te-ripple-init>
                            Update
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 1' ? !disableButton1Menu1 : !disableButton2Menu1"
                            @click="cancelEditMenu(item)"
                            data-te-ripple-init>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="relative z-0 w-full mb-6 group shadow-lg">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Menu {{ Menu2[0] ? Menu2[0].value : 'Loading' }}</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                    <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                    <!-- {{ Menu2[2].imageUrl }} -->
                    <img v-if="!imageMenu2.imagePreviewUrl" class="imagePreview w-40 h-40" :src="Menu2[2] ? Menu2[2].imageUrl : null" />
                    <img v-else class="imagePreview w-40 h-40" :hidden="!imageMenu2.imagePreviewProcess" :src="imageMenu2.imagePreviewUrl" />

                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label for="file-upload-menu2" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>{{ imageMenu2.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                        <input id="file-upload-menu2" name="file-upload-menu2" type="file" class="sr-only" ref="fileUploadMenu2" @click="clickMenuImage2(Menu2[2])" @input="selectImage2"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                <div v-for="(item, index) in Menu2" :key="index">
                    <label v-if="item.imageUrl == null" for="title-menus" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">{{ item.name }}</label>
                    <div v-if="item.imageUrl == null" class="relative flex flex-wrap items-stretch mb-2">
                        <input
                            type="text"
                            id="title-menus"
                            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            v-model="item.value"
                            :disabled="item.name == 'Menu 2' ? disableButton1Menu2 : disableButton2Menu2"
                            placeholder="Title Menu 2" />
                        <button
                            class="z-[2] inline-block rounded-none bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 2' ? disableButton1Menu2 : disableButton2Menu2"
                            @click="editMenu(item)"
                            data-te-ripple-init>
                            Edit
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 2' ? !disableButton1Menu2 : !disableButton2Menu2"
                            @click="updateText(item)"
                            data-te-ripple-init>
                            Update
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 2' ? !disableButton1Menu2 : !disableButton2Menu2"
                            @click="cancelEditMenu(item)"
                            data-te-ripple-init>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <div class="relative z-0 w-full mb-6 group shadow-lg">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Menu {{ Menu3[0] ? Menu3[0].value : 'Loading' }}</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                    <!-- <PhotoIcon :show="false" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> -->
                    <!-- {{ Menu3[2].imageUrl }} -->
                    <img v-if="!imageMenu3.imagePreviewUrl" class="imagePreview w-40 h-40" :src="Menu3[2] ? Menu3[2].imageUrl : null" />
                    <img v-else class="imagePreview w-40 h-54" :hidden="!imageMenu3.imagePreviewProcess" :src="imageMenu3.imagePreviewUrl" />

                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label for="file-upload-menu3" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>{{ imageMenu3.imageFile ? "Change a Photo" : "Upload a Photo" }}</span>
                        <input id="file-upload-menu3" name="file-upload-menu3" type="file" class="sr-only" ref="fileUploadMenu3" @click="clickMenuImage3(Menu3[2])" @input="selectImage3"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                <div v-for="(item, index) in Menu3" :key="index">
                    <label v-if="item.imageUrl == null" for="title-menus" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">{{ item.name }}</label>
                    <div v-if="item.imageUrl == null" class="relative flex flex-wrap items-stretch mb-2">
                        <input
                            type="text"
                            id="title-menus"
                            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            v-model="item.value"
                            :disabled="item.name == 'Menu 3' ? disableButton1Menu3 : disableButton2Menu3"
                            placeholder="Title Menu 3" />
                        <button
                            class="z-[2] inline-block rounded-none bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 3' ? disableButton1Menu3 : disableButton2Menu3"
                            @click="editMenu(item)"
                            data-te-ripple-init>
                            Edit
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 3' ? !disableButton1Menu3 : !disableButton2Menu3"
                            @click="updateText(item)"
                            data-te-ripple-init>
                            Update
                        </button>
                        <button
                            class="z-[2] inline-block rounded-r bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            type="button"
                            v-if="item.name == 'Menu 3' ? !disableButton1Menu3 : !disableButton2Menu3"
                            @click="cancelEditMenu(item)"
                            data-te-ripple-init>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>