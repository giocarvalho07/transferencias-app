# transferencias-app 📲

## Visão Geral

Este projeto consiste em um sistema para agendamento de transferências financeiras, desenvolvido como parte de uma avaliação técnica. Ele é composto por duas partes principais:

-   **Backend:** Uma API RESTful construída com Spring Boot ```(https://github.com/giocarvalho07/transferApp)```
-   **Frontend:** Uma interface de usuário moderna e reativa construída com Vue.js ```(https://github.com/giocarvalho07/transferencias-app)```

Este README foca na parte do **Frontend**, construída com Vue.js.

## Frontend

O frontend é uma Single Page Application (SPA) desenvolvida utilizando o framework Vue.js. Ele permite aos usuários:

-   Agendar novas transferências financeiras, fornecendo dados como conta de origem, conta de destino, valor e data da transferência.
-   Visualizar um extrato de todas as transferências agendadas.

A interface é minimalista, com um layout em preto e branco refinado e utiliza ícones simples para melhorar a usabilidade. O aplicativo é responsivo e se adapta a diferentes tamanhos de tela.

### Tecnologias Utilizadas

-   **Vue.js 3:** Framework JavaScript progressivo para construção de interfaces de usuário.
-   **Vue Router:** Para navegação entre as diferentes telas da aplicação (Agendamento e Extrato).
-   **Axios:** Para realizar requisições HTTP ao backend Spring Boot.
-   **CSS:** Estilização básica com um tema minimalista em preto e branco e media queries para responsividade.
-   **Ícones Unicode:** Utilizados para indicações visuais simples.

### Estrutura do Projeto

transferencias-app/  </br>
├── public/ </br>
│   └── index.html </br>
│   └── ... (outros arquivos públicos) </br>
└── src/ </br>
├── assets/ </br>
│   └── logo.png (se você adicionar um logo) </br>
│   └── main.css (estilos globais) </br>
├── components/ </br>
│   ├── AgendamentoTransferencia.vue (formulário de agendamento) </br>
│   └── ExtratoTransferencias.vue (lista de transferências) </br>
├── router/ </br>
│   └── index.js (configuração das rotas) </br>
├── store/ </br>
│   └── index.js (se você estiver usando Vuex para gerenciamento de estado) </br>
├── App.vue (componente principal da aplicação) </br>
└── main.js (ponto de entrada da aplicação) </br>

### Configuração

Antes de executar o frontend, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

1.  **Clonar o repositório:**

    ```bash
    git clone [https://github.com/giocarvalho07/transferencias-app.git](https://github.com/giocarvalho07/transferencias-app.git)
    cd transferencias-app/
    ```

2.  **Instalar as dependências do frontend:**

    ```bash
    cd frontend
    npm install
    # ou
    yarn install
    ```

### Execução

1.  **Iniciar o servidor de desenvolvimento:**

    ```bash
    npm run serve
    # ou
    yarn serve
    ```

    Isso iniciará o servidor de desenvolvimento do Vue.js, geralmente acessível em `http://localhost:3000`.

### Build para Produção

Para gerar os arquivos estáticos otimizados para produção:

```bash
npm run build
# ou
yarn build
