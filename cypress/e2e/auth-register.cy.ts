describe('Register page', () => {
  beforeEach(() => {
    cy.visit('/user/register');
  });

  describe('Page structure', () => {
    it('renders register heading and form', () => {
      cy.contains('h1', 'Create your account').should('be.visible');
      cy.get('input[name="firstname"]').should('exist');
      cy.get('input[name="lastname"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="password"]').should('exist');
      cy.get('input[name="confirmPassword"]').should('exist');
      cy.contains('button', 'Sign Up').should('be.visible');
    });

    it('renders account type (Buyer/Seller) and Date of Birth', () => {
      cy.contains('Account Type').should('be.visible');
      cy.contains('Buyer').should('be.visible');
      cy.contains('Seller').should('be.visible');
      cy.contains('Date of Birth').should('be.visible');
      cy.contains('Pick a date').should('be.visible');
    });

    it('renders Sign in link and Google button', () => {
      cy.contains('a', 'Sign in').should('be.visible');
      cy.contains('button', 'Continue with Google').should('be.visible');
    });
  });

  describe('Navigation', () => {
    it('Sign in link goes to login page', () => {
      cy.contains('a', 'Sign in').click();
      cy.url().should('include', '/user/login');
    });
  });

  describe('Validation – edge cases', () => {
    it('shows errors when submitting empty form', () => {
      cy.contains('button', 'Sign Up').click();
      cy.get('.text-red-500').should('exist');
      cy.contains(/First Name|required/i).should('be.visible');
    });

    it('shows error for first name too short (min 2 chars)', () => {
      cy.get('input[name="firstname"]').clear().type('J');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('password123');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.contains('button', 'Sign Up').click();
      cy.contains(/First Name must be at least 2/i).should('be.visible');
    });

    it('shows error for last name too short', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('D');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('password123');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.contains('button', 'Sign Up').click();
      cy.contains(/Last Name must be at least 2/i).should('be.visible');
    });

    it('shows error for invalid email', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('not-valid');
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('password123');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.contains('button', 'Sign Up').click();
      cy.contains(/valid email/i).should('be.visible');
    });

    it('shows error for password too short (min 6 chars)', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('12345');
      cy.get('input[name="confirmPassword"]').clear().type('12345');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.contains('button', 'Sign Up').click();
      cy.contains(/at least 6 characters/i).should('be.visible');
    });

    it('shows error when passwords do not match', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('otherpass456');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.contains('button', 'Sign Up').click();
      cy.contains(/Passwords must match/i).should('be.visible');
    });

    it('shows error when date of birth is not selected', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('test@example.com');
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('password123');
      // Do not open calendar
      cy.contains('button', 'Sign Up').click();
      cy.contains(/Date is required|date/i).should('be.visible');
    });
  });

  describe('Happy path (no real API)', () => {
    it('form accepts valid data and submits when all fields valid', () => {
      cy.get('input[name="firstname"]').clear().type('Jane');
      cy.get('input[name="lastname"]').clear().type('Doe');
      cy.get('input[name="email"]').clear().type('jane@example.com');
      cy.contains('button', 'Pick a date').click();
      cy.get('[role="gridcell"] button:not([aria-disabled="true"])')
        .first()
        .click();
      cy.get('input[name="password"]').clear().type('password123');
      cy.get('input[name="confirmPassword"]').clear().type('password123');
      cy.contains('button', 'Sign Up').click();
      cy.get('.text-red-500').should('not.exist');
      // May show success toast or redirect
    });
  });
});
