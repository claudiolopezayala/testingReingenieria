describe("TC32", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="especialidades.php"]`)
        link.click()
    })
})