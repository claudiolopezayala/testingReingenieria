describe("TC017",()=>{
  it("passes",()=>{
    cy.vistCurso()
    const link = cy.get(`[href="#panel-2"]`)
    link.click()
  })
})