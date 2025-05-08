describe("TC43", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="../admisiones/pos.php "]`)
        link.click()
    })
})