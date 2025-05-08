describe("TC113",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-6"]`)
      link.click()
    })
  }) // TC090.cy.js