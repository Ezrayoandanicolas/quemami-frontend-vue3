<template>
  <div id="main" class="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
      >
        <component :is="dynamicNavigation" :user="this.user[0]"></component>
      </transition>
  </div>
</template>

<script>
// import { useCookie } from 'vue-cookie-next'
import { reactive } from 'vue';

import DefaultNavigation from './components/layouts/Navigation.vue'
import AdminNavigation from './components/layouts/AdminNavigation.vue'

export default {
  name: 'App',
  setup() {
    const data = reactive({});

    return {
        data,
    };
  },
  data() {
    return {
      backgroundCover: './assets/logo.png',
      user: this.getCookieUser || [],
      getCookieUser: this.$cookie.getCookie('__Auth_U'),
    }
  },
  computed: {
    dynamicNavigation() {
      switch (this.$route.meta.navigation) {
            case "guest":
                return DefaultNavigation;
            case "auth":
                return AdminNavigation;
            default:
                return DefaultNavigation;
        }
    }
  },
  // watch: {
  //   users: function (this.getCookieUser, this.user) {
  //     // here you can do whatever you want
  //   }
  // },
  methods: {
    async checkAuth() {
        await this.$store.dispatch('checkAuth').then((res) => {
          this.user.push(res.data)
          console.log(this.user)
        }).catch((err) => {
          console.log(err)
        });
      },
    // retriveUser(data) {
    //   this.user.push(data)
    // },
  },
  components: {
    // HelloWorld
    DefaultNavigation,
    AdminNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  width: 100%;
  height: 100%;
  background-image: url('./assets/background/background-quemami.png');
}
</style>
