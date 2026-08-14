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
    <div className="w-[450px] mx-auto mt-10 p-6 border border-gray-400 rounded-lg">

      <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
        Enter Student Marks
      </h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Select Student:
          </label>

          <select
            className="w-full p-2 border border-gray-400 rounded"
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
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Semester:
          </label>

          <select
            className="w-full p-2 border border-gray-400 rounded"
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
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Subject 1 Marks:
          </label>

          <input
            type="number"
            min="0"
            max="100"
            required
            value={subject1}
            onChange={(event) => setSubject1(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Subject 2 Marks:
          </label>

          <input
            type="number"
            min="0"
            max="100"
            required
            value={subject2}
            onChange={(event) => setSubject2(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Subject 3 Marks:
          </label>

          <input
            type="number"
            min="0"
            max="100"
            required
            value={subject3}
            onChange={(event) => setSubject3(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-5">
          <label className="block font-bold text-gray-700 mb-2">
            Subject 4 Marks:
          </label>

          <input
            type="number"
            min="0"
            max="100"
            required
            value={subject4}
            onChange={(event) => setSubject4(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-bold rounded border border-blue-700"
        >
          Save Marks
        </button>

      </form>
    </div>
  );
}

export default ScoreInput;