describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('renders about heading and content', () => {
    cy.contains('h1', 'About us').should('be.visible');
    cy.contains('We are a team of professionals').should('be.visible');
    cy.contains('high-quality learning accessible').should('be.visible');
  });

  it('displays app name', () => {
    cy.contains('ESSL Template').should('be.visible');
  });

  it('renders about image with correct alt', () => {
    cy.get('img[alt="About us"]').should('exist').and('be.visible');
  });

  it('page images have valid src', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'src').and('not.be.empty');
    });
  });
});
