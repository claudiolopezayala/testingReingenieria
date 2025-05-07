describe("TC014",()=>{
  it("passes",()=>{
    cy.vistCertificacion()
    const link = cy.get(`[href="#panel-5"]`)
    link.click()
  })
})