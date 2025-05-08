describe("TC086",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-1"]`)
      link.click()
    })
  }) // TC086.cy.js