describe("TC77", () => {
  it("passes", () => {
    cy.secundaria()
    const link2 = cy.get(`[href="#panel-2"]`)
    link2.click()
  })
})