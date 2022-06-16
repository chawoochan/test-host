import React from 'react'
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import './Home.css'

function Home() {
  
  
  const history = useHistory()

  function handleClick(e) {
    var Token = localStorage.getItem('login-token')
    if(!Token){
    alert('Login please')
    history.push('/login')
    } else if(Token){
      alert('매칭 시작')
      history.push('/match')
    }
  }

  return (
    <div style={{backgroundColor : "lightpink"}}>
      <button className='click-button' name='button' onClick={handleClick} style={{backgroundColor:'pink', color:'white'}}>
        매칭하기
      </button>
    </div>
  )
}

export default Home