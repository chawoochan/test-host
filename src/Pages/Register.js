import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [posts, setPosts] = useState([]);
  const apiEndpoint = "http://jsonplaceholder.typicode.com/posts"
  
 const history = useHistory();

  const [userEmail, setInputEmail] = useState('');
  const [Password, setInputPw] = useState('');
  const [PwConfirm, setInputPwConfirm] = useState('');
  const [userName, setInputName] = useState('');
  const [userMajor, setInputMajor] = useState('');
  const [userAge, setInputAge] = useState('');
  const [userKakao_id, setInputkakao] = useState('');
  const [userGender, setuserGender] = useState('남자');
  const [showPassword, setShowPassword] = useState('');
  
   const togglepass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }
  const handleInputpw = (e) => {
    setInputPw(e.target.value)
  }

  const handlePwConfirm = (e) => {
    setInputPwConfirm(e.target.value)
  }
  
  const handleName = (e) => {
    setInputName(e.target.value)
  }
  const handlePart = (e) => {
    setInputMajor(e.target.value)
  }
  const handleAge = (e) => {
    setInputAge(e.target.value)
  }
  const handleKaKao = (e) => {
    setInputkakao(e.target.value)
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(userEmail == '' || !re.test(userEmail)){
      alert('이메일 형식이 아닙니다')
    }
    else{axios.post(
      'http://211.229.250.42:25330/users/sign_up',
      { userEmail: userEmail,
        password: Password,
        userAge: userAge,
        userName: userName,
        userMajor: userMajor,
        userKakao_id: userKakao_id, 
        userGender: userGender})
        .then(function(response) {alert('회원가입 성공!'); history.push('/')})
        .catch(error => {console.log('error',error.response)})
    }
  }
  const selectList = ["남자", "여자"]
  const [Selected, setSelected] = useState('');
  const handleSelect = (e) => {
    setuserGender(e.target.value); 
  }
  
 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	
  
  
  

  return (
    <div style={{
      display:'flex', justifyContent:'center', alignItems:'center',
      width:'100%', height:'100vh', fontFamily:'Godum'
    }}>
      
      <div style={{color:"deeppink", border:'5px solid lightpink', padding:'100px'}}>
      <h1>회원가입</h1>
       <form style= {{display:'flex', flexDirection:'column', fontFamily:'Godum'}}>
        <label>이메일 </label>
        <input type='email' name='input_id' value={userEmail} onChange={handleInputEmail} />
      
        <label>패스워드 </label>
        <input type='text' name='input_pw' value={Password} onChange={handleInputpw} />
        
        <label>패스워드 확인</label>
        <input type='text' name='input_pw' value={PwConfirm} onChange={handlePwConfirm} />
        <label>이름 </label>
        <input type='text' name='input_pw' value={userName} onChange={handleName} />
        <label>나이 </label>
        <input type='text' name='input_pw' value={userAge} onChange={handleAge} />
        <label>학과</label>
        <input type='text' name='input_pw' value={userMajor} onChange={handlePart} />
        <label>카카오톡 아이디 </label>
        <input type='text' name='input_pw' value={userKakao_id} onChange={handleKaKao} />
        <label>성별</label>
        <select onChange={handleSelect} value={userGender}>
          {selectList.map((item)=> (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={onSubmitHandler} style={{backgroundColor:"pink", color:"white", fontFamily:"Godum"}}>
          회원가입
        </button>
      </form>
    </div>
    </div>
  )
}

export default Register