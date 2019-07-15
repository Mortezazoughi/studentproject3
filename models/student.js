"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          // notNull: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          // notNull: true
        }
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        validate: {
          // notNull: true
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
          // notNull: true
        }
      },
      campus: {
        type: DataTypes.STRING,
        validate: {
          // notNull: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          // notNUll: true,
          min: 6
        }
      },
      confirmpassword: {
        type: DataTypes.STRING,
        validate: {
          // notNUll: true,
          min: 6
        }
      },
      prof_id: {
        type: DataTypes.STRING,
        Validate: {}
      }
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here

    Student.hasMany(models.StudentCourse, {
      foreignKey: "student_id",
      onDelete: "cascade"
    });
  };
  return Student;
};

// User.hasMany(models.Course, {
//   as: 'user',
//   foreignKey: {
//     fieldName: 'userId',
//     allowNull: false,
//   },
// });
