import "../style/Home.css"

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Meu Sistema</h1>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;