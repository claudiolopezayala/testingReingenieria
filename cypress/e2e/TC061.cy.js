describe("TC061",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-1"]`)
    link.click()
  })
})