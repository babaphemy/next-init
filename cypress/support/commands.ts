/// <reference types="cypress" />

// ***********************************************
// Custom commands for e2e tests
// ***********************************************

/**
 * Get element by data-testid (add data-testid in app when needed).
 * Fallback: use role/label when testid not present.
 */
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

/**
 * Fill a form field by label text; supports inputs and textareas.
 */
Cypress.Commands.add(
  'fillByLabel',
  (label: string, value: string, options?: { clear?: boolean }) => {
    cy.contains('label', label)
      .invoke('attr', 'for')
      .then((id) => {
        expect(id, 'label should have for attribute').to.be.a('string');
        const el = cy.get(`#${id}`);
        if (options?.clear !== false) el.clear();
        el.type(value);
      });
  },
);

/**
 * Submit the form that contains the given submit button text.
 */
Cypress.Commands.add('submitFormWithButton', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

/**
 * Assert that the current URL path matches (with optional query).
 */
Cypress.Commands.add('urlPath', (path: string) => {
  cy.location('pathname').should('eq', path);
});

/**
 * Assert that an error message is visible (red text or role=alert).
 */
Cypress.Commands.add('seeValidationError', (message?: string | RegExp) => {
  if (message === undefined) {
    cy.get('.text-red-500').should('be.visible');
    return;
  }
  if (typeof message === 'string') {
    cy.contains('.text-red-500', message).should('be.visible');
  } else {
    cy.get('.text-red-500').contains(message).should('be.visible');
  }
});

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      fillByLabel(
        label: string,
        value: string,
        options?: { clear?: boolean },
      ): Chainable<JQuery<HTMLElement>>;
      submitFormWithButton(buttonText: string): Chainable<void>;
      urlPath(path: string): Chainable<void>;
      seeValidationError(message?: string | RegExp): Chainable<void>;
    }
  }
}

export {};
