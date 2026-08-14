import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScoreInput from "./components/ScoreInput";
import ReportFilter from "./components/ReportFilter";
import Marksheet from "./components/Marksheet";

const preloadedStudents = [
  {
    sapId: "60",
    name: "Bhavesh",
    course: "CS",
    marks: {
      "sem 1": { subject1: 85, subject2: 90, subject3: 78, subject4: 92 },
      "sem 2": { subject1: 88, subject2: 84, subject3: 91, subject4: 80 },
      "sem 3": { subject1: 92, subject2: 89, subject3: 85, subject4: 94 },
      "sem 4": { subject1: 76, subject2: 82, subject3: 88, subject4: 85 },
      "sem 5": { subject1: 90, subject2: 95, subject3: 87, subject4: 93 },
      "sem 6": { subject1: 94, subject2: 92, subject3: 89, subject4: 96 }
    }
  },
  {
    sapId: "82",
    name: "Rutwik",
    course: "BBA",
    marks: {
      "sem 1": { subject1: 72, subject2: 80, subject3: 85, subject4: 78 },
      "sem 2": { subject1: 75, subject2: 82, subject3: 80, subject4: 88 },
      "sem 3": { subject1: 82, subject2: 78, subject3: 84, subject4: 81 },
      "sem 4": { subject1: 80, subject2: 85, subject3: 76, subject4: 83 },
      "sem 5": { subject1: 85, subject2: 88, subject3: 90, subject4: 87 },
      "sem 6": { subject1: 88, subject2: 91, subject3: 86, subject4: 90 }
    }
  },
  {
    sapId: "82",
    name: "Akash",
    course: "B.Com",
    marks: {
      "sem 1": { subject1: 60, subject2: 65, subject3: 58, subject4: 70 },
      "sem 2": { subject1: 62, subject2: 59, subject3: 68, subject4: 61 },
      "sem 3": { subject1: 70, subject2: 66, subject3: 72, subject4: 65 },
      "sem 4": { subject1: 58, subject2: 64, subject3: 60, subject4: 70 },
      "sem 5": { subject1: 68, subject2: 72, subject3: 65, subject4: 74 },
      "sem 6": { subject1: 72, subject2: 70, subject3: 75, subject4: 78 }
    }
  }
];

function App() {
  const [students, setStudents] = useState(preloadedStudents);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {}
          <Route path="/" element={<ScoreInput students={students} setStudents={setStudents}/>}/>

          <Route path="/filter" element={ <ReportFilter students={students} />}/>

          <Route path="/marksheet" element={<Marksheet students={students} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;