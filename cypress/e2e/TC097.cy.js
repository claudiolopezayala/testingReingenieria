describe("TC097",()=>{
    it("passes",()=>{
      cy.prepaSanFrancisco()
      const link = cy.get(`[href="#panel-2"]`)
      link.click()
    })
  }) // TC090.cy.js