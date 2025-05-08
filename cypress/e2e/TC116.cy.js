describe("TC116", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="oferta/idp.php"]`)
    link.click()
    const link2 = cy.get(`[href="idp_en.php"]`)
    link2.click()
  })
})