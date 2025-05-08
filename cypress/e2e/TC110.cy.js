describe("TC110",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-7"]`)
      link.click()
    })
  }) // TC090.cy.js