describe("TC47", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-3"]`)
        link.click()
    })
})