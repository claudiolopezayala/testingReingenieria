describe("TC36", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="area2.php"]`)
        link.click()
    })
})