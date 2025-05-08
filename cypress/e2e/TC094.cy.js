describe("TC094",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-3"]`)
      link.click()
    })
  }) // TC090.cy.js