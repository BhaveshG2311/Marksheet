import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportFilter({ students }) {
  const navigate = useNavigate();
  const [sapId, setSapId] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sapId || !semester) {
      alert("Please select student and semester");
      return;
    }
    navigate(`/marksheet?sapId=${sapId}&semester=${semester}`);
  };

  return (
    <div>
      <h1>View Marksheet</h1>
      <form onSubmit={handleSubmit}>
        <label>Select Student: </label>
        <select
          value={sapId}
          onChange={(e) => setSapId(e.target.value)}
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
          onChange={(e) => setSemester(e.target.value)}
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

        <button type="submit">View Marksheet</button>
      </form>
    </div>
  );
}

export default ReportFilter;
