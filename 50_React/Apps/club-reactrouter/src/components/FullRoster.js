import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div className="ui segment">
    <div className="ui relaxed divided list" style={{ marginTop: '10px' }}>
      {
        PlayerAPI.all().map(p => (
          <div className="item" key={p.number}>
            <i className="large user middle aligned icon"></i>
            <div className="content">
              <Link to={`/roster/${p.number}`}>
                <h3>
                  {p.name}
                </h3>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default FullRoster
