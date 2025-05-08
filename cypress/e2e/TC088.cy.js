describe("TC088",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-5"]`)
      link.click()
    })
  }) // TC086.cy.js