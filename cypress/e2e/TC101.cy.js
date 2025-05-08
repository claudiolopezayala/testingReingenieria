describe("TC101",()=>{
    it("passes",()=>{
      cy.prepaJuanAlonsoTorres()
      const link = cy.get(`[href="#panel-3"]`)
      link.click()
    })
  }) // TC090.cy.js