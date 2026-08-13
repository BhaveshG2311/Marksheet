import Header from './Header';

function Result({ mlMarks, javaMarks, htmlMarks, reactMarks }) {
  const total = mlMarks + javaMarks + htmlMarks + reactMarks;
  const percentage = (total / 400) * 100;
  const status = (mlMarks >= 40 && javaMarks >= 40 && htmlMarks >= 40 && reactMarks >= 40) ? "PASS" : "FAIL";

  return (
    <>
      <tr className="border border-black font-bold divide-x divide-black bg-slate-50">
        <td className="p-2">Total</td>
        <td className="p-2">400</td>
        <td className="p-2">{total}</td>
        <td className="p-2">{percentage.toFixed(2)}%</td>
      </tr>
      <tr className="border border-black font-bold divide-x divide-black">
        <td className="p-2" colSpan="3">Status</td>
        <td className={`p-2 ${status === "PASS" ? "text-green-600" : "text-red-600"}`}>
          {status}
        </td>
      </tr>
    </>
  );
}

export default function Marksheet() {
  function getGrade(marks) {
    if (marks >= 90) {
      return <span className="text-green-600">A+</span>;
    } else if (marks >= 80) {
      return <span className="text-green-600">A</span>;
    } else if (marks >= 70) {
      return <span className="text-green-600">B+</span>;
    } else if (marks >= 60) {
      return <span className="text-green-600">B</span>;
    } else if (marks >= 50) {
      return <span className="text-green-600">C</span>;
    } else if (marks >= 40) {
      return <span className="text-green-600">D</span>;
    } else {
      return <span className="text-red-600">F</span>;
    }
  }

  const mlMarks = 73;
  const javaMarks = 37;
  const htmlMarks = 99;
  const reactMarks = 75;

  return (
    <div className="border border-black overflow-hidden">
      <Header />

      <div className="p-4">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border border-black font-bold divide-x divide-black">
              <td className="p-2">Subject</td>
              <td className="p-2">Max Marks</td>
              <td className="p-2">Marks Obtained</td>
              <td className="p-2">Grade</td>
            </tr>

            <tr className="border border-black divide-x divide-black">
              <td className="p-2">Machine Learning</td>
              <td className="p-2">100</td>
              <td className="p-2">{mlMarks}</td>
              <td className="p-2">{getGrade(mlMarks)}</td>
            </tr>

            <tr className="border border-black divide-x divide-black">
              <td className="p-2">Java</td>
              <td className="p-2">100</td>
              <td className="p-2">{javaMarks}</td>
              <td className="p-2">{getGrade(javaMarks)}</td>
            </tr>

            <tr className="border border-black divide-x divide-black">
              <td className="p-2">HTML</td>
              <td className="p-2">100</td>
              <td className="p-2">{htmlMarks}</td>
              <td className="p-2">{getGrade(htmlMarks)}</td>
            </tr>

            <tr className="border border-black divide-x divide-black">
              <td className="p-2">React</td>
              <td className="p-2">100</td>
              <td className="p-2">{reactMarks}</td>
              <td className="p-2">{getGrade(reactMarks)}</td>
            </tr>

            <Result
              mlMarks={mlMarks}
              javaMarks={javaMarks}
              htmlMarks={htmlMarks}
              reactMarks={reactMarks}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}