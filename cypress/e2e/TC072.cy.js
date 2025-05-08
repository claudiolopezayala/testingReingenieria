describe("TC072",()=>{
    it("passes",()=>{
      cy.visitDoctoradosDerecho()
      const link = cy.get(`[href="#panel-2"]`)
      link.click()
    })
  })