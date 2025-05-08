describe("TC48", () => {
    it("passes", () => {
        cy.actuaria()
        const link = cy.get(`[href="#panel-5"]`)
        link.click()
    })
})