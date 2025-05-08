describe("TC091",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-4"]`)
      link.click()
    })
  }) // TC090.cy.js