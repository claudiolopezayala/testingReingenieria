describe("TC098",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-4"]`)
      link.click()
    })
  }) // TC090.cy.js