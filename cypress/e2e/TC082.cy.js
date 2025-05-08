describe("TC082",()=>{
    it("passes",()=>{
      cy.preparatorias()
      const link = cy.get(`[href="oferta3.php?n=33&p=1"]`)
      link.click()
    })
  })