import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <div className="ui menu">
        <li className="item"><Link to='/'>Home</Link></li>
        <li className="item"><Link to='/roster'>Roster</Link></li>
        <li className="item"><Link to='/schedule'>Schedule</Link></li>
      </div>    
    </nav>
  </header>
)

export default Header
