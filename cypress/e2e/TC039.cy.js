describe("TC39", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="preparatorias.php"]`)
        link.click()
    })
})