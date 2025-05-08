describe("TC066",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-6"]`)
    link.click()
  })
})