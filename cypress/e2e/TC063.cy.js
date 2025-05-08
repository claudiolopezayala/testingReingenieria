describe("TC063",()=>{
  it("passes",()=>{
    cy.visitOneEspecialidad()
    const link = cy.get(`[href="#panel-5"]`)
    link.click()
  })
})