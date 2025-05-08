describe("TC118", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="admisiones/"]`)
    link.click()
    const link2 = cy.get(`[href="lic_cua.php"]`)
    link2.click()
  })
})