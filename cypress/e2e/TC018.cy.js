describe("TC018",()=>{
  it("passes",()=>{
    cy.vistCurso()
    const link = cy.get(`[href="#panel-5"]`)
    link.click()
  })
})