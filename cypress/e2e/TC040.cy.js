describe("TC40", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="area4.php"]`)
        link.click()
    })
})