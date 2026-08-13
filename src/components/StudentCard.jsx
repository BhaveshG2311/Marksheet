function StudentCard({ student }) {
  if (!student) return null;

  const initials = student.name
    ? student.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "ST";

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-700">
          {initials}
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Student Profile
          </h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-md bg-slate-50 border border-slate-100 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase">Name</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {student.name}
          </p>
        </div>

        <div className="rounded-md bg-slate-50 border border-slate-100 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase">Student ID</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {student.studentId}
          </p>
        </div>

        <div className="rounded-md bg-slate-50 border border-slate-100 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase">Roll Number</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {student.rollNo}
          </p>
        </div>

        <div className="rounded-md bg-slate-50 border border-slate-100 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase">Program</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {student.program}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;