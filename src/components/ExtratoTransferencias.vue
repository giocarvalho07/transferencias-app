<template>
  <div>
    <h2><span aria-hidden="true"></span> Extrato de Transferências Agendadas</h2>
    <div v-if="loading">Carregando transferências... <span aria-hidden="true">🔄</span></div>
    <div v-else-if="error">{{ error }} <span aria-hidden="true">⚠️</span></div>
    <div v-else-if="transferencias.length > 0">
      <table>
        <thead>
          <tr>
            <th><span aria-hidden="true"></span> ID</th>
            <th><span aria-hidden="true"></span> Conta Origem</th>
            <th><span aria-hidden="true"></span> Conta Destino</th>
            <th><span aria-hidden="true"></span> Valor (R$)</th>
            <th><span aria-hidden="true"></span> Taxa (R$)</th>
            <th><span aria-hidden="true"></span> Data Transferência</th>
            <th><span aria-hidden="true"></span> Data Agendamento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transferencia in transferencias" :key="transferencia.id">
            <td>{{ transferencia.id }}</td>
            <td>{{ transferencia.contaOrigem }}</td>
            <td>{{ transferencia.contaDestino }}</td>
            <td>{{ transferencia.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ transferencia.taxa.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ formatarData(transferencia.dataTransferencia) }}</td>
            <td>{{ formatarData(transferencia.dataAgendamento) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Nenhuma transferência agendada. <span aria-hidden="true">ℹ️</span></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      transferencias: [],
      loading: false,
      error: null
    };
  },
  mounted() {
    this.carregarTransferencias();
  },
  methods: {
    async carregarTransferencias() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/api/transferencias');
        this.transferencias = response.data;
      } catch (err) {
        console.error('Erro ao carregar transferências:', err);
        this.error = 'Erro ao carregar o extrato de transferências. Tente novamente mais tarde.';
      } finally {
        this.loading = false;
      }
    },
    formatarData(dataISO) {
      if (!dataISO) return '';
      const data = new Date(dataISO);
      return data.toLocaleDateString('pt-BR');
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f0f0f0;
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.loading, .error {
  margin-top: 10px;
  font-style: italic;
  color: #777;
}

.success {
  color: green;
  background-color: #e6ffe6; /* Verde claro */
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #b3ffb3;
  border-radius: 4px;
  font-weight: bold;
}

.error {
  color: red;
  background-color: #ffe6e6; /* Vermelho claro */
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ffb3b3;
  border-radius: 4px;
  font-weight: bold;
}
</style>