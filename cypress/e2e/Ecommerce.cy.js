describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('#twotabsearchtextbox').click()
  })
})