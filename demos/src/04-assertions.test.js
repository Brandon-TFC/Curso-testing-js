// marchers.
test('test obj', () => {
  const data = { name: 'brandon' };
  data.lastname = 'gutierrez';
  expect(data).toEqual({ name: 'brandon', lastname: 'gutierrez' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
