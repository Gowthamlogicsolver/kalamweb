/* eslint-disable react/prop-types */
import { useState } from 'react';

const Navbar = ({ scrollToSection, HomeRef, AboutRef, TeamsRef, FixturesRef }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='MainNavContainer'>
      <nav className="nav-class">
        <div className="clgLogo">
          <img src="kct.png" alt="College Logo" />
        </div>

        {/* Regular Navigation Items for larger screens */}
        <div className="nav-items">
          <ul className="nav-ul">
            <li className="nav-li">
              <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(HomeRef);}}>Home</a>
            </li>
            <li className="nav-li">
              <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(AboutRef);}}>About</a>
            </li>
            <li className="nav-li">
              <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(TeamsRef);}}>Teams</a>
            </li>
            <li className="nav-li">
              <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(FixturesRef);}}>Fixtures</a>
            </li>
          </ul>
        </div>

        {/* Hamburger icon for small screens */}
        <button className="hamburger" onClick={toggleDropdown}>
          ☰
        </button>

        {/* Dropdown Menu for small screens */}
        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(HomeRef); setDropdownOpen(false);}}>Home</a>
          <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(AboutRef); setDropdownOpen(false);}}>About</a>
          <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(TeamsRef); setDropdownOpen(false);}}>Teams</a>
          <a href="#" onClick={(e) => {e.preventDefault(); scrollToSection(FixturesRef); setDropdownOpen(false);}}>Fixtures</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
