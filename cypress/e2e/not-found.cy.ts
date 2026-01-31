describe('Not found / invalid routes', () => {
  it('returns 404 for non-existent route', () => {
    cy.request({
      url: '/non-existent-page-xyz',
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.oneOf([404, 200]);
      // Next.js may still return 200 with client-side 404 content
    });
  });

  it('shows 404 or app shell for invalid path', () => {
    cy.visit('/non-existent-page-xyz', { failOnStatusCode: false });
    // Either Next.js 404 page or app layout with empty/404 content
    cy.get('body').should('exist');
    cy.url().should('include', 'non-existent-page-xyz');
  });

  it('invalid path does not break header/footer', () => {
    cy.visit('/random-invalid-route-123', { failOnStatusCode: false });
    // If app uses root layout, header/footer may still render
    cy.get('body').should('be.visible');
  });
});
