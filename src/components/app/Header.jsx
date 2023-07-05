import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="flex justify-between items-center px-6 py-4">
        <div>
            <h1>Artopus</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/manage">Manage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
