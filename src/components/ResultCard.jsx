function ResultCard({ result }) {
  const total =
    Number(result.internalMarks) + Number(result.eseMarks);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Exam Result
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Subject</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {result.subject}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Semester</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {result.semester}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">
            Internal Marks
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {result.internalMarks}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">
            ESE Marks
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {result.eseMarks}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-purple-50 p-5 text-center">
        <p className="text-sm font-medium text-purple-600">
          Total Marks
        </p>

        <p className="mt-1 text-3xl font-bold text-purple-700">
          {total}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;