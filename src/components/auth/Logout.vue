<template>
    <div class="logout-page">
        logout
    </div>
</template>

<script>
// import router from '@/router'
export default {
    name: 'logout-page',
    created() {
        this.$store.dispatch('logout').then(() => {
            this.$emit('retriveUser', null)
            // router.push({name: 'LoginPage'})
            return window.location.href = '/login';
        })
    }
}
</script>