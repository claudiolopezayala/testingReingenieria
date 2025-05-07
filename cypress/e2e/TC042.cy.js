describe("TC42", () => {
    it("passes", () => {
        cy.ofertaAcademica()
        const link = cy.get(`[href="https://campusvirtual.lasallebajio.edu.mx/#oferta"]`)
        link.click()
    })
})