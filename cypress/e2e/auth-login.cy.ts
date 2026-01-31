describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  describe('Page structure', () => {
    it('renders login heading and form', () => {
      cy.contains('h1', 'Login to your account').should('be.visible');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="password"]').should('exist');
      cy.contains('button', 'Login').should('be.visible');
    });

    it('renders Forgot password and Sign up links', () => {
      cy.contains('a', 'Forgot your password?').should('be.visible');
      cy.contains('a', 'Sign up').should('be.visible');
    });

    it('renders Google login button', () => {
      cy.contains('button', 'Login with Google').should('be.visible');
    });
  });

  describe('Navigation', () => {
    it('Forgot password link goes to reset page', () => {
      cy.contains('a', 'Forgot your password?').click();
      cy.url().should('include', '/user/reset');
    });

    it('Sign up link goes to register page', () => {
      cy.contains('a', 'Sign up').click();
      cy.url().should('include', '/user/register');
    });
  });

  describe('Validation – edge cases', () => {
    it('shows error when submitting empty form', () => {
      cy.contains('button', 'Login').click();
      cy.contains(/email|required/i).should('be.visible');
      cy.get('.text-red-500').should('be.visible');
    });

    it('shows error for invalid email format', () => {
      cy.get('input[name="email"]').clear().type('not-an-email');
      cy.get('input[name="password"]').clear().type('validpass123');
      cy.contains('button', 'Login').click();
      cy.contains(/valid email|email is required/i).should('be.visible');
    });

    it('shows error for empty email with password filled', () => {
      cy.get('input[name="email"]').clear();
      cy.get('input[name="password"]').clear().type('validpass123');
      cy.contains('button', 'Login').click();
      cy.get('.text-red-500').should('be.visible');
    });

    it('shows error for empty password with email filled', () => {
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear();
      cy.contains('button', 'Login').click();
      cy.contains(/password|required/i).should('be.visible');
    });

    it('shows error for password too short (min 4 chars)', () => {
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('123');
      cy.contains('button', 'Login').click();
      cy.contains(/too short|4 chars/i).should('be.visible');
    });

    it('accepts password with exactly 4 characters (min boundary)', () => {
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('1234');
      cy.contains('button', 'Login').click();
      // No validation error; may show invalid credentials toast
      cy.get('.text-red-500').should('not.exist');
    });
  });

  describe('Happy path (no real auth)', () => {
    it('form accepts valid-looking email and password and submits', () => {
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('validpass123');
      cy.contains('button', 'Login').click();
      // Either redirect or toast; no client-side validation error
      cy.get('.text-red-500').should('not.exist');
    });
  });
});
