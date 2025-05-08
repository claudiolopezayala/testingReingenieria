describe("TC107",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-1"]`)
      link.click()
    })
  }) // TC090.cy.js