describe("TC083",()=>{
    it("passes",()=>{
      cy.preparatorias()
      const link = cy.get(`[href="oferta3.php?n=43&p=1"]`)
      link.click()
    })
  }) //TC083.cy.js