describe("TC100",()=>{
    it("passes",()=>{
      cy.prepaJuanAlonsoTorres()
      const link = cy.get(`[href="#panel-1"]`)
      link.click()
    })
  }) // TC090.cy.js