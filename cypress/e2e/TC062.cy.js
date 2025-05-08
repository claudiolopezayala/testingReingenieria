describe("TC062",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-3"]`)
    link.click()
  })
})