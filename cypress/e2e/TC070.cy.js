describe("TC070",()=>{
    it("passes",()=>{
      cy.visitDoctoradosDerecho()
      const link = cy.get(`[href="#panel-4"]`)
      link.click()
    })
  })