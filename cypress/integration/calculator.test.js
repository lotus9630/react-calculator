const enterFormula = formula => {
  for (const x in formula) {
    cy.get(`[data-cy=${formula[x]}]`).click();
  }
};

describe('올바른 계산 입력을 한 경우', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('0-9 까지 차례대로 입력', () => {
    for (let i = 0; i <= 9; i++) {
      cy.get(`[data-cy=${i}]`).click();
    }
    cy.get('[data-cy=input]').should('have.text', '123456789');
  });

  it('1 + 2 X 2 - 2 ÷ 2 = 4', () => {
    const formula = ['1', 'add', '2', 'mul', '2', 'sub', '2', 'div', '2', 'equal'];
    enterFormula(formula);
    cy.get('[data-cy=input]').should('have.text', '4');
  });

  it('0.1 + 0.3 X 3 - 4% X 10 ÷ 2 = 0.48', () => {
    // const formula = '0.1+0.3x3-4%÷2=';
    const formula = ['0', 'point', '1', 'add', '0', 'point', '3', 'mul', '3', 'sub', '4', 'percentage', 'mul', '1', '0', 'div', '2', 'equal'];
    enterFormula(formula);
    cy.get('[data-cy=input]').should('have.text', '0.8');
  });

  it('1 부터 9 클릭 후 Cancel 버튼 5번 클릭 = 1234 ', () => {
    const formula = '123456789CCCCC';
    enterFormula(formula);
    cy.get('[data-cy=input]').should('have.text', '1234');
  });

  it('1 부터 9 클릭 후 All Cancel 버튼 1번 클릭 = 0 ', () => {
    const formula = '123456789';
    enterFormula(formula);
    cy.get('[data-cy=AC]').click();
    cy.get('[data-cy=input]').should('have.text', '0');
  });
});

describe('잘못된 계산 입력을 한 경우', () => {
  beforeEach(() => {
    cy.visit('/');
  });
});
