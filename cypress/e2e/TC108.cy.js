describe("TC108",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-3"]`)
      link.click()
    })
  }) // TC090.cy.js