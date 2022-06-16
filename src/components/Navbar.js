import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Link  } from "react-router-dom";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { BsWindowSidebar } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
function Navbar() {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const onSubmit = (event) => {
    var Token = localStorage.getItem('login-token');
    event.preventDefault();
    if(Token){
      
      alert('로그아웃 성공')
      localStorage.removeItem('login-token');
      history.push('/');
    } else if(!Token){
      
      alert('Login First')
      history.push('/login');
    }
   
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='navbar-bar'>
            <button style={{display:'flex',flexDirection:'column',backgroundColor:'lightPink', fontFamily:'Godum', color:'white', marginRight:'50px'}} onClick={onSubmit}>로그아웃</button>
            파팅
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;