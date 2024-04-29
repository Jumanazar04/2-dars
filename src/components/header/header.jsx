import header_img from '../../assets/header_img.png';

import "./header.css"

export function Header(){
    return <header >
    <nav className='container'>
      <h2 className='logoText'>
        HIDEVA GROUP 
      </h2>
      <ul>
        <li className='navbarLink'>
          Home
        </li>
        <li className='navbarLink'>Services</li>
        <li className='navbarLink'>About</li>
        <li className='navbarLink'>Blog</li>
        <button className='btn'>Contact us</button>
      </ul>
    </nav>
    <div className="header">
      <div className="headOne container">
            <div className="head_1">
                <span>
                  We are Hideva Group
                </span>
                <h1>
                  Design and Build Contractor
                </h1>
                <p>
                  With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship
                </p>
                <button className='btn'>
                  Get a quote
                </button>
            </div>
            <img src={header_img} alt="headerimg" />
      </div>
    </div>
    
  </header>

   
}