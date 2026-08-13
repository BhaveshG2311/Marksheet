import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Result({ onAddMarks }) {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [internalMarks, setInternalMarks] = useState("");
  const [eseMarks, setEseMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentId.trim() || !subject.trim() || !semester.trim()) {
      alert("Please fill in Student ID, Subject, and Semester.");
      return;
    }

    const marksData = {
      studentId: studentId.trim(),
      subject: subject.trim(),
      semester: semester.trim(),
      internalMarks: Number(internalMarks),
      eseMarks: Number(eseMarks),
    };

    onAddMarks(marksData);

    setStudentId("");
    setSemester("");
    setSubject("");
    setInternalMarks("");
    setEseMarks("");
  };

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Student ID
            </label>
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Semester
            </label>
            <input
              type="text"
              placeholder="Semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Subject Name
            </label>
            <input
              type="text"
              placeholder="Subject Name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Internal Marks
            </label>
            <input
              type="number"
              placeholder="Internal Marks"
              value={internalMarks}
              onChange={(e) => setInternalMarks(e.target.value)}
              min="0"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              ESE Marks
            </label>
            <input
              type="number"
              placeholder="ESE Marks"
              value={eseMarks}
              onChange={(e) => setEseMarks(e.target.value)}
              min="0"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="submit"
            className="flex-grow cursor-pointer rounded-md bg-slate-800 text-white hover:bg-slate-700 px-4 py-2.5 font-medium transition duration-150"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 px-4 py-2.5 font-medium transition duration-150"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Result;