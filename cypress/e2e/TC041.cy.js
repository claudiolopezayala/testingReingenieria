describe("TC41", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="area5.php"]`)
        link.click()
    })
})