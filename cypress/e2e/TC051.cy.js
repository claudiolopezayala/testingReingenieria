describe('TC051 - Mostrar información de "Campo de Trabajo" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en Campo de Trabajo', () => {
        cy.visitACT();
        // Paso 2: Hacer clic en la pestaña "Perfil de ingreso y egreso"
        cy.get('a[href="#panel-2"]').click();
        // Paso 3: Verificar que se muestra el contenido correspondiente
        cy.get('#panel-2').should('be.visible').and('not.be.empty');
    });
  }); //TC049.cy.js