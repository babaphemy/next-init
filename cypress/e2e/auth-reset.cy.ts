describe('Reset password page', () => {
  describe('Forgot password flow (no token)', () => {
    beforeEach(() => {
      cy.visit('/user/reset');
    });

    it('renders Forgot password heading and email form', () => {
      cy.contains('h1', 'Forgot your password?').should('be.visible');
      cy.get('input[name="email"]').should('exist');
      cy.contains('button', 'Send reset link').should('be.visible');
    });

    it('renders Back to login link', () => {
      cy.contains('a', 'Back to login').should('be.visible');
    });

    it('Back to login navigates to login page', () => {
      cy.contains('a', 'Back to login').click();
      cy.url().should('include', '/user/login');
    });

    it('shows validation error for empty email', () => {
      cy.contains('button', 'Send reset link').click();
      cy.get('.text-red-500').should('be.visible');
    });

    it('shows validation error for invalid email', () => {
      cy.get('input[name="email"]').clear().type('not-valid');
      cy.contains('button', 'Send reset link').click();
      cy.contains(/valid email/i).should('be.visible');
    });

    it('accepts valid email and submits (no API)', () => {
      cy.get('input[name="email"]').clear().type('user@example.com');
      cy.contains('button', 'Send reset link').click();
      cy.get('.text-red-500').should('not.exist');
      // May show success state or toast
    });
  });

  describe('Reset password flow (with token in URL)', () => {
    beforeEach(() => {
      cy.visit('/user/reset?token=test-token-123&email=user%40example.com');
    });

    it('renders Reset your password form with new password fields', () => {
      cy.contains('h1', 'Reset your password').should('be.visible');
      cy.get('input[name="password"]').should('exist');
      cy.get('input[name="confirmPassword"]').should('exist');
      cy.contains('button', 'Reset Password').should('be.visible');
    });

    it('renders Back to login link', () => {
      cy.contains('a', 'Back to login').should('be.visible');
    });

    it('shows error for password too short (min 4 chars)', () => {
      cy.get('input[name="password"]').clear().type('123');
      cy.get('input[name="confirmPassword"]').clear().type('123');
      cy.contains('button', 'Reset Password').click();
      cy.contains(/too short|4 chars/i).should('be.visible');
    });

    it('shows error when passwords do not match', () => {
      cy.get('input[name="password"]').clear().type('newpass123');
      cy.get('input[name="confirmPassword"]').clear().type('otherpass');
      cy.contains('button', 'Reset Password').click();
      cy.contains(/Passwords must match/i).should('be.visible');
    });

    it('accepts matching passwords and submits', () => {
      cy.get('input[name="password"]').clear().type('newpass123');
      cy.get('input[name="confirmPassword"]').clear().type('newpass123');
      cy.contains('button', 'Reset Password').click();
      cy.get('.text-red-500').should('not.exist');
    });
  });
});
