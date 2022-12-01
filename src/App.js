/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트추천','강남우동맛집','액세서리']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let toggle = () => {
    setModal(modal => !modal);
  }
  let [입력값, 입력값변경] = useState(''); 
  let [title, setTitle] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목].sort();
        글제목변경(copy);
      }}>가나다순</button>
        <button onClick={()=>{
          let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>change</button>
      <h4>{post}</h4>

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{toggle(); setTitle(i)}}>{a}</h4><span onClick={()=>{
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy)
              }}>
                😆{따봉[i]}</span>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value); 
      console.log(입력값)}} />

      <button onClick={()=>{setTitle(0)}}>title0</button>
      <button onClick={()=>{setTitle(1)}}>title1</button>
      <button onClick={()=>{setTitle(2)}}>title2</button>
            {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }
    </div>
  );
}
function Modal(props) {
  return (
  <div className="modal">
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
       <button>rmftnwjd</button>
  </div>
  )
}
export default App;
