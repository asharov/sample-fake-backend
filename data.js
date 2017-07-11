var faker = require('faker');

module.exports = () => {
  var users = [];
  faker.seed(Number(process.env.FAKER_SEED || 12345));
  for (let i = 0; i < 100; ++i) {
    users.push({
      'id': i,
      'firstName': faker.name.firstName(),
      'lastName': faker.name.lastName(),
      'company': faker.company.companyName(),
      'joinDate': faker.date.past()
    });
  }

  return { 'users': users };
};
