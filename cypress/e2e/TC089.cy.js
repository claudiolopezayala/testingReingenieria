describe("TC089",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-7"]`)
      link.click()
    })
  }) // TC090.cy.js