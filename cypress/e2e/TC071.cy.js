describe("TC071",()=>{
    it("passes",()=>{
      cy.visitDoctoradosDerecho()
      const link = cy.get(`[href="#panel-6"]`)
      link.click()
    })
  })