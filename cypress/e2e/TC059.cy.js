describe("TC059",()=>{
  it("passes",()=>{
    cy.visitMaestrias()
    const link = cy.get(`[href="https://campusvirtual.lasallebajio.edu.mx/oferta.php?n=56&p=1"]`)
    link.click()
  })
})