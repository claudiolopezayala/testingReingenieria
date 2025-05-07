describe('TC047 - Mostrar información de "¿Por qué estudiar con nosotros?" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en ¿Por qué estudiar con nosotros?', () => {
      // Paso 1: Visitar la página de Actuaría
      cy.visit('https://www.lasallebajio.edu.mx/oferta/oferta1.php?n=1&p=46');
  
      // Paso 2: Clic en "¿Por qué estudiar con nosotros?"
      cy.contains('.panel_title', '¿Por qué estudiar con nosotros?').click();
  
      // Paso 3: Verificar que se despliegue la información
      cy.get('.panel_content')  // contenedor del contenido que se despliega
        .should('be.visible')
        .and('contain.text', '¿Por qué estudiar con nosotros?');  // Ajusta según el contenido real
    });
  });
  