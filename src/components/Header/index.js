// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="left-nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="list-name">Wave</p>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link list-name" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link list-name" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link list-name" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
