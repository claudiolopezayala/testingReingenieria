describe("TC26", () => {
    it("passes", () => {
        cy.vistaHistoria()
        const link = cy.get(`[href="#panel-2"]`)
        link.click()
    })
})