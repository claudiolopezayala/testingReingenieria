describe("TC33", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="doctorados.php"]`)
        link.click()
    })
})