describe("TC109",()=>{
    it("passes",()=>{
      cy.prepaSalamanca()
      const link = cy.get(`[href="#panel-5"]`)
      link.click()
    })
  }) // TC090.cy.js