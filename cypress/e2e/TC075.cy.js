describe("TC75", () => {
  it("passes", () => {
    cy.secundaria()
    const link2 = cy.get(`[href="#panel-1"]`)
    link2.click()
  })
})