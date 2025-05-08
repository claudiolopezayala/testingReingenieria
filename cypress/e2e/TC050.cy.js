describe("TC50", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-9"]`)
        link.click()
    })
})