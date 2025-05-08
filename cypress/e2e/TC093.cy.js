describe("TC093",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-1"]`)
      link.click()
    })
  }) // TC090.cy.js