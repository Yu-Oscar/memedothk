import './header.css'

function Header () {
  return (
    <header >
          <div className="container header" >
            <div className="header-left col">
              <a href="" className="menu ">
                <div className="menu-button"></div>
                <div className="menu-button"></div>
                <div className="menu-button"></div>
              </a>
              <div className="left-tags">
                投稿1
              </div>
              <div className="left-tags">
                製作
              </div>
              <div className="left-tags">
                分享
              </div>
            </div>

            <div className="logo col-3">
              <a href="dot.html">LOGO</a>
            </div>

            <div className="header-right col">
              <div className="right-tags ">
                search
              </div>
              <div className="right-tags ">
                other
              </div>
            </div>

          </div>
        </header>
  )
}

export default Header
