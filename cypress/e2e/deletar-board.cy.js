it('Deletar um board', () => {
  const url = Cypress.env('trello_members_fields_url');

  cy.request({
    method: 'GET',
    url: url,
    qs: {
      key: Cypress.env('trello_api_key'),
      token: Cypress.env('trello_api_token')
    }
  }).then((response) => {
    const boardId = response.body[0].id; // Seleciona o primeiro board da lista
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('trello_boards_url')}/${boardId}`,
      qs: {
        key: Cypress.env('trello_api_key'),
        token: Cypress.env('trello_api_token')
      }
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
    });
  });
});