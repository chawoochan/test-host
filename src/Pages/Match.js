import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';


export default function App() {
  const sellectList = ["","연상", "동갑", "연하"];
  
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const inputSpace = useRef();

  const [checkedbox, setCheckedbox] = useState({});

  const funcchekced = e => {
    setCheckedbox((checkedbox: Boolean) => !checkedbox)
    toggleTextbox();
  }

  function toggleTextbox() {
      inputSpace.disabledd = setCheckedbox.checked && true;
  }

const history = useHistory();
  
function handleClick(e) {
      alert('매칭 시작!')
      history.push('/matching')
}

  return (
    <div className="App">
      <h1>마음에 드는 조건 정하기</h1>
      <div>
        <select onChange={handleSelect} value={Selected}>
          {sellectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <span>
          선택: <b>{Selected}</b>
        </span>
        <br/><br/>
        <input type="checkbox" disadbled={Selected === "" ? true : Selected === "동갑" ? true : false} onClick={funcchekced} value={checkedbox} />
           원하는 나이:
        <input type="text" disabled={checkedbox === true ? true : false} />
        <button className='click-button' name='button' onClick={handleClick}
        style={
          {
            backgroundColor:'pink', color:'white', width:'150px'
          }
        }>
        매칭하기
      </button>
      </div>
    </div>
  );
}