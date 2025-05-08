describe("TC095",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-5"]`)
      link.click()
    })
  }) // TC090.cy.js