/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to projects works', () => {
    cy.get('nav').within(() => {
      cy.findByText(/projects/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.findByLabelText(/view project "Bots"/i).assertRoute('/projects')
  })
  it('link to instagram works', () => {
    cy.get('nav').within(() => {
      cy.findByText(/instagram/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.assertRoute('/instagram')
  })
  it('link to about works', () => {
    cy.get('nav').within(() => {
      cy.findByText(/about/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.findByText(/Hola. I'm Ernesto!/i).assertRoute('/about')
  })
  it('link to home works', () => {
    cy.get('nav').within(() => {
      cy.findByText(/about/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.findByText(/Hola. I'm Ernesto!/i)
      .assertRoute('/about')
      .findByLabelText(/Back to Home/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/')
  })
})
