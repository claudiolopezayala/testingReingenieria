describe("TC074",()=>{
    it("passes",()=>{
      cy.visitDoctoradosDerecho()
      const link = cy.get(`[href="#panel-7"]`)
      link.click()
    })
  })