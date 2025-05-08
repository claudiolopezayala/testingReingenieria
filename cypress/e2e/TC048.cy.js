describe('TC048 - Mostrar información de "Perfil de ingreso y egreso" en Actuaría', () => {
    it('Debe mostrar la sección al hacer clic en Perfil de ingreso y egreso', () => {
        cy.visitACT();
        // Paso 2: Hacer clic en la pestaña "Perfil de ingreso y egreso"
        cy.get('a[href="#panel-5"]').click();
        // Paso 3: Verificar que se muestra el contenido correspondiente
        cy.get('#panel-5').should('be.visible').and('not.be.empty');
    });
  });
  