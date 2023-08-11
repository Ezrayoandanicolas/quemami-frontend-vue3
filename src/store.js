import { createStore } from "vuex"

import Auth from '@/config/store/auth.js'
import Users from '@/config/store/users.js'
import Product from '@/config/store/product.js'
import Category from '@/config/store/category.js'
import Menus from '@/config/store/menu.js'
import Roles from '@/config/store/role.js'
import LogoSetting from '@/config/store/logoSetting.js'
import MenuSetting from '@/config/store/menuSetting'
import SocialSetting from '@/config/store/socialSetting'
import LandingPage from '@/config/store/landingPage'
// import { create } from "core-js/core/object"

const store = createStore({
    modules: {
        Auth,
        Roles,
        Users,
        Product,
        Category,
        Menus,
        LogoSetting,
        MenuSetting,
        SocialSetting,
        LandingPage,
    }
})

export default store