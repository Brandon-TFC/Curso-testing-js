const Person = require('./06-person');

describe('test for person', () => {
  let person;
  beforeEach(() => {
    person = new Person('brandon', 45, 1.7);
  });

  test('should return down', () => {
    // AAA
    // Arrange / Given
    person.weight = 45;
    // act / when
    const imc = person.calcIMC();
    // Assert / then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
