describe("TC53", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-6"]`)
        link.click()
    })
})