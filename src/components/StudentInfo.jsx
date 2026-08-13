import { useNavigate } from "react-router-dom";

function StudentInfo({ activeStudent, setActiveStudent, onSave }) {
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setActiveStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    if (!activeStudent.studentId.trim() || !activeStudent.name.trim()) {
      return false;
    }
    onSave(activeStudent);
    return true;
  };

  const handleAddScoresClick = () => {
    const saved = handleSave();
    if (saved) {
      navigate("/add-marks");
    } else {
      if (!activeStudent.studentId.trim()) {
        alert("Please enter a Student ID first.");
      } else {
        navigate("/add-marks");
      }
    }
  };

  const handleShowResultClick = () => {
    const saved = handleSave();
    if (saved) {
      navigate("/show-result");
    } else {
      if (!activeStudent.studentId.trim()) {
        alert("Please enter a Student ID first.");
      } else {
        navigate("/show-result");
      }
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Student ID
            </label>
            <input
              type="text"
              placeholder="Student ID"
              value={activeStudent.studentId || ""}
              onChange={(e) => handleChange("studentId", e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={activeStudent.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Roll Number
            </label>
            <input
              type="text"
              placeholder="Roll Number"
              value={activeStudent.rollNo || ""}
              onChange={(e) => handleChange("rollNo", e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Program / Branch
            </label>
            <input
              type="text"
              placeholder="Program"
              value={activeStudent.program || ""}
              onChange={(e) => handleChange("program", e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition duration-150"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="flex-1 cursor-pointer rounded-md bg-slate-800 text-white hover:bg-slate-700 px-4 py-2.5 font-medium transition duration-150"
          >
            Save Info
          </button>

          <button
            type="button"
            onClick={handleAddScoresClick}
            className="flex-1 cursor-pointer rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 px-4 py-2.5 font-medium transition duration-150"
          >
            Add Exam Scores
          </button>

          <button
            type="button"
            onClick={handleShowResultClick}
            className="flex-1 cursor-pointer rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 px-4 py-2.5 font-medium transition duration-150"
          >
            Show Result
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentInfo;