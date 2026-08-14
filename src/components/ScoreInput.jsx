import { useState } from "react";

function ScoreInput({ students, setStudents }) {
  const [sapId, setSapId] = useState("");
  const [semester, setSemester] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!sapId || !semester) {
      alert("Please select student and semester");
      return;
    }

    const semesterMarks = {
      subject1: Number(subject1),
      subject2: Number(subject2),
      subject3: Number(subject3),
      subject4: Number(subject4),
    };

    const updatedStudents = students.map((student) => {
      if (student.sapId === sapId) {
        return {
          ...student,
          marks: {
            ...student.marks,
            [semester]: semesterMarks,
          },
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    alert("Marks saved successfully");
    setSapId("");
    setSemester("");
    setSubject1("");
    setSubject2("");
    setSubject3("");
    setSubject4("");
  }

  return (
    <div>
      <h1>Enter Student Marks</h1>
      <form onSubmit={handleSubmit}>
        <label>Select Student: </label>
        <select
          value={sapId}
          onChange={(event) => setSapId(event.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.sapId} value={student.sapId}>
              {student.name} - {student.sapId}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label>Semester: </label>
        <select
          value={semester}
          onChange={(event) => setSemester(event.target.value)}
        >
          <option value="">Select Semester</option>
          <option value="sem 1">Semester 1</option>
          <option value="sem 2">Semester 2</option>
          <option value="sem 3">Semester 3</option>
          <option value="sem 4">Semester 4</option>
          <option value="sem 5">Semester 5</option>
          <option value="sem 6">Semester 6</option>
        </select>
        <br />
        <br />

        <label>Subject 1 Marks: </label>
        <input
          type="number"
          min="0"
          max="100"
          required
          value={subject1}
          onChange={(event) => setSubject1(event.target.value)}
        />
        <br />
        <br />

        <label>Subject 2 Marks: </label>
        <input
          type="number"
          min="0"
          max="100"
          required
          value={subject2}
          onChange={(event) => setSubject2(event.target.value)}
        />
        <br />
        <br />

        <label>Subject 3 Marks: </label>
        <input
          type="number"
          min="0"
          max="100"
          required
          value={subject3}
          onChange={(event) => setSubject3(event.target.value)}
        />
        <br />
        <br />

        <label>Subject 4 Marks: </label>
        <input
          type="number"
          min="0"
          max="100"
          required
          value={subject4}
          onChange={(event) => setSubject4(event.target.value)}
        />
        <br />
        <br />

        <button type="submit">Save Marks</button>
      </form>
    </div>
  );
}

export default ScoreInput;
