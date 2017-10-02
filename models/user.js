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
    // User.update({
    //     where: {age:42}
    // }).then((oldAge) =>{
    //     console.log(oldAge)
    // })

    // User.findOne({
    //     age: '42'
    // })
    // .then(user => {
    //     user.updateAttributes({
    //         age: '43'
    //     });
    // });
    // const newData = {
    //     age: 43
    // };

    // User.update(newData, { where: { age: 42 }, 
    //     returning: true,
    //     plain: true
    // })
    // .then((updatedAge) => {
    //     // console.log(updatedAge)
    // }).save(updatedAge)


      //*** here you can do something like this 
    return this.update({
    age: this.age + 1
  });

// you don't need a .then because you aren't sending anything here you are just adding an instance method to the model. 
}

module.exports = User;
