import React from 'react';
import logo from './logo.svg';
import './App.css';

const onNaverLogin = () => {

  window.location.href = "http://localhost:8080/oauth2/authorization/naver"
}

const getData = () => {
  fetch("http://localhost:8080/my" , {
    method: "GET",
    credentials: "include"
  })
      .then((res) => res.json())
      .then((data)=> {
        alert(data)
      })
      .catch((error)=> alert(error))
}

function App() {
  return (
    <>
      <button onClick={onNaverLogin}> Naver Login</button>
      <button onClick={getData}>Get Data</button>
    </>
  );
}

export default App;
