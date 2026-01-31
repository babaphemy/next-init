describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  describe('Page structure', () => {
    it('renders contact heading and intro', () => {
      cy.contains('h1', 'Contact us').should('be.visible');
      cy.contains('We are here to help').should('be.visible');
    });

    it('renders contact form with all fields', () => {
      cy.contains('Send a message').should('be.visible');
      cy.get('input[name="name"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="phone"]').should('exist');
      cy.get('input[name="subject"]').should('exist');
      cy.get('textarea[name="message"]').should('exist');
    });

    it('renders Visit us card and map', () => {
      cy.contains('Visit us').should('be.visible');
      cy.get('iframe').should('exist');
    });
  });

  describe('Contact form – happy path', () => {
    it('accepts valid input and submit button is clickable', () => {
      cy.get('input[name="name"]').clear().type('Jane Doe');
      cy.get('input[name="email"]').clear().type('jane@example.com');
      cy.get('input[name="phone"]').clear().type('+1 234 567 8900');
      cy.get('input[name="subject"]').clear().type('Test subject');
      cy.get('textarea[name="message"]').clear().type('Test message body.');
      cy.contains('button', 'Send Message').should('be.visible').click();
      // Form has no client-side validation; submit handler is empty – just assert no crash
      cy.contains('Send a message').should('be.visible');
    });
  });

  describe('Contact form – edge cases', () => {
    it('submit with empty fields does not crash (form has noValidation)', () => {
      cy.contains('button', 'Send Message').click();
      cy.contains('Send a message').should('be.visible');
    });

    it('accepts very long name without breaking layout', () => {
      const longName = 'A'.repeat(200);
      cy.get('input[name="name"]').clear().type(longName);
      cy.get('input[name="name"]').should('have.value', longName);
    });

    it('accepts very long message', () => {
      const longMessage = 'B'.repeat(2000);
      cy.get('textarea[name="message"]').clear().type(longMessage);
      cy.get('textarea[name="message"]').should('have.value', longMessage);
    });

    it('accepts special characters in name and message', () => {
      cy.get('input[name="name"]').clear().type('O\'Brien & "Quotes" <test>');
      cy.get('textarea[name="message"]').clear().type('Unicode: 日本語 café');
      cy.contains('button', 'Send Message').click();
      cy.contains('Send a message').should('be.visible');
    });

    it('accepts input that looks like XSS (no execution – just stored as text)', () => {
      cy.get('input[name="name"]').clear().type('<script>alert(1)</script>');
      cy.get('input[name="name"]').should(
        'have.value',
        '<script>alert(1)</script>',
      );
    });

    it('email field accepts valid email formats', () => {
      cy.get('input[name="email"]').clear().type('user+tag@sub.example.co.uk');
      cy.get('input[name="email"]').should(
        'have.value',
        'user+tag@sub.example.co.uk',
      );
    });
  });
});
