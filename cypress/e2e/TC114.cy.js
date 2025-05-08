describe("TC114", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="oferta/idp.php"]`)
    link.click()
  })
})