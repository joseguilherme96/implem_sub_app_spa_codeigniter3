import { createRouter, createWebHistory } from 'vue-router'
import { Relatorio } from '../Pages/Relatorio.js'

const routes = [
    {
        path: '/relatorio',
        name: 'relatorio',
        component: Relatorio
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export {

    router,
    routes

}