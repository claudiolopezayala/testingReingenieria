describe("TC27", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="licenciaturas.php"]`)
        link.click()
    })
})