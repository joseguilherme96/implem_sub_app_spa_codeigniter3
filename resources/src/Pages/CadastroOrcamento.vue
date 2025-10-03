<template>
    <v-container class="mt-0 pt-0">
        <h1 style="font-weight:100; color:gray; margin-top: 0; margin-bottom: 16px;">Cadastro de Orçamento</h1>

        <v-card>
            <v-card-title class="pb-5">
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Cliente :" v-model="orcamento.cliente" required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Data :" type="date" v-model="orcamento.data" required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Valor :" type="number" prefix="R$" v-model="orcamento.valor" required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-select label="Status :" :items="statusOptions" v-model="orcamento.status" required>
                        </v-select>
                    </v-col>
                </v-row>

                <v-row class="justify-end">
                    <v-btn color="#CDC9C9" @click="salvarOrcamento">
                        Salvar Orçamento
                    </v-btn>
                </v-row>
            </v-card-title>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { VContainer, VCard, VCardTitle, VRow, VCol, VTextField, VSelect, VBtn } from 'vuetify/components';

const orcamento = ref({
    cliente: '',
    data: '',
    valor: '',
    status: ''
})

const statusOptions = ['Pendente', 'Aprovado', 'Rejeitado']

const salvarOrcamento = () => {
    console.log('Orçamento salvo:', orcamento.value)
}

</script>