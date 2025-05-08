describe("TC52", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-4"]`)
        link.click()
    })
})