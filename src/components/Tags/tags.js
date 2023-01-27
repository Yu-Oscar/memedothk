/* eslint-disable no-unused-vars */
import './tags.css'
import TagCardList from './tag-card'

function Tags () {
  return (
    <div className="tag-section">
      <div className='tags-header'>
        <h2>Tags</h2>
        <h4>+</h4>
      </div>
      <div className="tag-box">
        <TagCardList />
      </div>
   </div>
  )
}

export default Tags
