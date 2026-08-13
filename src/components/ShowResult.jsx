import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowResult({ students, marks }) {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [program, setProgram] = useState("");
  const [semester, setSemester] = useState("");

  const [searchTriggered, setSearchTriggered] = useState(false);
  const [matchedStudent, setMatchedStudent] = useState(null);
  const [matchedMarks, setMatchedMarks] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!studentId.trim() || !semester.trim()) {
      alert("Please fill in Student ID and Semester to search.");
      return;
    }

    const foundStudent = students.find(
      (s) => s.studentId.trim().toLowerCase() === studentId.trim().toLowerCase()
    );
    setMatchedStudent(foundStudent || null);

    const filteredMarks = marks.filter(
      (m) =>
        m.studentId.trim().toLowerCase() === studentId.trim().toLowerCase() &&
        m.semester.trim().toLowerCase() === semester.trim().toLowerCase()
    );

    setMatchedMarks(filteredMarks);
    setSearchTriggered(true);
  };

  const getGrade = (totalMarks) => {
    if (totalMarks >= 90) return "A+";
    if (totalMarks >= 80) return "A";
    if (totalMarks >= 70) return "B+";
    if (totalMarks >= 60) return "B";
    if (totalMarks >= 50) return "C";
    if (totalMarks >= 40) return "D";
    return "F";
  };

  const totalObtained = matchedMarks.reduce(
    (sum, m) => sum + (Number(m.internalMarks) || 0) + (Number(m.eseMarks) || 0),
    0
  );
  const maxPossible = matchedMarks.length * 100;
  const percentage = maxPossible > 0 ? (totalObtained / maxPossible) * 100 : 0;

  const isPass =
    matchedMarks.length > 0 &&
    matchedMarks.every((m) => {
      const subjectTotal = (Number(m.internalMarks) || 0) + (Number(m.eseMarks) || 0);
      return subjectTotal >= 40;
    });

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-3">
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
                Program
              </label>
              <input
                type="text"
                placeholder="Program"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
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
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="flex-1 cursor-pointer rounded-md bg-slate-800 text-white hover:bg-slate-700 px-4 py-2.5 font-medium transition duration-150"
            >
              Search
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

      {searchTriggered && (
        <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
          {matchedStudent && (
            <div className="mb-6 rounded-md bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 space-y-1">
              <p><span className="font-semibold text-slate-700">Name:</span> {matchedStudent.name}</p>
              <p><span className="font-semibold text-slate-700">Student ID:</span> {matchedStudent.studentId}</p>
              <p><span className="font-semibold text-slate-700">Program:</span> {program || matchedStudent.program || "N/A"}</p>
              <p><span className="font-semibold text-slate-700">Semester:</span> {semester}</p>
            </div>
          )}

          {matchedMarks.length === 0 ? (
            <div className="rounded-md border border-dashed border-slate-200 py-12 text-center text-slate-400">
              <p className="font-semibold text-lg">No subject marks registered</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4 border border-slate-200">Subject</th>
                    <th className="py-3 px-4 text-center border border-slate-200">Internal Marks</th>
                    <th className="py-3 px-4 text-center border border-slate-200">ESE Marks</th>
                    <th className="py-3 px-4 text-center border border-slate-200">Total Marks</th>
                    <th className="py-3 px-4 text-center border border-slate-200">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {matchedMarks.map((mark, idx) => {
                    const total = (Number(mark.internalMarks) || 0) + (Number(mark.eseMarks) || 0);
                    return (
                      <tr key={idx} className="hover:bg-slate-50/55 transition">
                        <td className="py-3 px-4 font-semibold text-slate-700 border border-slate-200">{mark.subject}</td>
                        <td className="py-3 px-4 text-center text-slate-600 border border-slate-200">{mark.internalMarks}</td>
                        <td className="py-3 px-4 text-center text-slate-600 border border-slate-200">{mark.eseMarks}</td>
                        <td className="py-3 px-4 text-center font-bold text-slate-800 border border-slate-200">{total}</td>
                        <td className="py-3 px-4 text-center text-slate-700 border border-slate-200 font-bold">
                          {getGrade(total)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50 font-bold border-t border-slate-200">
                    <td className="py-3 px-4 text-slate-600 border border-slate-200">Total</td>
                    <td className="py-3 px-4 text-center text-slate-400 border border-slate-200">&mdash;</td>
                    <td className="py-3 px-4 text-center text-slate-400 border border-slate-200">&mdash;</td>
                    <td className="py-3 px-4 text-center text-slate-700 border border-slate-200">{totalObtained} / {maxPossible}</td>
                    <td className="py-3 px-4 text-center text-slate-700 border border-slate-200">{percentage.toFixed(2)}%</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold border-t border-slate-200">
                    <td className="py-3 px-4 text-slate-600 border border-slate-200" colSpan="3">
                      Status
                    </td>
                    <td className="py-3 px-4 text-center border border-slate-200" colSpan="2">
                      <span className="font-extrabold uppercase tracking-widest text-slate-700">
                        {isPass ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowResult;
