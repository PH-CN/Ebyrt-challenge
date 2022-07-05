 **Ebyrt Challenge**

Esse é o repositório do desafio técnico da Ebyrt, que consiste em uma lista de tarefas que tem como intuito ajudar a organizar o dia a dia das pessoas, após se registrar e fazer login, você terá uma lista exclusiva para você que te possibilitará adicionar qualquer tarefa. Como o projeto ainda está em desenvolvimento, no momento apenas a funcionalidade de adicionar itens na lista está disponível, mas em breve também serão adicionadas as funcionalidades de poder editar algum item da lista, excluir algum item da lista, ordenar com vários filtros, e também de marcar se a tarefa está em andamento ou se foi concluída.

## **Dependências**

- [NodeJS](https://nodejs.org/en/download)
- [VS Code](https://code.visualstudio.com)
- [MySQL](https://www.mysql.com/downloads)

## **Como rodar**

**Por enquanto ainda só é possível rodar localmente devido à problemas de deploy no heroku**

1. Clone o repositório:
`git clone git@github.com:PH-CN/Ebyrt-challenge.git`

2. Vá para a pasta de Front-end e instale as dependências:
`cd front-end && npm install`

3. Volte para a raiz, entra na pasta do back-end e instale as dependências:
`cd ..`
`cd back-end && npm install`

4. Crie o arquivo .env na pasta do **back-end**:
`touch .env`
Nele você deverá colocar as seguintes variáveis: MYSQL_USER=(seu usuario do mysql) MYSQL_PASSWORD=(sua senha do mysql) MYSQL_DATABASE=EbyrtChallenge e HOSTNAME=localhost

5. Entre novamente nas pastas e inicie o aplicative do Front-end e a API:
`npm start`
`cd ..`
`cd front-end && npm start`
