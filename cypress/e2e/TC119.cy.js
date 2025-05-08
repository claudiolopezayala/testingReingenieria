describe("TC119", () => {
  it("passes", () => {
    cy.visitHome()
    const link = cy.get(`[href="admisiones/"]`)
    link.click()
    const link2 = cy.get(`[href="lic_cua.php"]`)
    link2.click()
    const link3 = cy.get(`img[src="./images/icono1_fechas_evaluacion.jpg"]`)
    link3.click()
  })
})