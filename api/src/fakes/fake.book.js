const { faker } = require('@faker-js/faker');

const generateOneBook = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }
}


const generateManyBook = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let index = 0; index < limit; index +=1) {
    const element = array[index];
    fakeBooks.push(generateManyBook());
  }
  return [...fakeBooks]; //Hacemos este procedimiento para evitar errores de mutacion
}
module.export = { generateOneBook, generateManyBook };
