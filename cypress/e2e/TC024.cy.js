describe("TC21", () => {
    it("passes", () => {
        cy.visitHome()
        const link = cy.get(`div.links a[href="somos/directorio.php"]`)
        link.click()
    })
})
