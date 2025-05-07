describe("TC34", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="area1.php"]`)
        link.click()
    })
})