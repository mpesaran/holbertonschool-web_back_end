export default function updateStudentGradeByCity(students, city, newGrade) {
  const gradesMap = newGrade.reduce((acc, grade) => {
    acc[grade.studentId] = grade.grade;
    return acc;
  }, {});

  return students.filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradesMap[student.id] || 'N/A',
    }));
}
