describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Hero section', () => {
    it('renders hero with headline and CTA buttons', () => {
      cy.contains('Quality learning, built for growth').should('be.visible');
      cy.contains('a', 'Get in touch').should('be.visible');
      cy.contains('a', 'About us').should('be.visible');
    });

    it('hero CTAs navigate correctly', () => {
      cy.contains('a', 'Get in touch').click();
      cy.url().should('include', '/contact');
      cy.visit('/');
      cy.contains('a', 'About us').click();
      cy.url().should('include', '/about');
    });

    it('displays app name in hero', () => {
      cy.contains('ESSL Template').should('be.visible');
    });
  });

  describe('How it works', () => {
    it('renders three steps', () => {
      cy.contains('Simple, focused structure').should('be.visible');
      cy.contains('Define your goals').should('be.visible');
      cy.contains('Configure the template').should('be.visible');
      cy.contains('Launch and iterate').should('be.visible');
    });

    it('step cards have step numbers 1–3', () => {
      cy.get('section').contains('1').should('be.visible');
      cy.get('section').contains('2').should('be.visible');
      cy.get('section').contains('3').should('be.visible');
    });
  });

  describe("What's included", () => {
    it('renders features section with checklist items', () => {
      cy.contains(/What.s included/).should('be.visible');
      cy.contains('Next.js app router').should('be.visible');
      cy.contains('Authentication').should('be.visible');
      cy.contains('Responsive layout').should('be.visible');
    });
  });

  describe('About teaser', () => {
    it('renders about section with image and Learn more link', () => {
      cy.contains('Built for educators and teams').should('be.visible');
      cy.contains('a', 'Learn more').should('be.visible');
      cy.get('img[alt="About"]').should('exist');
    });

    it('Learn more navigates to about page', () => {
      cy.contains('a', 'Learn more').click();
      cy.url().should('include', '/about');
    });
  });

  describe('Testimonials', () => {
    it('renders testimonial cards', () => {
      cy.contains('Trusted by teams').should('be.visible');
      cy.contains('Sarah J.').should('be.visible');
      cy.contains('Michael C.').should('be.visible');
      cy.contains('Emma R.').should('be.visible');
    });
  });

  describe('Final CTA', () => {
    it('renders CTA section with Contact us and Create account', () => {
      cy.contains('Ready to get started?').should('be.visible');
      cy.contains('a', 'Contact us').should('be.visible');
      cy.contains('a', 'Create account').should('be.visible');
    });

    it('final CTA links work', () => {
      cy.contains('a', 'Contact us').click();
      cy.url().should('include', '/contact');
      cy.visit('/');
      cy.contains('a', 'Create account').click();
      cy.url().should('include', '/user/register');
    });
  });
});
