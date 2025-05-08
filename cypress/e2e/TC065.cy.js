describe("TC065",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-2"]`)
    link.click()
  })
})