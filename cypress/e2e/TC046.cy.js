describe('TC046 - Mostrar información de Introducción en la página de Actuaría', () => {
    it('Debe mostrar la sección de Introducción al hacer clic en ella', () => {
      // Paso 1: Ir directamente a la página de Actuaría
      cy.visitACT();
      // Paso 2: Hacer clic en la pestaña "Introducción"
      cy.contains('.panel_title', 'introducción', { matchCase: false }).click();
    });
  });
  