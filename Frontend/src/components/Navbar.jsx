import "./Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {

  return (
    <div className="Navbar">
        <h1>CampusCash</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li> <Link to="/bankConnecth">Bank Connect</Link></li>
        <li> <Link to="/featuresh">Features</Link></li>
      
        <li>
          <Link to="/register">SignUp</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}