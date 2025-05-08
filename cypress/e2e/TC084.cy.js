describe("TC084",()=>{
    it("passes",()=>{
      cy.preparatorias()
      const link = cy.get(`[href="oferta3.php?n=13&p=1"]`)
      link.click()
    })
  }) //TC083.cy.js