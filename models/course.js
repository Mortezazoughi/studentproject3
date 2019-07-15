"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    courseName: {
      type: DataTypes.STRING,
      validate: {
        // notNull: true
      }
    },
    startdate: {
      type: DataTypes.DATE,
      validates: {
        isDate: true
      }
    },
    enddate: {
      type: DataTypes.DATE,
      validates: {
        isDate: true
      }
    },
    availableseats: {
      type: DataTypes.INTEGER,
      validate: {
        // notNull: true
      }
    },
    level: {
      type: DataTypes.STRING,
      validate: {
        // notNull: true
      }
    },
    prereq: {
      type: DataTypes.STRING,
      validate: {
        // notNull: true
      }
    },
    prof_id: {
      type: DataTypes.INTEGER,
      validate: {
        // notNull: true
      }
    }
  });
  Course.associate = function(models) {
    // associations can be defined here
    // Course.hasMany(models.StudentCourse, {
    //   onDelete: "cascade"
    // });
    //   , {
    //   foriegnKey: "prof_id"
    //   // onDelete: "cascade"
    // });
    // models.Professor.be(Course, {
    // onDelete: "cascade";
    // constraints: false,
    // scope: {
    //   commentable: 'image'
    // }

    // });
    Course.belongsTo(models.Professor, {
      foreignKey: "prof_id"
    });
    Course.hasMany(models.StudentCourse, {
      foreignKey: "course_id"
    });
  };
  return Course;
};
