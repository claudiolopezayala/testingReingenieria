describe("TC106",()=>{
    it("passes",()=>{
      cy.prepaJuanAlonsoTorres()
      const link = cy.get(`[href="#panel-6"]`)
      link.click()
    })
  }) // TC090.cy.js