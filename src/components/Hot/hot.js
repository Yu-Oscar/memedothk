/* eslint-disable no-unused-vars */
import './hot.css'
import HotCardList from './hot-card'

function Hot () {
  return (
    <div className="hot-section">
      <div className="hot-header container">
          <div className="hot-header-left">
            <h4>hello</h4>
            <h2>sth</h2>
          </div>
          <div className="hot-header-right">
            <h4>more</h4>
          </div>
      </div>
      <div className="container">
        <HotCardList />
      </div>
  </div>
  )
}

export default Hot
