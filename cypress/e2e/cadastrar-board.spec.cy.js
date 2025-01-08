describe('Trello API - Criar Board', () => {
  it('Criando um novo board', () => {
    const url = Cypress.env('trello_boards_url');
    
    cy.request({
      method: 'POST',
      url: url,
      qs: {
        name: Cypress.env('trello_board_name'),
        key: Cypress.env('trello_api_key'),
        token: Cypress.env('trello_api_token')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', Cypress.env('trello_board_name'));
    });
  });
});
