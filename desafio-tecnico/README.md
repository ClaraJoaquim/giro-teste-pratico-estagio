# Desafio Tecnico Front End

O **Currency Hub** é um painel financeiro desenvolvido como parte do desafio técnico para a vaga de estágio em desenvolvimento da Giro.Tech. Este projeto foi criado utilizando o [Angular CLI](https://angular.dev/) e tem como objetivo exibir informações financeiras atualizadas, como taxas de juros e cotações monetárias, além de oferecer um conversor de moedas.

## Requisitos

Antes de executar o projeto é necessário que você possua instalado:

- **[Node.js](https://nodejs.org/en/)** (versão 20 ou superior)
- **npm** (geralmente instalado junto com o Node.js)
- **[Angular CLI](https://angular.io/cli)** (versão 19)
> **Observação:** Se você não tiver o Angular CLI instalado globalmente, instale-o com:

    npm install -g @angular/cli

## Como Obter o Projeto

Você pode obter o projeto de duas maneiras:

### 1. Clonando o Repositório

Abra o terminal e execute o comando abaixo para clonar o repositório do GitHub:

    git clone https://github.com/ClaraJoaquim/currency-hub.git

### 2. Baixando como ZIP

1. Acesse o repositório no GitHub.
2. Clique no botão **"Code"** e selecione **"Download ZIP"**.
3. Após o download, descompacte o arquivo ZIP na pasta de sua preferência.

## Abrindo o Projeto no Seu Editor de Código

1. Abra o editor de código de sua preferência (como Visual Studio Code, Sublime Text, Atom, etc.).
2. Abra a pasta do projeto que você clonou ou descompactou.

## Instalando as Dependências

1. Abra o terminal integrado do seu editor ou o terminal do sistema.

2. Navegue até a pasta do projeto (caso ainda não esteja nela):

    ```bash
    cd/currency-hub

3. Instale as dependências do projeto executando:

    ```bash
    npm install

## Executando o Projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento com o comando:

    ng serve

Após executar o comando, o terminal exibirá uma mensagem informando que o servidor está rodando. Abra o navegador e acesse:

    http://localhost:4200


## Como Testar o Projeto

### 1. Home

Estarão disponibilizados os dados das cotações monetárias e das taxas de juros, para atualizar as informações basta clicar no botão "Atualizar Dados".

### 2. Conversor de Moedas

É possível realizar conversões entre moedas preenchendo os campos disponíveis:

- Valor: Inserir a quantia desejada.
- Moeda de Origem: Selecionar a moeda que deseja converter.
- Trocar Moedas: Botão para inverter origem e destino.
- Moeda de Destino: Selecionar a moeda que deseja realizar a conversão.
- Converter: Botão que realiza a conversão.

### 3. Sobre

Esta página contém informações relevantes acerca do projeto.

---

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento do front-end.
- **Bootstrap**: Framework CSS para criação de layouts responsivos e design moderno.
- **HG Brasil Finance API**: API utilizada para obter as cotações de moedas e taxas de juros.
- **JavaScript/TypeScript**: Linguagens usadas para manipulação de dados e interações no front-end.

## Funcionalidades do Projeto

- **Exibição de Taxas e Cotações:**  
  Visualize as taxas de juros brasileiras e as cotações das moedas, com variações positivas exibidas em **verde** e negativas em **vermelho**.

- **Atualização de Dados:**  
  Utilize o botão **"Atualizar Dados"** para buscar as informações mais recentes diretamente da **HG Brasil Finance API**.

- **Conversor de Moedas:**  
  Converta valores entre diferentes moedas inserindo o valor desejado e selecionando as moedas de origem e destino.

## Estrutura do Projeto

### `src/app/`  
Este diretório contém toda a lógica do Currency Hub, incluindo as páginas, serviços e componentes compartilhados.  

### `src/app/pages/`  
Aqui estão as principais páginas do aplicativo, que compõem a interface do usuário:  

- **`home/`**: Página inicial do projeto, onde o usuário pode vizualizar diferentes cotações de moedas e ver as taxas de juros do Brasil.
- **`conversor-de-moedas/`**: Página do conversor de moedas, que permite ao usuário converter valores entre diferentes moedas com base nas cotações atuais.
- **`sobre/`**: Página com informações sobre o Currency Hub e sua finalidade.  

### `src/app/services/`  
Os serviços do projeto ficam aqui, responsáveis pela lógica de negócio e integração com APIs.  

- **`finance.service.ts`**: Serviço responsável por buscar taxas de juros e câmbio. 
- **`toast.service.ts`**: Serviço utilizado para exibir notificações e alertas (`toasts`) no site.  

### `src/app/shared/components/`  
Esta pasta contém recursos reutilizáveis em todo o projeto, esses componentes podem ser utilizados em diferentes partes do site:  

- **`footer/`**: Componente do rodapé.  
- **`header/`**: Componente do cabeçalho.  
- **`toast/`**: Componente responsável por exibir notificações para os usuários.  

> **Observação:** O Currency Hub foi desenvolvido utilizando a abordagem tradicional do Angular, ou seja, com **NgModules**.  

---

## Considerações Finais

O **Currency Hub** foi desenvolvido com foco em boas práticas de desenvolvimento e em uma interface intuitiva. O projeto demonstra minha habilidade na integração com APIs, na criação de ferramentas financeiras úteis e no cuidado com a estilização, garantindo um design moderno e responsivo.
