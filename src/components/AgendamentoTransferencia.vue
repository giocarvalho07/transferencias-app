<template>
  <div>
    <form @submit.prevent="agendar">
      <h2><span aria-hidden="true"></span> Agendar Transferência</h2>
      <br>
      <div>
        <label for="contaOrigem"><span aria-hidden="true"></span> Conta de Origem:</label>
        <input type="text" id="contaOrigem" v-model="transferencia.contaOrigem" placeholder="XXXXXXXXXX" required>
      </div>
      <div>
        <label for="contaDestino"><span aria-hidden="true"></span> Conta de Destino:</label>
        <input type="text" id="contaDestino" v-model="transferencia.contaDestino" placeholder="XXXXXXXXXX" required>
      </div>
      <div>
        <label for="valor"><span aria-hidden="true"></span> Valor da Transferência (R$):</label>
        <input type="number" id="valor" v-model.number="transferencia.valor" step="0.01" required>
      </div>
      <div>
        <label for="dataTransferencia"><span aria-hidden="true"></span> Data da Transferência:</label>
        <input type="date" id="dataTransferencia" v-model="transferencia.dataTransferencia" required>
      </div>
      <button type="submit"><span aria-hidden="true">✅</span> Agendar</button>
      <div v-if="mensagem" :class="{'success': tipoMensagem === 'success', 'error': tipoMensagem === 'error'}">{{ mensagem }}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      transferencia: {
        contaOrigem: '0000000000', // Valor padrão para facilitar o teste
        contaDestino: '',
        valor: null,
        dataTransferencia: this.hoje()
      },
      mensagem: '',
      tipoMensagem: ''
    };
  },
  methods: {
    hoje() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async agendar() {
      try {
        const response = await axios.post('http://localhost:8080/api/transferencias', {
          contaDestino: this.transferencia.contaDestino,
          valor: this.transferencia.valor,
          dataTransferencia: this.transferencia.dataTransferencia
        });
        this.mensagem = `Transferência agendada com sucesso! ID: ${response.data.id}, Taxa: R$ ${response.data.taxa}`;
        this.tipoMensagem = 'success';
        this.limparFormulario();
      } catch (error) {
        console.error('Erro ao agendar transferência:', error);
        this.mensagem = 'Erro ao agendar a transferência. Tente novamente.';
        this.tipoMensagem = 'error';
      } finally {
        setTimeout(() => {
          this.mensagem = '';
          this.tipoMensagem = '';
        }, 5000);
      }
    },
    limparFormulario() {
      this.transferencia.contaDestino = '';
      this.transferencia.valor = null;
      this.transferencia.dataTransferencia = this.hoje();
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 20px;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="date"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
  margin-top: 10px;
  font-weight: bold;
}

.error {
  color: red;
  margin-top: 10px;
  font-weight: bold;
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