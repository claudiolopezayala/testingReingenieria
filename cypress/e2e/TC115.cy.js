describe("TC115", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="oferta/idp.php"]`)
    link.click()
    const link2 = cy.get(`[href="dentalboard_en.php"]`)
    link2.click()
  })
})