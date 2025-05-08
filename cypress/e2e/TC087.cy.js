describe("TC087",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-3"]`)
      link.click()
    })
  }) // TC086.cy.js