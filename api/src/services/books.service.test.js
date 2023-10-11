const { generateManyBook } = require('../fakes/fake.book');
const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry potter'
  },
]

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => {
  return {
    getAll: mockGetAll, //Se utiliza para lo que queramos suplantar
    create: () => {},
  };
}));


describe('Test for BooksService', () =>{
  let service = null;
  let app = null;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
    //Arrange
    const fakeBooks = generateManyBook(20);
    mockGetAllGetAll.mockResolvedValue(fakeBooks);
    //Act
    const books = await service.getBooks();
    console.log(books);
    //assert
    expect(books.legth).toEqual(fakeBooks.legth);
    expect(spyGetAll).toHaveBeenCalled();
    expect(spyGetAll).toHaveBeenCalledTimes(1);
    expect(spyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      //Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolveValue(fakeBooks)
      //Act
      const books = await service.getBooks({});
      console.log(books);
      //assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
      });
  });
});
