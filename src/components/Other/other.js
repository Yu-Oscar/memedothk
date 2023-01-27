/* eslint-disable no-unused-vars */
import './other.css'
import OtherCardList from './other-card'

function Other () {
  return (
    <div className="other-section">
      <div className="other-header container">
        <div className="other-header-left">
          <h4>hello</h4>
          <h2>all meme</h2>
        </div>
        <div className="other-header-right">
          <h4>more</h4>
        </div>
      </div>
      <div className='container other'>
          <OtherCardList />
      </div>
    </div>
  )
}

export default Other
