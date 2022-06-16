import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import axios from 'axios';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function Login(props) {
  const [userEmail, setInputId] = useState('');
  const [Password, setInputPw] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const history = useHistory();

  const togglepass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }
  


  
  

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post(
      'http://211.229.250.42:25330/users/login',
      { userEmail: userEmail,
        password: Password,
      })
        .then(res=> {
          if(res.data.accessToken){
          console.log(res.data.accessToken);
          alert('로그인 성공!')
          localStorage.setItem('login-token', res.data.accessToken)
          history.push("/");
          }
          else{
            alert('로그인 실패!!')
          }
        }) 
        .catch(ex=> {
          console.log("login failed : " + ex);
        })
        .finally(()=> {console.log("login request end")});
  }

  const onRegister = (event) => {
    alert('회원가입 페이지로 이동합니다')
    history.push('./register')
  }
  
 
  

  return (
    <div style={{
      display:'flex', justifyContent:'center', alignItems:'center',
      width:'100%', height:'100vh', fontFamily:'Godum'
    }}>
      
      <div style={{color:"deeppink", border:'5px solid lightpink', padding:'100px'}}>
      <h1>Login</h1>
       <form style= {{display:'flex', flexDirection:'column', fontFamily:'Godum'}}>
        <label>아이디  </label>
        <input type='text' name='input_id' value={userEmail} onChange={handleInputId} />
      
        <span style={{}}>패스워드 </span>
        <input type={showPassword ? 'password' : 'text'} style={{}} name='input_pw' value={Password} onChange={handleInputPw} />
        <button onClick={togglepass} style={{}}>{!showPassword ? (<AiFillEyeInvisible size='18px'/>) : (<AiFillEye size='18px'/>)}</button>

        <button style={{backgroundColor:'pink', fontFamily:'Godum', color:'white'}} onClick={onSubmitHandler}>
          로그인
        </button>
        <button style={{backgroundColor:'pink', fontFamily:'Godum', color:'white'}} onClick={onRegister}>
          회원가입
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login