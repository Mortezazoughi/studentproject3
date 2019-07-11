'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define('StudentCourse', {
    course_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    grades: DataTypes.STRING
  }, {});
  StudentCourse.associate = function(models) {
    // associations can be defined here
  };
  return StudentCourse;
};