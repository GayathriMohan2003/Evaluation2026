import './Navbar.css';

function Navbar(){
  return(
    <nav className="nav">
      <div className="logo">▢</div>

      <ul className="menu">
        <li>SERVICES</li>
        <li>WORKS</li>
        <li className="active">CASE STUDY</li>
        <li>CAREERS</li>
        <li>BLOG</li>
      </ul>

      <button className="contact">CONTACT US</button>
    </nav>
  )
}

export default Navbar;