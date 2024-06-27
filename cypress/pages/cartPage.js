class cartPage{
    elements = {
        urlPath : () => cy.url(),
        cartTitle : () => cy.get('[data-test="title"]'),
        cartBadget : () => cy.get('[data-test="shopping-cart-badge"]'),
        removeProductButton : () => cy.get('[data-test^="remove-"]').contains('Remove'),
        checkoutButton : () => cy.get('[data-test="checkout"]'),
        productList : () => cy.get('[data-test="inventory-item"]'),
        productPrice : () => cy.get('[data-test="inventory-item-price"]')
    }

    validateCartUrl(){
        this.elements.urlPath().should('eq', 'https://www.saucedemo.com/cart.html');
    }
    validateCartTitle(title){
        this.elements.cartTitle().should('be.visible').contains(title);
        let Price = this.elements.productPrice().invoke('text');
    }
    validateCartBadget(amount){
        this.elements.cartBadget().should('be.visible').invoke('text').should('equal',amount);
    }
    removeProductFromCart(){
        this.elements.removeProductButton().should('be.visible').should('exist').click();
        this.elements.productList().should('have.lengthOf', 0)
    }
    validateCheckoutButton(){
        this.elements.checkoutButton().should('be.visible').should('exist').click();
    }
}

export default cartPage;