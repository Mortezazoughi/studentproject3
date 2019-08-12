'use strict';
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    'Professor',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 2,
            msg: 'First Name must have a minimum of two characters'
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 2,
            msg: 'Last Name must have a minimum of two characters'
          }
        }
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          min: {
            args: 10,
            msg: 'You must provide a valid number with area code included.'
          }
          // notNull: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email must be valid address.'
          },
          len: {
            args: [6, Infinity],
            msg: 'Email must be at least 6 characters in length.'
          }
        }
      },
      campus: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 6
          }
        }
      },
      confirmpassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 6
          }
        }
      },
      course_id: DataTypes.INTEGER
    },
    {}
  );
  Professor.associate = function(models) {
    // associations can be defined here
    Professor.hasMany(models.Course, {
      foreignKey: 'prof_id',
      onDelete: 'cascade'
    });
  };
  return Professor;
};
