it('Deletar um card', () => {
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
      method: 'GET',
      url: `${Cypress.env('trello_boards_url')}/${boardId}/lists`,
      qs: {
        key: Cypress.env('trello_api_key'),
        token: Cypress.env('trello_api_token')
      }
    }).then((listsResponse) => {
      const listId = listsResponse.body[0].id; // Seleciona a primeira lista do board

      cy.request({
        method: 'GET',
        url: `${Cypress.env('trello_boards_url')}/${boardId}/cards`,
        qs: {
          key: Cypress.env('trello_api_key'),
          token: Cypress.env('trello_api_token')
        }
      }).then((cardsResponse) => {
        if (cardsResponse.body.length > 0) {
          const cardId = cardsResponse.body[0].id; // Seleciona o primeiro card da lista

          cy.request({
            method: 'DELETE',
            url: `${Cypress.env('trello_cards_url')}/${cardId}`,
            qs: {
              key: Cypress.env('trello_api_key'),
              token: Cypress.env('trello_api_token')
            },
            failOnStatusCode: false
          }).then((deleteCardResponse) => {
            expect(deleteCardResponse.status).to.eq(200);
          });
        } else {
          cy.log('No cards found in the list');
          assert.fail('No cards found in the list');
        }
      });
    });
  });
});
