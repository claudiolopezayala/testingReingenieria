describe("TC105",()=>{
    it("passes",()=>{
      cy.prepaJuanAlonsoTorres()
      const link = cy.get(`[href="#panel-4"]`)
      link.click()
    })
  }) // TC090.cy.js