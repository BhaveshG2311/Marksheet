import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentInfo from "./components/StudentInfo.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Result from "./components/Result.jsx";
import ShowResult from "./components/ShowResult.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState([]);

  const [activeStudent, setActiveStudent] = useState({
    studentId: "",
    name: "",
    rollNo: "",
    program: "",
  });

  const [lastSavedStudent, setLastSavedStudent] = useState(null);

  const handleSaveStudent = (studentData) => {
    const index = students.findIndex((s) => s.studentId === studentData.studentId);
    let updated;
    if (index >= 0) {
      updated = [...students];
      updated[index] = studentData;
    } else {
      updated = [...students, studentData];
    }
    setStudents(updated);
    setLastSavedStudent(studentData);
    setActiveStudent({
      studentId: "",
      name: "",
      rollNo: "",
      program: "",
    });
  };

  const handleAddMarks = (marksData) => {
    setMarks((prev) => [...prev, marksData]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 px-4 py-10 font-sans text-slate-800">
        <div className="mx-auto max-w-4xl">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-6">
                  <StudentInfo
                    activeStudent={activeStudent}
                    setActiveStudent={setActiveStudent}
                    onSave={handleSaveStudent}
                  />
                  {lastSavedStudent && (
                    <StudentCard student={lastSavedStudent} />
                  )}
                </div>
              }
            />

            <Route
              path="/add-marks"
              element={
                <Result onAddMarks={handleAddMarks} />
              }
            />

            <Route
              path="/show-result"
              element={
                <ShowResult
                  students={students}
                  marks={marks}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;