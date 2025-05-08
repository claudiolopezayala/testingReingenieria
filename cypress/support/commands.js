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

Cypress.Commands.add("ofertaAcademica", () => {
  cy.visitHome()
  const ofertaAcademica = cy.get(`div#link3 [href="oferta/"]`)
  ofertaAcademica.click()
})


Cypress.Commands.add("preparatorias", () => {
  cy.ofertaAcademica()
  const preparatorias = cy.get(`[href="preparatorias.php"]`)
  preparatorias.click()
})

Cypress.Commands.add("prepaAmericas", () => {
  cy.preparatorias()
  const prepaAmericas = cy.get(`[href="oferta3.php?n=33&p=1"]`)
  prepaAmericas.click()
})

Cypress.Commands.add("prepaSanFrancisco", () => {
  cy.preparatorias()
  const prepaSanFrancisco = cy.get(`[href="oferta3.php?n=13&p=1"]`)
  prepaSanFrancisco.click()
})

Cypress.Commands.add("licenciaturas", () => {
  cy.ofertaAcademica()
  const link = cy.get(`[href="licenciaturas.php"]`)
  link.click()
})

Cypress.Commands.add("actuaria", () => {
  cy.licenciaturas()
  const link = cy.get(`[href="oferta1.php?n=1&p=46"]`)
  link.click()
})

    
Cypress.Commands.add("visitMaestrias", () => {
  cy.ofertaAcademica()
  const link = cy.get(`[href="maestrias.php"]`)
  link.click()
})
    
Cypress.Commands.add("visitEspecialidades", () => {
  cy.ofertaAcademica()
  const link = cy.get(`[href="especialidades.php"]`)
  link.click()
})
    
Cypress.Commands.add("visitOneEspecialidad", () => {
  cy.visitEspecialidades()
  const link = cy.get(`[href="oferta5.php?n=5&p=2"]`)
  link.click()
})


Cypress.Commands.add("secundaria", () => {
  cy.visitHome()
  cy.ofertaAcademica()
  const secundaria = cy.get(`[href="oferta2.php"]`)
  secundaria.click()
})

Cypress.Commands.add("visitDoctorados", () => {
  cy.ofertaAcademica()
  const link = cy.get(`[href="doctorados.php"]`)
  link.click()
})

Cypress.Commands.add("visitDoctoradosDerecho", () => {
  cy.visitDoctorados()
  const link = cy.get(`[href="oferta7.php?n=7&p=3"]`)
  link.click()
})