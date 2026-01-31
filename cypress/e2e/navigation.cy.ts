describe('Navigation and layout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Header', () => {
    it('renders top bar with opening hours and contact info', () => {
      cy.get('header')
        .first()
        .parent()
        .within(() => {
          cy.contains(/Mon - Fri|opening|hours/i).should('be.visible');
          cy.get('a[href^="mailto:"]').should('be.visible');
          cy.get('a[href^="tel:"]').should('be.visible');
        });
    });

    it('renders main nav with logo', () => {
      cy.get('header a[href="/"]').find('img').should('exist');
    });

    it('navigates to Home, About, Contact via desktop nav', () => {
      cy.viewport(1280, 720);
      cy.contains('nav a', 'Home').click();
      cy.url().should('include', '/');
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.contains('nav a', 'Contact').click();
      cy.url().should('include', '/contact');
    });

    it('shows Enrollment and Sign in when not logged in', () => {
      cy.contains('a', 'Enrollment').should('be.visible');
      cy.contains('a', 'Sign in').should('be.visible');
    });

    it('opens mobile menu and navigates on small viewport', () => {
      cy.viewport(375, 667);
      cy.get('button[aria-label="Open menu"]').click();
      cy.contains('Enrollment').click();
      cy.url().should('include', '/admission');
    });
  });

  describe('Footer', () => {
    it('renders footer with app name and address', () => {
      cy.get('footer').within(() => {
        cy.contains('ESSL Template').should('be.visible');
        cy.contains('Gbemidele').should('be.visible');
      });
    });

    it('Quick links navigate correctly', () => {
      cy.get('footer').within(() => {
        cy.contains('a', 'Home').click();
      });
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      cy.visit('/');
      cy.get('footer').within(() => {
        cy.contains('a', 'About').click();
      });
      cy.url().should('include', '/about');

      cy.visit('/');
      cy.get('footer').within(() => {
        cy.contains('a', 'Contact').click();
      });
      cy.url().should('include', '/contact');
    });

    it('renders social links', () => {
      cy.get('footer').within(() => {
        cy.get('a[href*="facebook"]').should('exist');
        cy.get('a[href*="instagram"]').should('exist');
      });
    });

    it('renders contact phone and email in footer', () => {
      cy.get('footer').within(() => {
        cy.get('a[href^="tel:"]').should('exist');
        cy.get('a[href^="mailto:"]').should('exist');
      });
    });

    it('shows current year in copyright', () => {
      const year = new Date().getFullYear();
      cy.get('footer').contains(year.toString()).should('be.visible');
    });
  });

  describe('Cross-page navigation', () => {
    it('header logo returns to home from any main page', () => {
      cy.visit('/about');
      cy.get('header a[href="/"]').first().click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      cy.visit('/contact');
      cy.get('header a[href="/"]').first().click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  });
});
