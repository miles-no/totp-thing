import React from 'react'
import './App.css'
import Code from './Code'
import improve from './improver'
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile clientId="487484697431-82alkmmibo5lia2hlj8viet04tgbubom.apps.googleusercontent.com"        >
          <Code privateKey={improve("0.02111464272545641401052120110562236005062021")} />
        </Profile>
      </header>
    </div>
  )
}

export default App
