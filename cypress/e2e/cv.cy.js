describe('check email', () => {
  it('email is correct', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(1) > td:nth-child(2):contains(\'miso.zima@1337tester.com\')')
  })
})

describe('check website', () => {
  it('website is correct', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(2) > td:nth-child(2):contains(\'www.1337tester.com\')')
  })
})

describe('check linkedin', () => {
  it('LinedIn is correct', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(3) > td:nth-child(2):contains(\'www.linkedin.com/in/1337tester/\')')
  })
})

describe('check phone', () => {
  it('phone is correct', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('.wrapper > section:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2):contains(\'+41766121224\')')
  })
})