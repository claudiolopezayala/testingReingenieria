describe("TC090",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-2"]`)
      link.click()
    })
  }) // TC090.cy.js