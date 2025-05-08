describe("TC112",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-4"]`)
      link.click()
    })
  }) // TC090.cy.js