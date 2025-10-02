import { computed, onMounted, ref } from "vue";
import routesToCodeigniter from "./routesToCodeigniter";


export const routerViewCodeigniter = {

    setup() {

        const caminhoAtual = ref(null);
        const viewAtual = computed(() => {


            return routesToCodeigniter[caminhoAtual.value]


        })
        const setHash = () => {

            caminhoAtual.value = `/${window.location.hash.split("/")[1]}`


        }
        const adicionarEventoHashChange = () => {

            window.addEventListener('hashchange', () => {

                setHash();

            })

        }

        onMounted(() => {

            setHash();
            adicionarEventoHashChange();

        })

        return {

            viewAtual

        }


    },
    template: `
            <component :is="viewAtual" ></component>
        `



}

export default routerViewCodeigniter