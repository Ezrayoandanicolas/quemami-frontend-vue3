<template>
    <div class="dashboard text-white m-6">
        <div class="w-full py-4 px-4 text-left bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <add-menu></add-menu>
        </div>
    </div>
</template>

<script>
import AddMenu from './AddMenu.vue'

export default {
    name: 'dashboard-page',
    data () {
        return {
            user: ''
        }
    },
    created() {
        this.$store.dispatch('checkAuth').then((res) => {
            this.$emit('retriveUser', res.data)
        }).catch((err) => {
            console.log(err)
        })
    },
    methods: {
        
    },
    components: {
        AddMenu
    }
}
</script>