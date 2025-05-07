describe('TC045 - Acceso a página de Actuaría como usuario invitado', () => {
    it('Debe abrir la página de Actuaría desde la página de Licenciaturas', () => {
      // Paso 1: Visitar la página de Licenciaturas
      cy.visit('https://www.lasallebajio.edu.mx/oferta/licenciaturas.php');
  
      // Paso 2: Buscar el enlace a la carrera de Actuaría y hacer clic
      cy.contains('Actuaría').click();
  
      // (Opcional) Verifica que el título de la carrera esté en pantalla
      cy.contains('Licenciatura en Actuaría').should('be.visible');
    });
  });
  