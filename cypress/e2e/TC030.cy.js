describe("TC30", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="maestrias.php"]`)
        link.click()
    })
})