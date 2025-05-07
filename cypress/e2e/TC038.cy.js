describe("TC38", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="oferta2.php"]`)
        link.click()
    })
})