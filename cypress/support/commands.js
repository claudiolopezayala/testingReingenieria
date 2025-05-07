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

Cypress.Commands.add("visitHome", () => {
  cy.visit('https://www.lasallebajio.edu.mx')
})

Cypress.Commands.add("visitMainLinks", (url) => {
  cy.visitHome()
  const link = cy.get(`div#main_links ul li a[href="${url}"]`)
  link.click()
})



Cypress.Commands.add("visitLinks4", (url) => {
  cy.visitHome()
  const link = cy.get(`div#links4 [href="${url}"]`)
  link.click()
})

Cypress.Commands.add("visitLinks2", (url) => {
  cy.visitHome()
  const link = cy.get(`div#links2 [href="${url}"]`)
  link.click()
})

Cypress.Commands.add("visitEC", () => {
  cy.visitHome()
  const ofertaAcademica = cy.get(`div#link3 [href="oferta/"]`)
  ofertaAcademica.click()

  const EC = cy.get(`[href="ec.php"]`)
  EC.click()
})

Cypress.Commands.add("vistCertificacion", () => {
  cy.visitEC()
  const link = cy.get(`[href="oferta9.php?n=9&p=1270"`)
  link.click()
})

Cypress.Commands.add("vistCurso", () => {
  cy.visitEC()
  const link = cy.get(`[href="oferta9.php?n=9&p=1077"`)
  link.click()
})

Cypress.Commands.add("vistaDirectorio", () => {
  cy.visitHome()
  const link = cy.get(`div.links a[href="somos/directorio.php"]`)
  link.click()
})

Cypress.Commands.add("vistaHistoria", () => {
  cy.vistaDirectorio()
  const link = cy.get(`[href="historia.php?c="]`)
  link.click()
})
