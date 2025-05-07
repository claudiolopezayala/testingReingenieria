describe("TC44", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="../admisiones/ "]`)
        link.click()
    })
})
