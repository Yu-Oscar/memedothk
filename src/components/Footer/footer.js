import './footer.css'

function Footer () {
  return (
  <footer id="site-footer" className="site-footer py-5">
    <div className="container">
    <div className="row">
    <div className="col-lg-8 order-2 order-lg-1">
    <h1>
      LOGO
    </h1>
    <div>
    <a href="//instagram.com" target="_blank" rel="noreferrer">
    <svg height="18" width="18"><use xlinkHref="#icon-ig"></use></svg>
    </a>
    <a href="#" target="_blank">
    <svg height="18" width="18"><use xlinkHref="#icon-fb"></use></svg>
    </a>
    <p className="pt-2 m-0">Copyright  All rights reserved</p>
    </div>
    </div>
    <div className="col-lg-4 order-1">
    <div className="row">
    <div className="col-6">
    <div className="widget">
    <h5 className="widget-title">關於</h5>
    <ul className="list-inline vertical-list">
    <li><a data-fancybox="ajax" href="">投放廣告</a></li>
    <li><a data-fancybox="ajax" href="">聯絡我們</a></li>
    <li><a target="_blank" href="">備用網址</a></li>
    </ul>
    </div>
    </div>

      </div>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
