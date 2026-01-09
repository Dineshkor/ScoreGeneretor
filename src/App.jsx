
import './App.css'
import ScoreCard from './components/ScoreCard'
import { useState } from 'react'
function App() {

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  function addHomeScore(value) {
    setHomeScore(homeScore + value)
  }

  function addAwayScore(value) {
    setAwayScore(awayScore + value)
  }

  function resetScore() {
    setHomeScore(0)
    setAwayScore(0)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-8 px-20 py-8 border border-gray-300 rounded-lg bg-[#0f172a] text-white'>
      <div><h2 className='text-5xl font-bold font-poppins'>ScoreBoard</h2></div>
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <ScoreCard teamName="Home" score={homeScore} handleClick={addHomeScore} />
        <div className='text-5xl font-bold font-poppins'>VS</div>
        <ScoreCard teamName="Away" score={awayScore} handleClick={addAwayScore} />
      </div>
      <div>
        <button className='px-4 py-2 text-white rounded-lg bg-blue-500' onClick={resetScore}>Reset</button>
      </div>

    </div>
  )
}

export default App
