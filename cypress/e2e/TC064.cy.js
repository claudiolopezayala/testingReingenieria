describe("TC063",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-7"]`)
    link.click()
  })
})