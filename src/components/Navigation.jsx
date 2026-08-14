import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <h2>Student Result System</h2>

      <Link to="/">Enter Marks</Link>
      {" | "}
      <Link to="/filter">View Marksheet</Link>

      <hr />
    </nav>
  );
}

export default Navigation;
