import { RouterView } from 'vue-router'
import routerViewCodeigniter from './Router/routerViewCodeigniter'
import { VApp, VBtn, VAppBar, VAppBarTitle, VContainer, VMain, VResponsive } from 'vuetify/components'

export const App = {

    components: {

        RouterView,
        routerViewCodeigniter,
        VApp,
        VBtn,
        VAppBar,
        VAppBarTitle,
        VContainer,
        VMain,
        VResponsive

    },

    setup() {

        return {

            routerViewCodeigniter

        }
    },

    template: `
        <v-app style="height:70px !important">
            <v-app-bar color="#CDC9C9" title="Modern System">
            </v-app-bar>
        </v-app>
        <router-view></router-view>
        <router-view-codeigniter></router-view-codeigniter>
    `

}