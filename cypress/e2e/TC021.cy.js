describe("TC21", () => {
    it("passes", () => {
        cy.visitHome()
        const link = cy.get(`[href="avisos.php"]`)
        link.click()
    })
})
