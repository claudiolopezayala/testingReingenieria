describe("TC121", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="noticias/"]`)
    link.click()
    const input = cy.get(`form#frmNot input[name="s"]`).type("corea")
    const submit = cy.get("form#frmNot button")
    submit.click()
  })
})