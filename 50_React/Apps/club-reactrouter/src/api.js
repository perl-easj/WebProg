// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 18, name: "Ben Blocker", position: "G" },
    { number: 21, name: "Dave Defender", position: "D" },
    { number: 33, name: "Sam Sweeper", position: "D" },
    { number: 40, name: "Matt Midfielder", position: "M" },
    { number: 51, name: "William Winger", position: "M" },
    { number: 68, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
