const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 18
    }
  },
  bio: Sequelize.TEXT
}, {
  getterMethods: {
    fullName: function () {
      return `${this.first} ${this.last}`;
    }
  }
});

User.prototype.haveBirthday = function () {
  return this.increment('age');
  // return this.update({
    // age: this.age + 1
  // });
}

module.exports = User;
