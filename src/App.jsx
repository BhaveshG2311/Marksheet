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
    marks: {}
  },
  {
    sapId: "82",
    name: "Rutwik",
    course: "BBA",
    marks: {}
  },
  {
    sapId: "82",
    name: "Akash",
    course: "B.Com",
    marks: {}
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
