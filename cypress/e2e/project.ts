/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe('project', () => {
  beforeEach(() => {
    cy.visit('/')
      .findByLabelText(/View project "New York"/i)
      .click({ force: true })
      .waitForRouteChange()
  })

  it('should be linked from the index page', () => {
    cy.assertRoute('/newyork')
  })
  it('should have a category, title, description', () => {
    cy.findByText(/Photo, NY/i)
      .findAllByText(/If you can make it there, you can make it anywhere/i)
      .findByText(/Random photos in NY/i)
  })
  it('should have images', () => {
    cy.findByAltText(/dsc_0006/i)
  })
  it('should have a contact button', () => {
    cy.findByText(/Write me/i)
  })
})
