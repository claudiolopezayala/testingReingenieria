describe("TC76", () => {
  it("passes", () => {
    cy.secundaria()
    const link2 = cy.get(`[href="#panel-3"]`)
    link2.click()
  })
})