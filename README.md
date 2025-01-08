# desafio-serasa

## Como rodar o teste

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Abra o Cypress:
   ```bash
   npx cypress open
   ```

3. Na interface do Cypress, selecione o arquivo de teste `createBoard.spec.js` para executá-lo.

## Configuração
1. Crie um arquivo cypress.env.json na raiz do projeto com as seguintes variáveis de ambiente:
{
  "trello_members_fields_url": "https://api.trello.com/1/members/me/boards",
  "trello_boards_url": "https://api.trello.com/1/boards",
  "trello_cards_url": "https://api.trello.com/1/cards",
  "trello_api_key": "sua_api_key",
  "trello_api_token": "seu_api_token",
  "trello_board_name": "NomeDoSeuBoard"
}

## Executando os Testes
Interface Gráfica do Cypress
Para abrir a interface gráfica do Cypress e executar os testes:
   ```bash
   npx cypress open
   ```

Modo Headless
Para executar os testes em modo headless:   
   ```bash
   npx cypress run
   ```
## Estrutura do Projeto
e2e: Contém os arquivos de teste.
cadastrar-board.cy.js: Teste para criar um novo board no Trello.
cadastrar-card.cy.js: Teste para criar um novo card no Trello.
deletar-board.cy.js: Teste para excluir um board no Trello.
deletar-card.cy.js: Teste para excluir um card no Trello.
fixtures: Contém dados de teste.
plugins: Contém plugins do Cypress.
questions: Contém as questões do desafio resolvidas.
screenhots: Contém prints de quando rodamos os testes por headless.
support: Contém comandos e configurações de suporte do Cypress.   
