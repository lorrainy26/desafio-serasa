it('Criando um novo card', () => {
  const url = Cypress.env('trello_members_fields_url');
  const apiKey = Cypress.env('trello_api_key');
  const apiToken = Cypress.env('trello_api_token');

  cy.request({
    method: 'GET',
    url: url,
    qs: {
      key: apiKey,
      token: apiToken
    }
  }).then((response) => {
    const boardId = response.body[0].id; // Seleciona o primeiro board da lista

    cy.request({
      method: 'GET',
      url: `${Cypress.env('trello_boards_url')}/${boardId}/lists`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((listsResponse) => {
      const listId = listsResponse.body[0].id; // Seleciona a primeira lista do board

      cy.request({
        method: 'POST',
        url: Cypress.env('trello_cards_url'),
        qs: {
          idList: listId,
          name: 'TestCard',
          key: apiKey,
          token: apiToken
        }
      }).then((cardResponse) => {
        const cardId = cardResponse.body.id;

        cy.request({
          method: 'GET',
          url: `${Cypress.env('trello_cards_url')}/${cardId}`,
          qs: {
            key: apiKey,
            token: apiToken
          }
        }).then((getCardResponse) => {
          expect(getCardResponse.status).to.eq(200);
          expect(getCardResponse.body).to.have.property('name', 'TestCard');
        });
      });
    });
  });
});
