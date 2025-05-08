describe('TC049 - Mostrar información de "Opciones de Intercambio" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en Opciones de Intercambio', () => {
        cy.visitACT();
        // Paso 2: Hacer clic en la pestaña "Perfil de ingreso y egreso"
        cy.get('a[href="#panel-7"]').click();
        // Paso 3: Verificar que se muestra el contenido correspondiente
        cy.get('#panel-7').should('be.visible').and('not.be.empty');
    });
  }); //TC049.cy.js