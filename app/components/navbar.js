const React = require("react");
require("./navbar.css");

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        logo
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Docs</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
