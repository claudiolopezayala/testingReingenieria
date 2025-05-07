describe("TC013",()=>{
  it("passes",()=>{
    cy.vistCertificacion()
    const link = cy.get(`[href="#panel-3"]`)
    link.click()
  })
})