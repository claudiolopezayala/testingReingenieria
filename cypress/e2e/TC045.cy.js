describe('TC045 - Acceso a página de Actuaría como usuario invitado', () => {
    it('Debe abrir la página de Actuaría desde la página de Licenciaturas', () => {
      // Paso 1: Visitar la página de Licenciaturas
      cy.visitACT();
      // (Opcional) Verifica que el título de la carrera esté en pantalla
      cy.contains('Licenciatura en Actuaría').should('be.visible');
    });
  });
  