describe("TC23", () => {
    it("passes", () => {
        cy.visitHome()
        const link = cy.get(`div.links a[href="apoyos/mapas.php"]`)
        link.click()
    })
})