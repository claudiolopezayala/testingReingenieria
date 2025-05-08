describe('TC047 - Mostrar información de "¿Por qué estudiar con nosotros?" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en ¿Por qué estudiar con nosotros?', () => {
      // Ir a la página de Actuaría
      cy.visitACT();
      // Hacer clic en el enlace que abre el panel-3
      cy.get('a[href="#panel-3"]').click();
      // Verificar que el panel #panel-3 sea visible y contenga contenido
      cy.get('#panel-3').should('be.visible').and('not.be.empty');
    });
  });