describe("TC085",()=>{
    it("passes",()=>{
      cy.preparatorias()
      const link = cy.get(`[href="oferta3.php?n=23&p=1"]`)
      link.click()
    })
  }) // TC086.cy.js