describe("TC073",()=>{
    it("passes",()=>{
      cy.visitDoctoradosDerecho()
      const link = cy.get(`[href="#panel-5"]`)
      link.click()
    })
  })