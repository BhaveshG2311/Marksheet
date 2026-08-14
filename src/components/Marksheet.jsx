import { useSearchParams } from "react-router-dom";
import Header from "./Header";

function Marksheet({ students }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sapId = searchParams.get("sapId");
  const semester = searchParams.get("semester");

  const student = students.find(
    (student) => student.sapId === sapId
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  const semesterMarks = student.marks[semester];

  function calculateGrade(marks) {
    if (marks >= 90) {
      return "O";
    } else if (marks >= 80) {
      return "A+";
    } else if (marks >= 70) {
      return "A";
    } else if (marks >= 60) {
      return "B+";
    } else if (marks >= 50) {
      return "B";
    } else if (marks >= 40) {
      return "C";
    } else {
      return "F";
    }
  }

  function calculateGradePoint(marks) {
    if (marks >= 90) {
      return 10;
    } else if (marks >= 80) {
      return 9;
    } else if (marks >= 70) {
      return 8;
    } else if (marks >= 60) {
      return 7;
    } else if (marks >= 50) {
      return 6;
    } else if (marks >= 40) {
      return 5;
    } else {
      return 0;
    }
  }

  function calculateSGPA(marks) {
    const gradePoint1 = calculateGradePoint(marks.subject1);
    const gradePoint2 = calculateGradePoint(marks.subject2);
    const gradePoint3 = calculateGradePoint(marks.subject3);
    const gradePoint4 = calculateGradePoint(marks.subject4);

    const sgpa = (gradePoint1 + gradePoint2 + gradePoint3 + gradePoint4) / 4;
    return sgpa.toFixed(2);
  }

  function handleSemesterChange(event) {
    setSearchParams({
      sapId: sapId,
      semester: event.target.value
    });
  }

  const formatSemesterLabel = (semKey) => {
    if (!semKey) return "";
    const digit = semKey.match(/\d+/);
    return digit ? `Semester ${digit[0]}` : semKey;
  };

  return (
    <div>
      <Header />
      <hr />

      <h1>Student Marksheet</h1>

      <h3>Student Information</h3>
      <p>Name: {student.name}</p>
      <p>SAP ID: {student.sapId}</p>
      <p>Course: {student.course}</p>

      <hr />

      <label>Select Semester: </label>
      <select
        value={semester || ""}
        onChange={handleSemesterChange}
      >
        <option value="sem 1">Semester 1</option>
        <option value="sem 2">Semester 2</option>
        <option value="sem 3">Semester 3</option>
        <option value="sem 4">Semester 4</option>
        <option value="sem 5">Semester 5</option>
        <option value="sem 6">Semester 6</option>
      </select>

      <br />
      <br />

      {!semesterMarks ? (
        <h3>Marks have not been entered for this semester.</h3>
      ) : (
        <>
          <h2>{formatSemesterLabel(semester)}</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Grade Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject 1</td>
                <td>{semesterMarks.subject1}</td>
                <td>{calculateGrade(semesterMarks.subject1)}</td>
                <td>{calculateGradePoint(semesterMarks.subject1)}</td>
              </tr>
              <tr>
                <td>Subject 2</td>
                <td>{semesterMarks.subject2}</td>
                <td>{calculateGrade(semesterMarks.subject2)}</td>
                <td>{calculateGradePoint(semesterMarks.subject2)}</td>
              </tr>
              <tr>
                <td>Subject 3</td>
                <td>{semesterMarks.subject3}</td>
                <td>{calculateGrade(semesterMarks.subject3)}</td>
                <td>{calculateGradePoint(semesterMarks.subject3)}</td>
              </tr>
              <tr>
                <td>Subject 4</td>
                <td>{semesterMarks.subject4}</td>
                <td>{calculateGrade(semesterMarks.subject4)}</td>
                <td>{calculateGradePoint(semesterMarks.subject4)}</td>
              </tr>
            </tbody>
          </table>

          <h2>SGPA: {calculateSGPA(semesterMarks)}</h2>
        </>
      )}
    </div>
  );
}

export default Marksheet;
