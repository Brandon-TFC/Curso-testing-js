describe('group 1', () => {
  beforeAll(() => {
    // up db
    console.log('beforeAll');
  });
  afterAll(() => {
    console.log('afterAll');
    // dowm db
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('Case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });
    test('case 3', () => {
      console.log('Case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
