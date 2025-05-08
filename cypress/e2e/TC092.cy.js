describe("TC092",()=>{
    it("passes",()=>{
      cy.prepaAmericas()
      const link = cy.get(`[href="#panel-6"]`)
      link.click()
    })
  }) // TC090.cy.js