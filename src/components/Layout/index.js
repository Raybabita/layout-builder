import './index.css'
import Footer from '../Footer'
import Header from '../Header'
import Body from '../Body'

const Layout = () => (
  <div className="layout-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)
export default Layout
