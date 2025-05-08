describe("TC49", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-7"]`)
        link.click()
    })
})