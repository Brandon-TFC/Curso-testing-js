const request = require('supertest');
const { generateManyBook } = require('../src/fakes/fake.book');

const createApp = require('../src/app');
const { response } = require('express');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => {
  return {
    getAll: mockGetAll, //Se utiliza para lo que queramos suplantar
    create: () => {},
  };
}));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', () =>{
      //Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      return request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(({body}) => {
        console.log(body);
        //assert
        expect(body.length).toEqual(fakeBooks.length);
      });
    });
  });
});
