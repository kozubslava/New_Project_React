import { Link } from "react-router-dom";

function Header(params) {
  return (
    <header>
      <h1>Site</h1>
      <nav>
        <ul>
          {/* Використовуємо Link замість а  з пропом to замість href */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login page</Link>
          </li>
          <li>
            <Link to="/clicker">Clicker</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
