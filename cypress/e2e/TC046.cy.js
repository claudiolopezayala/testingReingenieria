describe('TC046 - Mostrar información de Introducción en la página de Actuaría', () => {
    it('Debe mostrar la sección de Introducción al hacer clic en ella', () => {
      // Paso 1: Ir directamente a la página de Actuaría
      cy.visit('https://www.lasallebajio.edu.mx/oferta/oferta1.php?n=1&p=46');
  
      // Paso 2: Hacer clic en la pestaña "Introducción"
      cy.contains('.panel_title', 'introducción', { matchCase: false }).click();
    });
  });
  