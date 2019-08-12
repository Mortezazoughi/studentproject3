'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          arg: 3
        }
      }
    },
    startdate: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    enddate: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    availableseats: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        // notNull: true
      }
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        // notNull: true
      }
    },
    prereq: {
      allowNull: false,
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
    Course.belongsTo(models.Professor, {
      foreignKey: 'prof_id'
    });
    Course.hasMany(models.StudentCourse, {
      foreignKey: 'course_id'
    });
  };
  return Course;
};
