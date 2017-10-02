const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
    first: Sequelize.STRING,
    last: Sequelize.STRING,
    age: {
        type: Sequelize.INTEGER,
        validate: {
            min: 18
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio: Sequelize.TEXT
}, {
    getterMethods: {
        fullName: function() {
            return this.first + ' ' + this.last
        }
    }
});

User.prototype.haveBirthday = function() {
    this.age = this.age + 1
    return this.save();
}

module.exports = User;
