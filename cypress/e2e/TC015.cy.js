describe("TC015",()=>{
  it("passes",()=>{
    cy.vistCertificacion()
    const link = cy.get(`[href="#panel-4"]`)
    link.click()
  })
})