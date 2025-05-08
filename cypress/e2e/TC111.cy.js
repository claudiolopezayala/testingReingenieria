describe("TC111",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-2"]`)
      link.click()
    })
  }) // TC090.cy.js