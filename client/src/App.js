import React from "react"
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TimeZone from './components/timezone'

const App = () => {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={TimeZone}/>
        </div>
      </Router>
    )
}

export default App
