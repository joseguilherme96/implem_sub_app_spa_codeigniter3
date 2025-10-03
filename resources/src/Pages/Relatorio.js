import { VDataTable, VContainer, VTextField, VCard, VCardTitle, VRow, VCol, VSelect, VBtn } from 'vuetify/components'

export const Relatorio = {

    components: {
        VDataTable,
        VContainer,
        VTextField,
        VCard,
        VCardTitle,
        VRow,
        VCol,
        VSelect,
        VBtn
    },


    setup() {

        const dadosMockados = [

            {
                id: 1,
                cliente: 'VY Host',
                valor: 'R$ 1000.00',
                codPagto: '30/60/90 DDL',
                status: 'Aprovado',
                data: '02/10/2025',
                validade: "30 dias"
            },
            {
                id: 2,
                cliente: 'ZX Host',
                valor: 'R$ 2510.00',
                codPagto: '30/60/90 DDL',
                status: 'Aprovado',
                data: '02/10/2025',
                validade: "30 dias"
            }

        ]

        return {

            dadosMockados

        }


    },

    template: `
        <v-container class="mt-0 pt-0">
            <h1 style="font-weight:100; margin-top: 0; margin-bottom: 16px;">Relatório</h1>
            <v-card>
                <v-card-title class="pb-5">
                    <v-row>
                        <v-col cols="12" sm="4" md="4">
                            <v-text-field label="Nº Orçamento :" type="number"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-select label="Cliente :"></v-select>
                        </v-col>
                        <v-col cols="12" sm="4" md="2">
                            <v-text-field label="Data Inicial :" type='date'></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4" md="2">
                            <v-text-field label="Data Final :" type='date'></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class='justify-end'>
                        <v-btn color="#CDC9C9">Buscar Orçamento</v-btn>
                    </v-row>
                </v-card-title>
            </v-card>
            <v-data-table :items="dadosMockados"></v-data-table>
        </v-container>
    
    `
}