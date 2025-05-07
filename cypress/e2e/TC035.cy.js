describe("TC35", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="area3.php"]`)
        link.click()
    })
})