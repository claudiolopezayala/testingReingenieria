describe("TC013",()=>{
  it("passes",()=>{
    cy.vistCurso()
    const link = cy.get(`[href="#panel-3"]`)
    link.click()
  })
})