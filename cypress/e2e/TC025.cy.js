describe("TC24", () => {
    it("passes", () => {
        cy.vistaDirectorio()
        const link = cy.get(`[href="historia.php?c="]`)
        link.click()
    })
})