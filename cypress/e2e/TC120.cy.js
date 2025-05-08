describe("TC120", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="noticias/"]`)
    link.click()
  })
})