import { createRouter, createWebHistory } from 'vue-router';
import AgendamentoTransferencia from '../components/AgendamentoTransferencia.vue';
import ExtratoTransferencias from '../components/ExtratoTransferencias.vue';

const routes = [
  {
    path: '/',
    name: 'Agendamento',
    component: AgendamentoTransferencia
  },
  {
    path: '/extrato',
    name: 'Extrato',
    component: ExtratoTransferencias
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;