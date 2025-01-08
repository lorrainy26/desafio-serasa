const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      trello_api_key: 'sua_api_key',
      trello_api_token: 'seu_api_token',
      trello_board_name: 'NomeDoSeuBoard',
      trello_api_url: 'https://api.trello.com/1',
      trello_members_url: 'https://api.trello.com/1/members/me/boards',
      trello_members_fields_url: 'https://api.trello.com/1/members/me/boards?fields=name,url',
      trello_boards_url: 'https://api.trello.com/1/boards',
      trello_cards_url: 'https://api.trello.com/1/cards'
    }
  },
});