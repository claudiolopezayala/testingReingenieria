describe("TC77", () => {
  it("passes", () => {
    cy.secundaria()
    const link2 = cy.get(`[href="#panel-7"]`)
    link2.click()
  })
})