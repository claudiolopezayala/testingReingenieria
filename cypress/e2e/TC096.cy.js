describe("TC096",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-7"]`)
      link.click()
    })
  }) // TC090.cy.js