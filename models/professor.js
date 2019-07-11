"use strict";
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    "Professor",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true
        }
      },
      email: DataTypes.STRING,
      campus: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          min: 6
        }
      },
      confirmpassword: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          min: 6
        }
      },
      course_id: DataTypes.INTEGER
    },
    {}
  );
  Professor.associate = function(models) {
    // associations can be defined here
  };
  return Professor;
};
