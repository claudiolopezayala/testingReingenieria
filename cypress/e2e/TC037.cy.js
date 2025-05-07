describe("TC37", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="idp_en.php"]`)
        link.click()
    })
})