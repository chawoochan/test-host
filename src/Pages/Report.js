import './Report.css';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Report() {
  const [reportContent, setreportContent] = useState({
    title: '',
    content: ''
  })
  const history = useHistory();
  var Token = localStorage.getItem('login-token')
  const headers = {
    'accessToken' : localStorage.getItem('login-token')
  }

  const [viewContent, setViewContent] = useState([]);
  const submitReport = ()=>{
    if(reportContent.title == ''|| !re.test(reportContent.title)){
      alert('이메일을 입력해주세요')
    }else{
    
    axios.post('/report', {
      userEmail : reportContent.title,
      report_text : reportContent.content
    },{
      headers: {
        "accessToken" : localStorage.getItem('login-token')
      }
    }
    ).then(()=>{
      alert('신고 완료');
    }).catch(error=> {
      console.log(error);
      alert('login please');
      history.push('/login')
      
    })
    }}
  

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const getValue = e => {
    const {name, value} = e.target;
    setreportContent({
      ...reportContent,
      [name]: value
    })
    console.log(reportContent);
  }
  return (
    <div className="App" style={{color: "deeppink"}}>
      <h1>신고 페이지</h1>
      <div className='Report-container'>
      
        <div className='Report-content'>
        
        </div>
      </div>
      <div className='form-wrapper'>
        <input className='title-input' types='text' placeholder='신고자 이메일' onChange={getValue} name='title'/>
      <CKEditor
        editor={ClassicEditor}
        data=''
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({event, editor, data});
          setreportContent({
            ...reportContent,
            content: data
          })
          console.log(reportContent);
        }}
      />
      </div>
      <button className="submit-button"
      onClick={submitReport}
      >신고하기</button>
      </div>
  );
}

export default Report