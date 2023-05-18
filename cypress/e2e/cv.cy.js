describe('check email', () => {
  it('passes', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(1) > td:nth-child(2):contains(\'miso.zima@1337tester.com\')')
  })
})

describe('check email', () => {
  it('passes', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(2) > td:nth-child(2):contains(\'www.1337tester.com\')')
  })
})

describe('check linkedin', () => {
  it('passes', () => {
    cy.visit('https://cv.1337tester.com')
    cy.get('body > div > section > table > tbody > tr:nth-child(3) > td:nth-child(2):contains(\'www.linkedin.com/in/1337tester/\')')
  })
})