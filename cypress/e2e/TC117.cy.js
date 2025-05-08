describe("TC117", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="admisiones/"]`)
    link.click()
  })
})