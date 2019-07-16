"use strict";
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    "Professor",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
          len: {
            args: 2,
            msg: "First Name must have a minimum of two characters"
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
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
      email: DataTypes.STRING,
      campus: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
      password: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
          len: {
            arg: 6
          }
        }
      },
      confirmpassword: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false,
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
