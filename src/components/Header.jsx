// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Map</Link> | <Link to="/national">National Summary</Link>
  </nav>
);

export default Header;