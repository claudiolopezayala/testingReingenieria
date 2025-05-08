describe("TC103",()=>{
    it("passes",()=>{
      cy.prepaJuanAlonsoTorres()
      const link = cy.get(`[href="#panel-7"]`)
      link.click()
    })
  }) // TC090.cy.js