"use strict";
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    "Professor",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 2,
            msg: "First Name must have a minimum of two characters"
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 2,
            msg: "Last Name must have a minimum of two characters"
          }
        }
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true
          // notNull: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Email must be valid"
          },
          len: {
            arg: [6, 20],
            msg: "Email must have a length of 6 -20 characters"
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
            arg: 6
          }
        }
      },
      confirmpassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            arg: 6
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
      foreignKey: "prof_id",
      onDelete: "cascade"
    });
  };
  return Professor;
};
