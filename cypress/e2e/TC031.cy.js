describe("TC31", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="maestrias.php"]`)
        link.click()
    })
})