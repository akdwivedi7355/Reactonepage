import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
      <div className=' header-content'>
        <div className='logo'>
          OnePage
        </div>
        <div className='navigation'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Contact</a></li>
            <li className='get-started'><a href="">Get Started</a></li>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
