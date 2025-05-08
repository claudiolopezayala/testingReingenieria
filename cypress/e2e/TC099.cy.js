describe("TC099",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-6"]`)
      link.click()
    })
  }) // TC090.cy.js