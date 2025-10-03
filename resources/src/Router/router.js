import { createRouter, createWebHistory } from 'vue-router'
import { Relatorio } from '../Pages/Relatorio.js'
import CadastroOrcamento from '../Pages/CadastroOrcamento.vue'

const routes = [
    {
        path: '/relatorio',
        name: 'relatorio',
        component: Relatorio
    },
    {
        path: '/cadastro-orcamento',
        name: 'cadastro-orcamento',
        component: CadastroOrcamento
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