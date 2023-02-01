export const register = (first_name, last_name, occupation, role, phone, email, password) => {
    let option;
    let value;
    if (role === "Admin") {
        option = 1;
        value = "admin";
    }
    if (role === "Super User") {
        option = 3;
        value = "super_user";

    } if (role === "Standart User") {
        option = 2;
        value = "standart_user";
    }
    cy.get('#first_name').should("be.visible").type("Ulfet")
    cy.get('#last_name').should("be.visible").type("Kacay")
    cy.get('#occupation').should("be.visible").type("Engineer")
    cy.get('#role').should("be.visible").select(option).should('have.value', value)
    cy.get('#phone').should("be.visible").type("5001110011")
    cy.get('#email').should("be.visible").type("test@test.com")
    cy.get('#password').should("be.visible").type("12345678")
    cy.get('#btn_register').should("be.visible").click()
}