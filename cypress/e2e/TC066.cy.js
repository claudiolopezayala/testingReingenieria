describe("TC066",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-4"]`)
    link.click()
  })
})