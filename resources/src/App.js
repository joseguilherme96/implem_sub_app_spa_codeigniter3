import { RouterView } from 'vue-router'
import routerViewCodeigniter from './Router/routerViewCodeigniter'

export const App = {

    components: {

        RouterView,
        routerViewCodeigniter

    },

    setup() {

        return {

            routerViewCodeigniter

        }
    },

    template: `

        <router-view></router-view>
        <router-view-codeigniter></router-view-codeigniter>
    `

}