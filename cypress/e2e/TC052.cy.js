describe('TC050 - Mostrar información de "Centros de apoyo" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en Centros de apoyo', () => {
        cy.visitACT();
        // Paso 2: Hacer clic en la pestaña "Perfil de ingreso y egreso"
        cy.get('a[href="#panel-4"]').click();
        // Paso 3: Verificar que se muestra el contenido correspondiente
        cy.get('#panel-4').should('be.visible').and('not.be.empty');
    });
  }); //TC049.cy.js