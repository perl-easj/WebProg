import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div className="ui card" style={{margin : '20px'}}>
      <div className="image">
        <i className="huge user icon"></i>
      </div>
      <div className="content">
        <h2 className="header">{player.name}</h2>
        <div className="meta">
          <h3>#{player.number}</h3>
        </div>
        <div className="description">
          <h4>Position: {player.position}</h4>
        </div>
      </div>
      <div className="extra content">
        <Link to='/roster'>Back</Link>
      </div>
    </div>    
  )
}

export default Player
