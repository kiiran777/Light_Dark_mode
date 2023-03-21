// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChange = () => {
    this.setState(oldState => ({isDarkMode: !oldState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const cardBackground = isDarkMode ? 'dark-mode' : 'light-mode'
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card ${cardBackground}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
