import { register } from "../support/register";

describe('register testing', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.contains('Register').click()
    cy.wait(500)
  });

  it('should register with correct credentials', () => {
    register("Ulfet","Kacay","Engineer","Admin","05001112200","test@test.com","12345678")
  });

  it('should display error when do not enter required inputs', () => {
    cy.get('#first_name').should("have.value", "")
    cy.get('#last_name').should("have.value", "")
    cy.get('#occupation').should("have.value", "")
    cy.get('#role').should("have.value", "")
    cy.get('#phone').should("have.value", "")
    cy.get('#email').should("have.value", "")
    cy.get('#password').should("have.value", "")
    cy.get('#btn_register').click()
    cy.get('[data-testid="error_message"]').should('contain', 'Required')
  });

  it('should not display Personel Tracking System after login with standart user role', () => {
    register("Ulfet","Kacay","Engineer","Standart User","05001112200","test@test.com","12345678")
    cy.get('a').contains('Stock Management System').should("be.visible")
    cy.get('a').contains('Cost Tracking System').should("be.visible")
    cy.get('a').contains('Personel Tracking System').should("not.exist")
  });
})