describe("TC019",()=>{
  it("passes",()=>{
    cy.vistCurso()
    const link = cy.get(`[href="#panel-4"]`)
    link.click()
  })
})