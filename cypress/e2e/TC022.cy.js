describe("TC22", () => {
    it("passes", () => {
        cy.visitHome()
        const link = cy.get(`div.sitecol a[href="http://facturacion.lasallebajio.edu.mx/"]`)
        link.click()
    })
})