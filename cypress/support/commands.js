// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitHome",()=>{
  cy.visit('https://www.lasallebajio.edu.mx')
})

Cypress.Commands.add("visitMainLinks",(url)=>{
  cy.visitHome()
  const link = cy.get(`div#main_links ul li a[href="${url}"]`)
  link.click()
})

Cypress.Commands.add("visitLinks4",(url)=>{
  cy.visitHome()
  const link = cy.get(`div#links4 [href="${url}"]`)
  link.click()
})

Cypress.Commands.add("visitLinks2",(url)=>{
  cy.visitHome()
  const link = cy.get(`div#links2 [href="${url}"]`)
  link.click()
})

Cypress.Commands.add("visitEC",()=>{
  const link = cy.get(`div#links3 [href="${url}"]`)
  const link = cy.get(`[href="ec.php"]`)
  link.click()
})