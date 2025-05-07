describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lasallebajio.edu.mx')
    var oferta = cy.get('div[id="link3"]')
    oferta.click()
    var maestrias = cy.get('a[href="maestrias.php"]')
    maestrias.click()
    var seguridad = cy.get('a[href="oferta5.php?n=6&p=45"]')
    seguridad.click()
    var costos = cy.get('a[href="#panel-7"]')
    costos.click()
    cy.get('div[id="panel-7"]').then((text) => {
      var aaaa = text[0].innerText
      cy.log(aaaa)
      console.log("*************\n*************\n*************\n")
    })
    cy.wait(20000000)
  })
})