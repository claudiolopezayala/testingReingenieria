describe("TC51", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-2"]`)
        link.click()
    })
})